<script>
  import { liveQuery } from 'dexie'
  import { Button, Heading, Input } from 'flowbite-svelte'
  import { path } from 'svelte-pathfinder'
  import TaskForm from '../lib/TaskForm/TaskForm.svelte'
  import TaskListItem from '../lib/TaskList/TaskListItem/TaskListItem.svelte'
  import { db } from '../lib/database/db'
  import { createTask } from '../lib/database/tasks'

  /** @type {string | undefined} */
  let todosSearchQuery = undefined

  /** @type {string | undefined} */
  let doneSearchQuery = undefined

  // @ts-ignore
  $: todos = liveQuery(() =>
    // @ts-ignore
    db.tasks
      .orderBy('createdAt')
      .reverse()
      .filter((task) => {
        return task.isDone === 0
      })
      .filter((task) => {
        if (todosSearchQuery) {
          const regex = new RegExp(todosSearchQuery, 'gi')
          return regex.test(task.title) || regex.test(task.description)
        }
        return true
      })
      .toArray(),
  )
  // @ts-ignore
  let completeTasks = liveQuery(() =>
    // @ts-ignore
    db.tasks
      .orderBy('createdAt')
      .reverse()
      .filter((task) => {
        return task.isDone === 1
      })
      .filter((task) => {
        if (doneSearchQuery) {
          const regex = new RegExp(doneSearchQuery, 'gi')
          return regex.test(task.title) || regex.test(task.description)
        }
        return true
      })
      .toArray(),
  )
</script>

<div class="mt-8 flex flex-row gap-8">
  <div class="flex flex-1 flex-col">
    <Heading tag="h5" class="font-semibold">Do</Heading>
    <hr class="mt-4 mb-4" />
    <Input
      color="base"
      placeholder="Search todos..."
      bind:value={todosSearchQuery}
      class="rounded-lg focus:ring-0 focus:outline-none focus:border-slate-500 bg-transparent mb-2 px-4 text-sm text-slate-600 placeholder-slate-400"
    />
    <div class="flex flex-col">
      {#if $todos}
        {#each $todos as task (task.id)}
          <TaskListItem {task} />
        {/each}
      {/if}
    </div>
    <TaskForm submitAction={createTask} />
  </div>
  <div class="flex flex-1 flex-col">
    <Heading tag="h5" class="font-semibold">Done</Heading>
    <hr class="mt-4 mb-4" />
    <Input
      color="base"
      placeholder="Search completed tasks..."
      bind:value={doneSearchQuery}
      class="rounded-lg focus:ring-0 focus:outline-none focus:border-slate-500 bg-transparent mb-2 px-4 text-sm text-slate-600 placeholder-slate-400"
    />
    <div class="mt-4">
      {#if $completeTasks}
        {#each $completeTasks as task (task.id)}
          <TaskListItem {task} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<div class="mt-4 flex justify-center">
  <Button
    color="light"
    class="border-none py-1 px-3 text-base"
    on:click={() => {
      // @ts-ignore
      $path = '/'
    }}>Back to Home</Button
  >
</div>
