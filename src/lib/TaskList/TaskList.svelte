<script>
  import { liveQuery } from 'dexie'
  import { db } from '../database/db'
  import TaskListItem from './TaskListItem/TaskListItem.svelte'

  /** @type {string | undefined} */
  export let searchQuery = undefined

  // @ts-ignore
  $: tasks = liveQuery(() =>
    // @ts-ignore
    db.tasks
      .orderBy('createdAt')
      .reverse()
      .filter((task) => {
        return task.isDone === 0
      })
      .filter((task) => {
        if (searchQuery) {
          const regex = new RegExp(searchQuery, 'gi')
          return regex.test(task.title) || regex.test(task.description)
        }
        return true
      })
      .toArray(),
  )
</script>

<div class="px-4 flex flex-col">
  {#if $tasks}
    {#each $tasks as task (task.id)}
      <TaskListItem {task} />
    {/each}
  {/if}
</div>
