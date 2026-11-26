import { useState } from 'react'
import type { DragEvent } from 'react'

export type PracticeCard = { label: string; correct: number }

export const requestCards: PracticeCard[] = [
  { label: 'Příbuzný se ptá na termín léčby pacienta.', correct: 1 },
  { label: 'Pacient žádá o výmaz zdravotnické dokumentace.', correct: 2 },
  { label: 'Přijde žádost o údaje od Policie ČR.', correct: 0 },
]
export const requestTargets = [
  'Předat formální žádost k ověření',
  'Ověřit totožnost a oprávnění',
  'Předat žádost k posouzení',
]

export const aiCards: PracticeCard[] = [
  { label: 'Skutečná zpráva s odstraněným jménem', correct: 1 },
  { label: 'Fiktivní zadání informačního letáku', correct: 0 },
  { label: 'Dopis s diagnózou a termínem léčby', correct: 1 },
  { label: 'Obecný návrh bez údajů pacientů', correct: 0 },
]
export const aiTargets = [
  'Obecný nebo fiktivní obsah',
  'Obsahuje / může obsahovat osobní údaje',
]

export const recapWords = ['příjemce', 'ihned', 'fiktivní', 'později', 'skutečný']
export const recapWordKeys = [0, 1, 2]

type BoardProps = {
  title: string
  items: PracticeCard[]
  targets: string[]
  assignments: (number | null)[]
  onChange: (next: (number | null)[]) => void
  unique?: boolean
}

export function MatchBoard({ title, items, targets, assignments, onChange, unique = false }: BoardProps) {
  const [active, setActive] = useState<number | null>(null)
  const filled = assignments.filter(v => v !== null).length
  const correct = items.every((item, index) => assignments[index] === item.correct)
  const complete = filled === items.length

  function put(cardIndex: number, targetIndex: number) {
    if (cardIndex < 0 || cardIndex >= items.length) return
    const next = assignments.map((value, index) => {
      if (index === cardIndex) return targetIndex
      if (unique && value === targetIndex) return null
      return value
    })
    onChange(next)
    setActive(null)
  }

  function startDrag(event: DragEvent<HTMLButtonElement>, index: number) {
    event.dataTransfer.setData('text/plain', String(index))
    event.dataTransfer.effectAllowed = 'move'
    setActive(index)
  }

  function drop(event: DragEvent<HTMLButtonElement>, targetIndex: number) {
    event.preventDefault()
    const index = Number(event.dataTransfer.getData('text/plain'))
    if (Number.isInteger(index)) put(index, targetIndex)
  }

  return <section className="practice-board" aria-label={title}>
    <h2>{title}</h2>
    <p className="task-hint">Vyberte kartičku a pak správnou kategorii. Na počítači ji můžete také přetáhnout.</p>
    <div className="assignment-grid">
      <div className="assignment-source">
        <h3>Kartičky</h3>
        {items.map((item, index) => <button key={item.label} type="button" draggable
          onDragStart={event => startDrag(event, index)} onDragEnd={() => setActive(null)}
          onClick={() => setActive(active === index ? null : index)}
          className={'assignment-card' + (active === index ? ' active' : '')}
          aria-pressed={active === index}>
          <span className="assignment-index">{index + 1}</span>
          <span>{item.label}<small>{assignments[index] === null ? 'Nepřiřazeno' : 'Přiřazeno: ' + targets[assignments[index]!]}</small></span>
        </button>)}
      </div>
      <div className="assignment-destinations">
        <h3>Kam patří?</h3>
        {targets.map((target, index) => <button key={target} type="button"
          className="assignment-target" onClick={() => { if (active !== null) put(active, index) }}
          onDragOver={event => event.preventDefault()} onDrop={event => drop(event, index)}
          aria-label={'Přiřadit do: ' + target}>
          <strong>{target}</strong>
          <span className="assignment-slot">
            {items.map((item, itemIndex) => assignments[itemIndex] === index
              ? <span key={item.label} className="assigned-item">{item.label}</span> : null)}
            {!assignments.some(value => value === index) && <span className="empty-slot">Sem přiřaďte kartičku</span>}
          </span>
        </button>)}
      </div>
    </div>
    <div className="assignment-result" role="status">
      <span>{filled} z {items.length} přiřazeno</span>
      {complete && <strong className={correct ? 'is-correct' : 'is-incorrect'}>{correct ? 'Vše správně! Můžete pokračovat.' : 'Některá přiřazení nesedí. Zkuste je změnit.'}</strong>}
    </div>
  </section>
}

type WordProps = {
  values: (number | null)[]
  onChange: (values: (number | null)[]) => void
}

export function WordGaps({ values, onChange }: WordProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const correct = recapWordKeys.every((answer, i) => values[i] === answer)
  const complete = values.every(value => value !== null)

  function place(wordIndex: number, slotIndex: number) {
    if (wordIndex < 0 || wordIndex >= recapWords.length) return
    onChange(values.map((value, i) => i === slotIndex ? wordIndex : value === wordIndex ? null : value))
    setSelected(null)
  }

  function startDrag(event: DragEvent<HTMLButtonElement>, wordIndex: number) {
    event.dataTransfer.setData('text/plain', String(wordIndex))
    event.dataTransfer.effectAllowed = 'move'
    setSelected(wordIndex)
  }

  function gap(index: number) {
    return <button type="button" className={'word-gap' + (values[index] !== null ? ' filled' : '')}
      aria-label={'Doplnit chybějící slovo ' + (index + 1)}
      onClick={() => {
        if (selected !== null) place(selected, index)
        else onChange(values.map((value, i) => i === index ? null : value))
      }}
      onDragOver={event => event.preventDefault()}
      onDrop={event => { event.preventDefault(); const word = Number(event.dataTransfer.getData('text/plain')); if (Number.isInteger(word)) place(word, index) }}>
      {values[index] === null ? 'Doplňte slovo' : recapWords[values[index]!]}
    </button>
  }

  return <section className="practice-board word-practice">
    <h2>Doplňte tři pravidla GDPR</h2>
    <p className="task-hint">Vyberte slovo a klikněte na prázdné místo. Případně slovo přetáhněte.</p>
    <div className="word-bank" aria-label="Nabízená slova">
      {recapWords.map((word, index) => <button key={word} type="button" draggable
        className={'word-chip' + (selected === index ? ' active' : '')}
        onDragStart={event => startDrag(event, index)} onDragEnd={() => setSelected(null)}
        onClick={() => setSelected(selected === index ? null : index)}
        disabled={values.includes(index)} aria-pressed={selected === index}>{word}</button>)}
    </div>
    <div className="word-sentences">
      <p>1. Před odesláním e-mailu ověřím {gap(0)} a obsah přílohy.</p>
      <p>2. Při podezření na incident jej {gap(1)} nahlásím.</p>
      <p>3. Pro obecnou šablonu použiji {gap(2)} příklad.</p>
    </div>
    <div className="assignment-result" role="status">
      <span>{values.filter(value => value !== null).length} ze 3 doplněno</span>
      {complete && <strong className={correct ? 'is-correct' : 'is-incorrect'}>{correct ? 'Všechna pravidla správně.' : 'Některá slova nesedí. Kliknutím na vyplněné pole ho můžete uvolnit.'}</strong>}
    </div>
  </section>
}
