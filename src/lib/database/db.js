import Dexie from 'dexie'

export const db = new Dexie('focusDb')
db.version(1).stores({
  tasks: '++id, title, description, isDone, *tags, costEstimate, costActual, createdAt',
  notes: '++id, title, content, createdAt',
})
