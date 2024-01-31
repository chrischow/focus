import { db } from "./db"


/** @param {Note} note */
export const createNote = async (note) => {
  try {
    // @ts-ignore
    const id = await db.notes.add(note)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Deletes note
 * @param {number} noteId
 */
export const deleteNote = async (noteId) => {
  try {
    // @ts-ignore
    await db.notes.delete(noteId)
  } catch (error) {
    console.error(error)
  }
}