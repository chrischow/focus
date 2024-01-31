<script>
  import { Button, Hr, Input } from 'flowbite-svelte'
  import { path } from 'svelte-pathfinder'
  import TaskForm from '../lib/TaskForm/TaskForm.svelte'
  import TaskList from '../lib/TaskList/TaskList.svelte'
  import { createTask } from '../lib/database/tasks'

  /** @type {string | undefined} */
  let searchQuery = undefined
</script>

<div class="mt-6 flex justify-center">
  <div class="w-192">
    <hr class="mb-4" />
    <Input
      color="base"
      placeholder="Search tasks..."
      bind:value={searchQuery}
      class="rounded-full focus:ring-0 focus:outline-none focus:border-slate-500 mb-2 px-4 text-sm text-slate-600 placeholder-slate-400"
    />
    <TaskList {searchQuery} />
    <TaskForm submitAction={createTask} />
    <div class="mt-4 flex justify-center">
      <Button
        color="light"
        on:click={() => {
          // @ts-ignore
          $path = '/tasks'
        }}
        class="border-none py-1 px-4 text-base flex-none">See all tasks</Button
      >
    </div>
  </div>
</div>
