import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Icon from './Icon'
import course from './course.json'
import { fresh, readProgress, saveProgress, score, unlocked } from './state'
import type { Progress } from './state'
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
  const [hotspot, setHotspot] = useState<number | null>(null)
  const [transcript, setTranscript] = useState(false)
  const title = useRef<HTMLHeadingElement>(null)
  const resetDialog = useRef<HTMLDialogElement>(null)
  const previousChapter = useRef(progress.chapter)
  const caseHeading = useRef<HTMLHeadingElement>(null)
  const [caseMoved, setCaseMoved] = useState(false)
  const [quizIndex, setQuizIndex] = useState(() => Math.max(0, progress.answers.indexOf(null)))
  const [attemptView, setAttemptView] = useState<'quiz' | 'certificate'>('quiz')
  const activeNav = useRef<HTMLButtonElement>(null)
  const chapter = progress.chapter
  const testChapter = course.chapters.length - 1
  const done = progress.completed.length
  const passed = progress.best !== null && progress.best >= course.pass
  const [name, heading, time] = course.chapters[chapter]
  const selected = course.requests[progress.requestStep]
  const allAnswers = progress.answers.every(answer => answer !== null)
  const result = score(progress.answers)
  const activeQuestion = course.questions[quizIndex]

  useEffect(() => { saveProgress(progress) }, [progress])
  useEffect(() => {
    if (previousChapter.current !== chapter) {
      previousChapter.current = chapter
      title.current?.focus({ preventScroll: true })
      const navButton = activeNav.current
      const nav = navButton?.parentElement
      if (navButton && nav && nav.scrollWidth > nav.clientWidth) {
        nav.scrollLeft += navButton.getBoundingClientRect().left - nav.getBoundingClientRect().left - (nav.clientWidth - navButton.clientWidth) / 2
      }
      window.scrollTo(0, 0)
    }
  }, [chapter])
  useEffect(() => {
    if (caseMoved) { caseHeading.current?.focus(); setCaseMoved(false) }
  }, [caseMoved])

  function update(patch: Partial<Progress>) { setProgress(current => ({ ...current, ...patch })) }

  function go(next: number) {
    if (unlocked(progress, next)) {
      update({ chapter: next })
      setAttemptView('quiz')
    }
  }

  function next() {
    setProgress(current => ({
      ...current, completed: current.completed.includes(chapter) ? current.completed : [...current.completed, chapter],
      chapter: chapter + 1,
    }))
  }

  const ready = [true, progress.visited.length === 3 && progress.incident !== null,
    progress.requestStep === course.requests.length - 1 && progress.requests.every(a => a !== null),
    progress.camera !== null, progress.aiStep === course.aiScenes.length - 1 && progress.ai !== null, true][chapter]

  function visit(index: number) {
    setHotspot(index)
    if (!progress.visited.includes(index)) update({ visited: [...progress.visited, index] })
  }

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

  const buttonText = chapter === 0 ? 'Začít kurz' : chapter === 5 ? 'Spustit test' : 'Pokračovat'

  return <>
    <a className="skip" href="#course-main">Přejít k obsahu</a>
    <header className="top"><div className="top-inner">
      <a className="brand" href="#uvod" onClick={e => { e.preventDefault(); go(0) }}>
        <span className="brand-mark"><Icon name="shield" size={23} /></span>
        <span>Protonové centrum<small>Vzdělávání zaměstnanců</small></span>
      </a>
      <span className="demo">Ukázkový kurz</span>
    </div></header>
    <div className="layout">
      <aside className="side" aria-label="Přehled kurzu">
        <div className="course-nav">
          <div className="nav-head"><span>Průběh kurzu</span><strong>{done}/6 lekcí</strong></div>
          <progress max={6} value={done} aria-label="Dokončené lekce" />
          <nav aria-label="Kapitoly">
            {course.chapters.map(([label, _, duration, icon], i) => {
              const complete = progress.completed.includes(i) || (i === testChapter && passed)
              return <button key={label} ref={chapter === i ? activeNav : null} className={'nav-item ' + (chapter === i ? 'active' : '')}
                aria-current={chapter === i ? 'step' : undefined} disabled={!unlocked(progress, i)} onClick={() => go(i)}>
                <span className="nav-icon"><Icon name={String(icon)} size={18} /></span>
                <span className="nav-label">{label}<small>{duration} min</small></span>
                {complete ? <span className="nav-status" aria-label="Dokončeno"><Icon name="check" size={16} /></span>
                  : !unlocked(progress, i) ? <span aria-label="Uzamčeno" className="nav-lock"><Icon name="lock" size={14} /></span> : null}
              </button>
            })}
          </nav>
        </div>
        <button className="reset" onClick={() => resetDialog.current?.showModal()}>Smazat postup</button>
      </aside>
      <main id="course-main" className="main">
        <section className={chapter === 0 ? 'hero panel' : 'panel chapter'} aria-labelledby="chapter-title">
          {chapter === 0 ? <>
            <div className="hero-copy">
              <span className="eyebrow"><Icon name="shield" size={17} /> OCHRANA OSOBNÍCH ÚDAJŮ</span>
              <h1 ref={title} tabIndex={-1} id="chapter-title">GDPR<br />v praxi <em>PTC</em></h1>
              <p className="lead">{course.intro}</p>
              <div className="intro-meta"><span><Icon name="clock" size={17} /> Přibližně 15 min</span><span><Icon name="list" size={17} /> 6 lekcí a test</span></div>
              <button className="primary" onClick={next}>Začít kurz <Icon name="next" size={18} /></button>
              {done > 1 && <button className="secondary resume" onClick={() => go(Math.min(done, testChapter))}>Navázat na svůj postup</button>}
            </div>
            <div className="hero-art" aria-hidden="true"><img src={new URL('./reception.svg', import.meta.url).href} alt="" /></div>
          </> : <>
            <div className="section-head">
              <span className="eyebrow">{chapter === testChapter ? 'OVĚŘENÍ ZNALOSTÍ' : 'LEKCE ' + (chapter + 1) + ' / 6'}<span className="mini-dot" />{name}<span className="mini-dot" />{time} min</span>
              <h1 ref={title} id="chapter-title" tabIndex={-1}>{heading}</h1>
            </div>
            {chapter === 1 && <>
              <p className="lead">{course.mail[0] as string}</p>
              <h2>Najděte tři věci, které byste před odesláním zkontrolovali.</h2>
              <div className="mail-card">
                <div className="mail-head"><Icon name="mail" /> Koncept e-mailu <span role="status">{progress.visited.length}/3 zkontrolováno</span></div>
                {(course.mail[1] as string[][]).map(([label, value], i) => <button key={label} className="mail-row" onClick={() => visit(i)} aria-pressed={hotspot === i}>
                  <span>{label}</span><strong>{value}</strong><span className={progress.visited.includes(i) ? 'hot checked' : 'hot'}>{progress.visited.includes(i) ? <Icon name="check" size={16} /> : '+'}</span>
                </button>)}
              </div>
              <div className="chips" aria-label="Kontrolní body e-mailu">
                {(course.mail[1] as string[][]).map(([label], i) => <button key={label} aria-pressed={hotspot === i} onClick={() => visit(i)}>{label}</button>)}
              </div>
              {hotspot !== null && <div className="info" role="status">{(course.mail[1] as string[][])[hotspot][2]}</div>}
              {progress.visited.length === 3 && <Choice data={course.incident} value={progress.incident} select={index => update({ incident: index })} />}
            </>}
            {chapter === 2 && <div className="scenario">
              <div className="step-label"><Icon name={progress.requestStep === 0 ? 'phone' : 'file'} /> {progress.requestStep + 1}/3 · {selected.label}</div>
              <h2 ref={caseHeading} tabIndex={-1}>Jak byste postupovali?</h2>
              <Choice data={selected} value={progress.requests[progress.requestStep]} select={index => update({ requests: progress.requests.map((answer, i) => i === progress.requestStep ? index : answer) })} />
              {progress.requestStep < course.requests.length - 1 && <button className="primary inline" disabled={progress.requests[progress.requestStep] === null} onClick={() => { update({ requestStep: progress.requestStep + 1 }); setCaseMoved(true) }}>Další situace <Icon name="next" size={17} /></button>}
              {progress.requestStep > 0 && <button className="link-button inline" onClick={() => { update({ requestStep: progress.requestStep - 1 }); setCaseMoved(true) }}>Předchozí situace</button>}
            </div>}
            {chapter === 3 && <>
              <div className="camera-art" aria-hidden="true"><div className="camera-wall" /><span className="camera-lens"><Icon name="camera" size={53} /></span></div>
              <Choice data={course.camera} value={progress.camera} select={index => update({ camera: index })} />
            </>}
            {chapter === 4 && <>
              <p className="lead">{course.aiIntro}</p>
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
              <h2>Co udělat v konkrétní situaci</h2>
              <table><thead><tr><th scope="col">Zadání</th><th scope="col">Jak postupovat</th></tr></thead><tbody>{course.aiTable.map(([s, action]) => <tr key={s}><th scope="row">{s}</th><td>{action}</td></tr>)}</tbody></table>
              <div className="study"><h2>Jak rozšířená je AI ve zdravotnictví?</h2>
                <p><strong>{course.study.value.toLocaleString('cs-CZ')} %</strong> {course.study.label}</p>
                <div className="chart-track" aria-hidden="true"><span style={{ width: course.study.value + '%' }} /></div><div className="chart-scale" aria-hidden="true"><span>0 %</span><span>50 %</span><span>100 %</span></div>
                <details><summary>O průzkumu</summary><p>{course.study.detail}</p><a href={course.study.url} target="_blank" rel="noreferrer">Ministerstvo zdravotnictví ČR <Icon name="external" size={15} /></a></details>
              </div>
            </>}
            {chapter === 5 && <div className="rules">{course.rules.map(([label, content, icon]) => <div key={label}><span className="nav-icon"><Icon name={icon} /></span><h2>{label}</h2><p>{content}</p></div>)}</div>}
            {chapter === testChapter && attemptView === 'certificate' && passed && <div className="certificate-wrap">
              <div className="certificate"><span className="demo">DEMO</span><Icon name="award" size={54} /><h2>Potvrzení o absolvování</h2><p>GDPR v praxi PTC</p><strong>Ukázkový účastník</strong><p>Nejlepší výsledek {progress.best} z 5</p><p>Ukázkový kurz Protonového centra</p></div>
              <div className="cert-actions"><button className="secondary" onClick={() => setAttemptView('quiz')}>Zpět k výsledku</button><button className="primary" onClick={() => window.print()}><Icon name="print" /> Tisk nebo uložení PDF</button></div>
            </div>}
            {chapter === testChapter && attemptView === 'quiz' && (progress.submitted ? <>
              <div className={'result ' + (result >= course.pass ? 'success' : '')} role="status">
                <span className="result-icon"><Icon name={result >= course.pass ? 'award' : 'list'} size={34} /></span>
                <div><h2>{result >= course.pass ? 'Kurz úspěšně dokončen' : 'Zkuste test znovu'}</h2><p>Tento pokus <strong>{result}/5</strong> · Nejlepší výsledek <strong>{progress.best}/5</strong> · Pro úspěch {course.pass}/5</p></div>
              </div>
              <div className="result-actions"><button className="secondary" onClick={retry}>Zkusit znovu</button>{passed && <button className="primary" onClick={() => setAttemptView('certificate')}>Zobrazit vzor potvrzení <Icon name="award" /></button>}</div>
              <h2>Přehled odpovědí</h2>
              <div className="review">{course.questions.map((q, i) => <details key={q.id}>
                <summary><Icon name={progress.answers[i] === q.key ? 'check' : 'alert'} size={18} />{i + 1}. {q.prompt}</summary>
                <p>Vaše odpověď: {q.choices[progress.answers[i] ?? 0]}</p><p><strong>Správná odpověď:</strong> {q.choices[q.key]}</p><p>{q.feedback}</p>
                <button className="link-button" onClick={() => go(q.chapter)}>Zopakovat lekci</button>
              </details>)}</div>
            </> : <>
              <p className="lead">Pět situací z praxe. V každé vyberte jednu odpověď. Pro úspěch potřebujete alespoň {course.pass} správné odpovědi z 5.</p>
              {passed && <button className="link-button" onClick={() => setAttemptView('certificate')}>Zobrazit vzor potvrzení</button>}
              <div className="quiz-status"><span>Otázka {quizIndex + 1} z 5</span><span>Zodpovězeno {progress.answers.filter(a => a !== null).length}/5</span></div>
              <div className="quiz-dots" aria-label="Přejít na otázku">{course.questions.map((q, i) => <button key={q.id} onClick={() => setQuizIndex(i)} aria-current={i === quizIndex ? 'step' : undefined} aria-label={'Otázka ' + (i + 1) + (progress.answers[i] !== null ? ', zodpovězeno' : '')} className={progress.answers[i] !== null ? 'answered' : ''}>{i + 1}</button>)}</div>
              <fieldset key={activeQuestion.id}>
                <legend>{activeQuestion.prompt}</legend>
                {activeQuestion.choices.map((answer, i) => <label className={progress.answers[quizIndex] === i ? 'option selected' : 'option'} key={answer}>
                  <input type="radio" name={'question-' + activeQuestion.id} checked={progress.answers[quizIndex] === i} onChange={() => update({ answers: progress.answers.map((a, j) => j === quizIndex ? i : a) })} />{answer}
                </label>)}
              </fieldset>
              <div className="test-actions">
                <button className="secondary" disabled={quizIndex === 0} onClick={() => setQuizIndex(quizIndex - 1)}>Předchozí otázka</button>
                {quizIndex < 4 ? <button className="primary" onClick={() => setQuizIndex(quizIndex + 1)}>Další otázka <Icon name="next" size={17} /></button>
                  : <button className="primary" disabled={!allAnswers} onClick={submit}>Odevzdat test <Icon name="check" size={17} /></button>}
              </div>
            </>)}
          </>}
          {chapter > 0 && chapter < testChapter && <div className="chapter-foot">
            <button className="secondary" onClick={() => go(chapter - 1)}><Icon name="back" size={17} /> Zpět</button>
            <button className="primary" disabled={!ready} onClick={next}>{buttonText} <Icon name="next" size={17} /></button>
          </div>}
        </section>
        <footer>Ukázkový kurz s modelovými situacemi. Postup se ukládá v tomto prohlížeči.</footer>
      </main>
    </div>
    <dialog ref={resetDialog} aria-labelledby="reset-title">
      <form method="dialog"><h2 id="reset-title">Smazat postup?</h2><p>Dokončené lekce i výsledky testu se v tomto prohlížeči vymažou.</p>
      <div className="test-actions"><button className="secondary" value="cancel">Zrušit</button><button className="primary" value="reset" onClick={() => { setProgress(fresh()); setHotspot(null); setTranscript(false); setQuizIndex(0); setAttemptView('quiz') }}>Smazat postup</button></div></form>
    </dialog>
  </>
}

createRoot(document.getElementById('root')!).render(<App />)
