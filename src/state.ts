import course from './course.json'

const storageKey = 'ptc-gdpr-demo:v1'
const lessonCount = course.chapters.length - 1

export type Progress = {
  chapter: number
  completed: number[]
  visited: number[]
  incident: number | null
  requestStep: number
  requests: (number | null)[]
  camera: number | null
  aiStep: number
  ai: number | null
  answers: (number | null)[]
  submitted: boolean
  best: number | null
}

export function fresh(): Progress {
  return {
    chapter: 0, completed: [], visited: [], incident: null,
    requestStep: 0, requests: [null, null, null], camera: null,
    aiStep: 0, ai: null, answers: course.questions.map(() => null),
    submitted: false, best: null,
  }
}

export function score(answers: Progress['answers']) {
  return course.questions.filter((question, i) => answers[i] === question.key).length
}

export function unlocked(progress: Progress, chapter: number) {
  if (chapter < 0 || chapter > lessonCount) return false
  return Array.from({ length: chapter }, (_, index) => index).every(index => progress.completed.includes(index))
}

export function readProgress(): Progress {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) ?? 'null')
    if (!value || typeof value !== 'object') return fresh()
    const bounded = (n: unknown, max: number): number | null =>
      typeof n === 'number' && Number.isInteger(n) && n >= 0 && n <= max ? n : null
    const numericSet = (items: unknown, max: number) =>
      Array.isArray(items) ? [...new Set(items.flatMap(item => {
        const number = bounded(item, max)
        return number === null ? [] : [number]
      }))] : []
    const answers = course.questions.map((question, index) => bounded(value.answers?.[index], question.choices.length - 1))
    const progress: Progress = {
      chapter: bounded(value.chapter, lessonCount) ?? 0,
      completed: numericSet(value.completed, lessonCount - 1),
      visited: numericSet(value.visited, course.mail[1].length - 1),
      incident: bounded(value.incident, course.incident.choices.length - 1),
      requestStep: bounded(value.requestStep, course.requests.length - 1) ?? 0,
      requests: course.requests.map((request, index) => bounded(value.requests?.[index], request.choices.length - 1)),
      camera: bounded(value.camera, course.camera.choices.length - 1),
      aiStep: bounded(value.aiStep, course.aiScenes.length - 1) ?? 0,
      ai: bounded(value.ai, course.ai.choices.length - 1),
      answers,
      submitted: value.submitted === true && answers.every(answer => answer !== null),
      best: bounded(value.best, course.questions.length),
    }
    if (!unlocked(progress, progress.chapter)) progress.chapter = 0
    return progress
  } catch {
    return fresh()
  }
}

export function saveProgress(progress: Progress) {
  try { localStorage.setItem(storageKey, JSON.stringify(progress)) } catch { /* The course can run in memory. */ }
}
