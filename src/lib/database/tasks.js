import { db } from "./db"

/**
 * Adds tasks to IndexedDB
 * @param {Task} task 
 */
export const createTask = async (task) => {
  try {
    // @ts-ignore
    const id = await db.tasks.add(task)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Mark task as complete
 * @param {number} taskId
 * @param {number} newCompletionStatus
 */
export const updateTaskCompletion = async (taskId, newCompletionStatus) => {
  try {
    // @ts-ignore
    await db.tasks.update(taskId, { isDone: newCompletionStatus })
  } catch (error) {
    console.error(error)
  }
}

/**
 * Deletes task
 * @param {number} taskId 
 */
export const deleteTask = async (taskId) => {
  try {
    // @ts-ignore
    await db.tasks.delete(taskId)
  } catch (error) {
    console.error(error)
  }
}