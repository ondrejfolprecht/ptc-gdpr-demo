import type { ReactNode } from 'react'

const paths: Record<string, ReactNode> = {
  home: <><path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 21v-7h6v7"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-3.2-.35-6.2-1.45-8.7-3.2a20 20 0 0 1-6-6 20 20 0 0 1-3.2-8.8A2 2 0 0 1 4 1.8h3a2 2 0 0 1 2 1.7l.7 3.1a2 2 0 0 1-.45 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45l3.1.7a2 2 0 0 1 1.5 1.95Z"/>,
  camera: <><rect x="2" y="6" width="15" height="12" rx="2"/><path d="m17 10 5-3v10l-5-3"/></>,
  spark: <><path d="M12 3c.8 5 2 6.2 7 7-5 .8-6.2 2-7 7-.8-5-2-6.2-7-7 5-.8 6.2-2 7-7Z"/><path d="M5 16v5m-2.5-2.5h5M19 14v6m-3-3h6"/></>,
  list: <><path d="M9 6h12M9 12h12M9 18h12M3 6h1M3 12h1M3 18h1"/></>,
  award: <><circle cx="12" cy="9" r="6"/><path d="m8 14-2 7 6-3 6 3-2-7"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/></>,
  shield: <><path d="M12 22s7-3.5 7-9.5V5l-7-3-7 3v7.5C5 18.5 12 22 12 22Z"/><path d="m9 12 2 2 4-4"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  next: <path d="M4 12h15m-6-6 6 6-6 6"/>,
  back: <path d="M20 12H5m6-6-6 6 6 6"/>,
  file: <><path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M14 2v6h5M8 13h7m-7 4h7"/></>,
  alert: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5m0 4h.01"/></>,
  print: <><path d="M6 8V3h12v5M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6zm12-3h.01"/></>,
  external: <path d="M14 4h6v6m-1-5-9 9m0-8H5v13h13v-5"/>,
}

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
