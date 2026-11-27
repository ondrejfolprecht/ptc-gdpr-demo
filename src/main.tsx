import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Icon from './Icon'
import course from './course.json'
import { lessons } from './lesson-content'
import { theoryExtras, recapExtras } from './theory-content'
import { extraTopics, aiUseCases, aiAdoption, patientSurvey, leadership } from './course-extensions'
import { fresh, readProgress, saveProgress, score, unlocked } from './state'
import type { Progress } from './state'
import { MatchBoard, WordGaps, requestCards, requestTargets, aiCards, aiTargets, recapWordKeys } from './PracticeActivities'
import './style.css'

type Activity = typeof course.incident

function Choice({ data, value, select }: { data: Activity; value: number | null; select: (index: number) => void }) {
  return <div className="choice">
    <h3>{data.title}</h3>
    <div className="options" role="group" aria-label="Možnosti odpovědi">
      {data.choices.map((choice, i) => <button key={choice} className={value === i ? 'option selected' : 'option'} aria-pressed={value === i} onClick={() => select(i)}>
        <span className="letter">{String.fromCharCode(65 + i)}</span>{choice}
      </button>)}
    </div>
    {value !== null && <Feedback correct={value === data.key}>{data.feedback[value] ?? data.feedback[0]}</Feedback>}
  </div>
}

function Feedback({ correct, children }: { correct: boolean; children: string }) {
  return <div role="status" className={'feedback ' + (correct ? 'correct' : 'learn')}>
    <Icon name={correct ? 'check' : 'alert'} /><div><strong>{correct ? 'Správný postup' : 'Co je dobré vědět'}</strong><p>{children}</p></div>
  </div>
}

function App() {
  const [progress, setProgress] = useState<Progress>(readProgress)
  const [indexOpen] = useState(() => !window.matchMedia('(max-width: 650px)').matches)
  const [transcript, setTranscript] = useState(false)
  const title = useRef<HTMLHeadingElement>(null)
  const resetDialog = useRef<HTMLDialogElement>(null)
  const viewKey = [progress.chapter, progress.phase, progress.chapter === 1 && progress.phase === 'practice' ? progress.mailStep : 0].join(':')
  const previousView = useRef(viewKey)
  const caseHeading = useRef<HTMLHeadingElement>(null)
  const [caseMoved, setCaseMoved] = useState(false)
  const [quizIndex, setQuizIndex] = useState(() => Math.max(0, progress.answers.indexOf(null)))
  const [attemptView, setAttemptView] = useState<'quiz' | 'certificate'>('quiz')
  const chapter = progress.chapter
  const testChapter = course.chapters.length - 1
  const done = progress.completed.length
  const passed = progress.best !== null && progress.best >= course.pass
  const [name, heading, time] = course.chapters[chapter]
  const lesson = lessons[chapter as keyof typeof lessons] as typeof lessons[1] | typeof lessons[5] | undefined
  const practice = progress.phase === 'practice'
  const theory = lesson && 'learn' in lesson ? lesson : undefined
  const theoryExtra = theoryExtras[chapter]
  const allAnswers = progress.answers.every(answer => answer !== null)
  const result = score(progress.answers)
  const currentAttemptPassed = progress.submitted && result >= course.pass
  const activeQuestion = course.questions[quizIndex]

  useEffect(() => { saveProgress(progress) }, [progress])
  useEffect(() => {
    if (previousView.current !== viewKey) {
      previousView.current = viewKey
      title.current?.focus({ preventScroll: true })
      window.scrollTo(0, 0)
    }
  }, [viewKey])
  useEffect(() => {
    if (caseMoved) { caseHeading.current?.focus(); setCaseMoved(false) }
  }, [caseMoved])

  function update(patch: Partial<Progress>) { setProgress(current => ({ ...current, ...patch })) }

  function go(next: number, phase: Progress['phase'] = 'theory') {
    if (unlocked(progress, next) && (phase === 'theory' || progress.theoryRead.includes(next))) {
      update({ chapter: next, phase })
      setAttemptView('quiz')
    }
  }

  function next() {
    setProgress(current => ({
      ...current, completed: current.completed.includes(chapter) ? current.completed : [...current.completed, chapter],
      chapter: chapter + 1, phase: 'theory',
    }))
  }

  function startPractice() {
    setProgress(current => ({
      ...current, phase: 'practice',
      theoryRead: current.theoryRead.includes(chapter) ? current.theoryRead : [...current.theoryRead, chapter],
    }))
  }

  const ready = [true, progress.emailAnswer !== null && progress.mailStep === 1 && progress.incident !== null,
    progress.requestMatches.every((value, i) => value === requestCards[i].correct),
    progress.camera !== null, progress.aiStep === course.aiScenes.length - 1 && progress.aiCategories.every((value,i) => value === aiCards[i].correct) && progress.ai !== null,
    progress.recapWords.every((value,i) => value === recapWordKeys[i])][chapter]


  function retry() {
    setQuizIndex(0)
    update({ answers: fresh().answers, submitted: false })
    title.current?.focus()
    window.scrollTo(0, 0)
  }

  function submit() {
    if (!allAnswers) return
    update({ submitted: true, best: Math.max(progress.best ?? 0, result) })
    title.current?.focus()
    window.scrollTo(0, 0)
  }

  const buttonText = chapter === 5 ? 'Spustit test' : 'Dokončit lekci a pokračovat'
  const firstIncomplete = course.chapters.findIndex((_, i) => i < testChapter && !progress.completed.includes(i))
  const resumeChapter = firstIncomplete === -1 ? testChapter : firstIncomplete

  return <>
    <a className="skip" href="#course-main">Přejít k obsahu</a>
    <header className="top"><div className="top-inner">
      <a className="brand" href="#uvod" onClick={e => { e.preventDefault(); go(0) }}>
        <span className="brand-mark"><Icon name="shield" size={23} /></span>
        <span>Protonové centrum<small>Vzdělávání zaměstnanců</small></span>
      </a>
      <button className="top-course" onClick={() => go(0)}>Přehled kurzu</button>
      <span className="demo">Ukázkový kurz</span>
    </div></header>
    <div className="layout">
      <aside className="side" aria-label="Přehled kurzu">
        <details className="course-nav" open={indexOpen}>
          <summary className="nav-head"><span>Obsah kurzu</span><strong>{done}/6 hotovo</strong></summary>
          <progress max={6} value={done} aria-label="Dokončené lekce" />
          <nav aria-label="Kapitoly">
            {course.chapters.map(([label], i) => {
              const isOpen = unlocked(progress, i)
              const complete = progress.completed.includes(i) || (i === testChapter && passed)
              const itemLesson = lessons[i as keyof typeof lessons]
              return <div className="index-section" key={label}>
                <button className={'nav-item ' + (chapter === i ? (itemLesson ? 'current-section' : 'active') : '')}
                  aria-current={chapter === i && !itemLesson ? 'step' : undefined} disabled={!isOpen} onClick={() => go(i)}>
                  <span className="nav-label">{itemLesson?.title ?? (i === testChapter ? 'Závěrečný test' : label)}</span>
                  {complete ? <span className="nav-status" aria-label="Dokončeno"><Icon name="check" size={16} /></span>
                    : !isOpen ? <span aria-label="Uzamčeno" className="nav-lock"><Icon name="lock" size={14} /></span> : null}
                </button>
                {itemLesson && chapter === i && <div className="index-activities">
                  <button className="index-link" aria-current={!practice ? 'step' : undefined} onClick={() => go(i)}><Icon name="file" size={15} /> Teorie</button>
                  <button className="index-link" aria-current={practice ? 'step' : undefined} disabled={!progress.theoryRead.includes(i)} onClick={() => go(i, 'practice')}><Icon name="list" size={15} /> Procvičení</button>
                </div>}
              </div>
            })}
          </nav>
        </details>
        <button className="reset" onClick={() => resetDialog.current?.showModal()}>Smazat postup</button>
      </aside>
      <main id="course-main" className="main">
        <nav className="breadcrumbs" aria-label="Drobečková navigace">
          {chapter === 0 ? <span aria-current="page">GDPR v praxi PTC</span> : <>
            <button onClick={() => go(0)}>GDPR v praxi PTC</button><span aria-hidden="true">/</span>
            <span aria-current="page">{lesson?.title ?? heading}</span>
          </>}
        </nav>
        <section className={chapter === 0 ? 'hero panel' : 'panel chapter'} aria-labelledby="chapter-title">
          {chapter === 0 ? <>
            <div className="course-head">
              <h1 ref={title} tabIndex={-1} id="chapter-title">GDPR v praxi PTC</h1>
              <div className="course-tab">Kurz</div>
            </div>
            <div className="course-intro">
              <div>
                <h2>Úvod</h2>
                <p className="lead">{course.intro}</p>
                <div className="intro-meta"><span><Icon name="clock" size={17} /> Přibližně 20–25 min</span><span><Icon name="list" size={17} /> 6 lekcí a test</span></div>
                <button className="primary" onClick={() => done ? go(resumeChapter) : next()}>{done ? 'Pokračovat v kurzu' : 'Začít kurz'} <Icon name="next" size={18} /></button>
              </div>
              <img className="course-image" src={new URL('./reception.svg', import.meta.url).href} alt="" />
            </div>
            <div className="course-sections" aria-label="Přehled témat">
              {course.chapters.slice(1).map(([label, heading, duration], index) => {
                const i = index + 1
                const item = lessons[i as keyof typeof lessons]
                return <section className="course-section" key={label}>
                  <h2>{item?.title ?? heading}</h2>
                  <button className="activity-row" disabled={!unlocked(progress, i)} onClick={() => go(i)}>
                    <span className={'activity-icon ' + (item ? '' : 'quiz-icon')}><Icon name={item ? 'file' : 'award'} /></span>
                    <span>{item ? 'Teorie' : 'Otevřít závěrečný test'}<small>{duration} min</small></span>
                    <span className="activity-status">{progress.completed.includes(i) || (i === testChapter && passed) ? 'Hotovo' : !unlocked(progress, i) ? 'Po dokončení předchozí lekce' : 'Otevřít'}</span>
                  </button>
                  {item && <button className="activity-row" disabled={!unlocked(progress, i) || !progress.theoryRead.includes(i)} onClick={() => go(i, 'practice')}>
                    <span className="activity-icon practice-icon"><Icon name="list" /></span><span>Procvičení</span>
                    <span className="activity-status">{progress.completed.includes(i) ? 'Hotovo' : !progress.theoryRead.includes(i) ? 'Po teorii' : 'Otevřít'}</span>
                  </button>}
                </section>
              })}
            </div>
          </> : <>
            <div className="section-head">
              <span className="activity-icon"><Icon name={chapter === testChapter ? 'award' : practice ? 'list' : 'file'} /></span>
              <div><span className="eyebrow">{lesson ? (practice ? '2 ze 2 · Procvičení' : '1 ze 2 · Teorie') : 'Ověření znalostí'}<span className="mini-dot" />{name}</span>
              <h1 ref={title} id="chapter-title" tabIndex={-1}>{lesson?.title ?? heading}</h1></div>
            </div>
            {lesson && <nav className="activity-tabs" aria-label="Části lekce">
              <button aria-current={!practice ? 'step' : undefined} onClick={() => go(chapter)}><Icon name="file" size={17} /> 1. Teorie</button>
              <button aria-current={practice ? 'step' : undefined} disabled={!progress.theoryRead.includes(chapter)} onClick={() => go(chapter, 'practice')}><Icon name="list" size={17} /> 2. Procvičení</button>
            </nav>}
            {theory && !practice && <div className="lesson-theory">
              {chapter === 3 && <p className="public-demo-note"><Icon name="info" size={16} /> Konkrétní interní postupy a kontakty PTC budou k dispozici až v ostré verzi kurzu v Moodle. Na této veřejné adrese nejsou zveřejněny.</p>}
              {theoryExtra && <div className="theory-hero">
                <div className="theory-hero-copy">
                  <span className="theory-overline">GDPR V KAŽDODENNÍ PRAXI</span>
                  <h2>Proč na tom záleží</h2>
                  <p>{theoryExtra.lead}</p>
                </div>
                <figure className="theory-photo">
                  <img src={theoryExtra.photo.src} alt={theoryExtra.photo.alt} loading="lazy" decoding="async"/>
                  <figcaption>Ilustrační foto · <a href={theoryExtra.photo.url} target="_blank" rel="noreferrer">{theoryExtra.photo.credit}</a></figcaption>
                </figure>
              </div>}
              <h2 className="theory-section-title">Základní pravidla</h2>
              <div className="theory-rules">{theory.rules.map(([label, copy], i) => <div className="theory-rule-card" key={label}>
                <span className="theory-number">{String(i+1).padStart(2,'0')}</span><div><h3>{label}</h3><p>{copy}</p></div>
              </div>)}</div>
              {extraTopics[chapter]?.map(topic => <details className="theory-more" key={topic.title}>
                <summary><Icon name="file" size={17}/> Více informací: {topic.title}</summary>
                <div className="theory-more-content">
                  <p>{topic.intro}</p>
                  <div className="lesson-extension-grid">{topic.points.map(point => <article key={point.title}>
                    <h3>{point.title}</h3><p>{point.text}</p>
                  </article>)}</div>
                  {topic.source && <a href={topic.source.url} target="_blank" rel="noopener noreferrer" className="lesson-extension-source">Právní zdroj: {topic.source.name} <Icon name="external" size={14}/></a>}
                </div>
              </details>)}
              {theoryExtra && <>
                <div className="theory-section-intro"><h2>Dvě situace z praxe</h2></div>
                <div className="theory-examples">{(chapter === 1 || chapter === 2 || chapter === 4
                  ? [theoryExtra.examples[0], theoryExtra.examples[2]]
                  : theoryExtra.examples.slice(0, 2)).map((example, i) => <article className="theory-example" key={example.title}>
                  <div className="theory-example-head"><span>PŘÍKLAD {i + 1}</span><h3>{example.title}</h3></div>
                  <p>{example.situation}</p>
                  <div className="theory-example-action"><strong>Jak postupovat</strong><p>{example.action}</p></div>
                </article>)}</div>
                <section className="real-incident" aria-labelledby={"real-incident-title-" + chapter}>
                  <div className="real-incident-top">
                    <span className="real-incident-tag"><Icon name="alert" size={16}/> Skutečný případ</span>
                    <span className="real-incident-place">{theoryExtra.realCase.location} · {theoryExtra.realCase.year}</span>
                  </div>
                  <h2 id={"real-incident-title-" + chapter}>{theoryExtra.realCase.name}</h2>
                  <div className="real-incident-grid">
                    <div><h3>Co se stalo</h3><p>{theoryExtra.realCase.mistake}</p></div>
                    <div><h3>Jaký byl následek</h3><p>{theoryExtra.realCase.consequence}</p></div>
                  </div>
                  <div className="real-incident-takeaway"><strong>Co si z toho odnést</strong><p>{theoryExtra.realCase.takeaway}</p></div>
                  <a className="real-incident-source" href={theoryExtra.realCase.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Zdroj: {theoryExtra.realCase.sourceName} <Icon name="external" size={15}/>
                  </a>
                </section>
                <section className="theory-checklist theory-essentials">
                  <div><span className="theory-overline">ZAPAMATUJTE SI</span><h2>Tři věci do praxe</h2></div>
                  <ul>{theoryExtra.checklist.slice(0, 3).map(item => <li key={item}><Icon name="check" size={17}/><span>{item}</span></li>)}</ul>
                </section>
              </>}
              {chapter === 4 && <>
                <section className="ai-context ai-context-condensed">
                  <div className="ai-context-head"><span className="theory-overline">AI VE ZDRAVOTNICTVÍ</span><h2>Kde už AI pomáhá?</h2></div>
                  <div className="ai-use-grid">{aiUseCases.slice(0, 3).map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
                </section>
                <section className="patient-survey patient-survey-condensed">
                  <div className="patient-survey-head"><span className="theory-overline">POHLED PACIENTŮ</span><h2>{patientSurvey.title}</h2></div>
                  <div className="patient-stats">{patientSurvey.stats.map(stat => <div key={stat.value}><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</div>
                  <a href={patientSurvey.source.url} target="_blank" rel="noopener noreferrer" className="lesson-extension-source">Zdroj: {patientSurvey.source.name} <Icon name="external" size={14}/></a>
                </section>
                <details className="theory-more">
                  <summary><Icon name="file" size={17}/> Více informací: další využití AI a průzkum v ČR</summary>
                  <div className="theory-more-content">
                    <div className="ai-use-grid">{aiUseCases.slice(3).map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
                    <p>{patientSurvey.intro} {patientSurvey.takeaway}</p>
                    <div className="ai-adoption"><strong>Využití AI v českém zdravotnictví</strong><p>{aiAdoption.text}</p>
                      <a href={aiAdoption.source.url} target="_blank" rel="noopener noreferrer" className="lesson-extension-source">Zdroj: {aiAdoption.source.name} <Icon name="external" size={14}/></a>
                    </div>
                  </div>
                </details>
              </>}
            </div>}
            {lesson && practice && <div className="task-intro"><h2>Co máte udělat</h2><p>{lesson.task}</p><p className="muted">Procvičení se nezapočítává do výsledku testu.</p></div>}
            {chapter === 1 && practice && <>
              {progress.mailStep === 0 ? <>
                <h2>Otázka 1 ze 2 · Bezpečný e-mail</h2>
                <Choice data={course.mailQuestion} value={progress.emailAnswer} select={emailAnswer => update({ emailAnswer })} />
                <button className="primary inline" disabled={progress.emailAnswer === null} onClick={() => update({ mailStep: 1 })}>Další otázka <Icon name="next" size={17} /></button>
              </> : <>
                <h2>Otázka 2 ze 2 · Jak reagovat na chybu</h2>
                <Choice data={course.incident} value={progress.incident} select={index => update({ incident: index })} />
                <button className="link-button inline" onClick={() => update({ mailStep: 0 })}>Zpět na první otázku</button>
              </>}
            </>}
            {chapter === 2 && practice && <MatchBoard title="Přiřaďte žádost ke správnému postupu"
              items={requestCards} targets={requestTargets} assignments={progress.requestMatches}
              unique onChange={requestMatches => update({ requestMatches })} />}
            {chapter === 3 && practice && <>
              <div className="camera-art" aria-hidden="true"><div className="camera-wall" /><span className="camera-lens"><Icon name="camera" size={53} /></span></div>
              <Choice data={course.camera} value={progress.camera} select={index => update({ camera: index })} />
            </>}
            {chapter === 4 && practice && <>
              <div className={transcript ? 'story text-story' : 'story'}>
                <div className="story-top"><span className="step-label">Příběh · {progress.aiStep + 1}/3</span><button className="link-button" aria-pressed={transcript} onClick={() => setTranscript(!transcript)}>{transcript ? 'Zobrazit ilustrace' : 'Projít textovou verzi'}</button></div>
                {!transcript && <div key={progress.aiStep} className={'story-art scene-' + progress.aiStep} aria-hidden="true">
                  <div className="story-motion">
                    <div className="story-document"><Icon name="file" size={20} /><i /><i /><i /></div>
                    <div className="story-connector"><i /><Icon name={progress.aiStep === 1 ? 'lock' : 'next'} size={21} /></div>
                    <div className="story-terminal"><Icon name={progress.aiStep === 2 ? 'check' : 'spark'} size={33} /></div>
                  </div>
                </div>}
                <h2>{course.aiScenes[progress.aiStep][0]}</h2>
                {progress.aiStep !== 1 || progress.ai !== null ? <p>{course.aiScenes[progress.aiStep][1]}</p> : null}
                {progress.aiStep === 1 && <Choice data={course.ai} value={progress.ai} select={index => update({ ai: index })} />}
                {progress.aiStep < 2 && <button className="primary inline" disabled={progress.aiStep === 1 && progress.ai === null} onClick={() => update({ aiStep: progress.aiStep + 1 })}>Další záběr <Icon name="next" size={17} /></button>}
                {progress.aiStep > 0 && <button className="link-button inline" onClick={() => update({ aiStep: progress.aiStep - 1 })}>Předchozí záběr</button>}
              </div>
            </>}
            {chapter === 4 && practice && progress.aiStep === course.aiScenes.length - 1 && progress.ai !== null && <MatchBoard
              title="Roztřiďte informace pro práci s AI"
              items={aiCards} targets={aiTargets} assignments={progress.aiCategories}
              onChange={aiCategories => update({ aiCategories })} />}
            {chapter === 5 && !practice && <>
              <div className="recap-intro"><h2>{recapExtras.heading}</h2><p>{recapExtras.intro}</p></div>
              <h2 className="recap-heading">Čtyři pravidla do praxe</h2>
              <div className="rules">{course.rules.map(([label, content, icon]) => <div key={label}><span className="nav-icon"><Icon name={icon} /></span><h3>{label}</h3><p>{content}</p></div>)}</div>
              <details className="theory-more leadership-collapsible">
                <summary><Icon name="file" size={17}/> Pro vedoucí pracovníky: odpovědnost za tým</summary>
                <div className="theory-more-content"><p>{leadership.intro}</p>
                  <div className="leadership-grid">{leadership.points.map(item => <article key={item.title}>
                    <h3>{item.title}</h3><p>{item.text}</p>
                  </article>)}</div>
                </div>
              </details>
              <div className="recap-reflection"><h2>Před závěrečným testem</h2><ul>{recapExtras.questions.slice(0, 3).map(item => <li key={item}><Icon name="check" size={17}/>{item}</li>)}</ul></div>
            </>}
            {chapter === 5 && practice && <WordGaps values={progress.recapWords} onChange={recapWords => update({ recapWords })} />}
            {chapter === testChapter && attemptView === 'certificate' && currentAttemptPassed && <div className="certificate-wrap">
              <div className="certificate"><span className="demo">DEMO</span><Icon name="award" size={54} /><h2>Potvrzení o absolvování</h2><p>GDPR v praxi PTC</p><strong>Ukázkový účastník</strong><p>Nejlepší výsledek {progress.best} z {course.questions.length}</p><p>Ukázkový kurz Protonového centra</p></div>
              <div className="cert-actions"><button className="secondary" onClick={() => setAttemptView('quiz')}>Zpět k výsledku</button><button className="primary" onClick={() => window.print()}><Icon name="print" /> Tisk nebo uložení PDF</button></div>
            </div>}
            {chapter === testChapter && attemptView === 'quiz' && (progress.submitted ? <>
              <div className={'result ' + (currentAttemptPassed ? 'success' : '')} role="status">
                <span className="result-icon"><Icon name={currentAttemptPassed ? 'award' : 'list'} size={34} /></span>
                <div>
                  <h2>{currentAttemptPassed ? 'Kurz úspěšně dokončen' : 'Test zatím není splněný'}</h2>
                  <p>Tento pokus <strong>{result}/{course.questions.length}</strong> · Pro úspěch {course.pass}/{course.questions.length}
                    {currentAttemptPassed && <> · Nejlepší výsledek <strong>{progress.best}/{course.questions.length}</strong></>}
                  </p>
                </div>
              </div>
              <div className="result-actions">
                <button className="secondary" onClick={retry}>{currentAttemptPassed ? 'Zkusit další pokus' : 'Opakovat test'}</button>
                {currentAttemptPassed && <button className="primary" onClick={() => setAttemptView('certificate')}>Zobrazit vzor potvrzení <Icon name="award" /></button>}
              </div>
              {currentAttemptPassed ? <>
                <h2>Přehled odpovědí</h2>
                <div className="review">{course.questions.map((q, i) => <details key={q.id}>
                  <summary><Icon name={progress.answers[i] === q.key ? 'check' : 'alert'} size={18} />{i + 1}. {q.prompt}</summary>
                  <p>Vaše odpověď: {q.choices[progress.answers[i] ?? 0]}</p><p><strong>Správná odpověď:</strong> {q.choices[q.key]}</p><p>{q.feedback}</p>
                  <button className="link-button" onClick={() => go(q.chapter)}>Zopakovat lekci</button>
                </details>)}</div>
              </> : <p className="test-retry-note"><Icon name="info" size={18} /> Správné odpovědi a vysvětlení se zobrazí až po úspěšném absolvování. Můžete si zopakovat teorii a potom test zkusit znovu.</p>}
            </> : <>
              <p className="lead">Osm situací z praxe. V každé vyberte jednu odpověď. Pro úspěch potřebujete alespoň {course.pass} správných odpovědí z {course.questions.length}.</p>
              <div className="quiz-status"><span>Otázka {quizIndex + 1} z {course.questions.length}</span><span>Zodpovězeno {progress.answers.filter(a => a !== null).length}/{course.questions.length}</span></div>
              <div className="quiz-dots" aria-label="Přejít na otázku">{course.questions.map((q, i) => <button key={q.id} onClick={() => setQuizIndex(i)} aria-current={i === quizIndex ? 'step' : undefined} aria-label={'Otázka ' + (i + 1) + (progress.answers[i] !== null ? ', zodpovězeno' : '')} className={progress.answers[i] !== null ? 'answered' : ''}>{i + 1}</button>)}</div>
              <fieldset key={activeQuestion.id}>
                <legend>{activeQuestion.prompt}</legend>
                {activeQuestion.choices.map((answer, i) => <label className={progress.answers[quizIndex] === i ? 'option selected' : 'option'} key={answer}>
                  <input type="radio" name={'question-' + activeQuestion.id} checked={progress.answers[quizIndex] === i} onChange={() => update({ answers: progress.answers.map((a, j) => j === quizIndex ? i : a) })} />{answer}
                </label>)}
              </fieldset>
              <div className="test-actions">
                <button className="secondary" disabled={quizIndex === 0} onClick={() => setQuizIndex(quizIndex - 1)}>Předchozí otázka</button>
                {quizIndex < course.questions.length - 1 ? <button className="primary" onClick={() => setQuizIndex(quizIndex + 1)}>Další otázka <Icon name="next" size={17} /></button>
                  : <button className="primary" disabled={!allAnswers} onClick={submit}>Odevzdat test <Icon name="check" size={17} /></button>}
              </div>
            </>)}
          </>}
          {chapter > 0 && chapter < testChapter && <div className="chapter-foot">
            <button className="secondary" onClick={() => practice ? go(chapter) : go(0)}><Icon name="back" size={17} /> {practice ? 'Zpět k teorii' : 'Přehled kurzu'}</button>
            {practice
              ? <button className="primary" disabled={!ready} onClick={next}>{buttonText} <Icon name="next" size={17} /></button>
              : <button className="primary" onClick={startPractice}>Přejít k procvičení <Icon name="next" size={17} /></button>}

          </div>}
        </section>
        <footer>Ukázkový kurz s modelovými situacemi. Postup se ukládá v tomto prohlížeči.</footer>
      </main>
    </div>
    <dialog ref={resetDialog} aria-labelledby="reset-title">
      <form method="dialog"><h2 id="reset-title">Smazat postup?</h2><p>Dokončené lekce i výsledky testu se v tomto prohlížeči vymažou.</p>
      <div className="test-actions"><button className="secondary" value="cancel">Zrušit</button><button className="primary" value="reset" onClick={() => { setProgress(fresh()); setTranscript(false); setQuizIndex(0); setAttemptView('quiz') }}>Smazat postup</button></div></form>
    </dialog>
  </>
}

createRoot(document.getElementById('root')!).render(<App />)
