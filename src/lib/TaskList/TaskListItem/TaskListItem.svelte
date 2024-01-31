<script>
  import { liveQuery } from 'dexie'
  import { Button, Modal } from 'flowbite-svelte'
  import { CheckSolid } from 'flowbite-svelte-icons'
  import TaskDetail from '../../TaskDetail/TaskDetail.svelte'
  import { db } from '../../database/db'
  import { updateTaskCompletion } from '../../database/tasks'
  import { formatDate } from '../../utils'

  /** @type {Task} */
  export let task

  // @ts-ignore
  const liveTask = liveQuery(() => db.tasks.get(task.id))
  let isModalVisible = false
</script>

<div class="-mx-3 px-3 py-2 my-1 rounded-md flex flew-row items-start">
  <Button
    color={$liveTask && $liveTask.isDone ? 'dark' : 'light'}
    outline={false}
    class="mr-3 p-1 focus-within:ring-0 border"
    on:click={() => updateTaskCompletion(task.id, 1 - task.isDone)}
  >
    {#if $liveTask && $liveTask.isDone}
      <CheckSolid class="w-3 h-3 focus:outline-none" />
    {:else}
      <CheckSolid class="w-3 h-3 focus:outline-none opacity-0" />
    {/if}
  </Button>
  <div class="w-full flex space-between">
    <Button
      class="flex-1 justify-start m-0 p-0 text-slate-700 text-base font-normal focus-within:ring-0 hover:underline hover:underline-offset-2 text-start"
      on:click={() => (isModalVisible = true)}
    >
      {task.title}
    </Button>
    <div class="text-slate-500 text-base">
      {formatDate(task.createdAt, false)}
    </div>
  </div>
</div>

<Modal title="View/edit task" bind:open={isModalVisible} outsideclose>
  <TaskDetail taskId={task.id} />
</Modal>
