<script>
  import { liveQuery } from 'dexie'
  import { Button } from 'flowbite-svelte'
  import { CheckCircleSolid, CloseCircleSolid, TrashBinSolid } from 'flowbite-svelte-icons'
  import Editable from '../Editable/Editable.svelte'
  import NumInput from '../NumInput/NumInput.svelte'
  import TagInput from '../TagInput/TagInput.svelte'
  import { db } from '../database/db'
  import { deleteTask } from '../database/tasks'

  /** @type {number} */
  export let taskId

  // @ts-ignore
  let task = liveQuery(() => db.tasks.get({ id: taskId }))

  /**
   * Toggles task as done or not done
   */
  const toggleStatus = () => {
    // @ts-ignore
    db.tasks.update(taskId, { isDone: 1 - $task.isDone })
  }

  /**
   * Update title upon change in input
   * @param {string} title
   */
  const handleTitleChange = (title) => {
    if (title.length > 0) {
      // @ts-ignore
      db.tasks.update(taskId, { title: title })
    }
  }

  /**
   * Update description upon change in input
   * @param {string} description
   */
  const handleDescriptionChange = (description) => {
    // @ts-ignore
    db.tasks.update(taskId, { description: description })
  }

  /**
   * Update cost estimate upon change in input
   * @param {number} cost
   */
  const handleCostEstimateChange = async (cost) => {
    // @ts-ignore
    await db.tasks.update(taskId, { costEstimate: cost })
  }

  /**
   * Update actual cost upon change in input
   * @param {number} cost
   */
  const handleCostActualChange = (cost) => {
    if (cost) {
      // @ts-ignore
      db.tasks.update(taskId, { costActual: cost })
    } else {
      // @ts-ignore
      db.tasks.update(taskId, { costActual: undefined })
    }
  }
</script>

<h3>
  <Editable
    type="text"
    content={$task ? $task.title : undefined}
    placeholder="Add a title"
    handleChange={handleTitleChange}
  />
</h3>
<Editable
  type="textarea"
  content={$task ? $task.description : undefined}
  placeholder="Add a description"
  handleChange={handleDescriptionChange}
/>

<h4>Tags</h4>
{#if $task}
  <TagInput {taskId} tags={$task.tags} />
{/if}

<h4>Cost</h4>
<div class="flex flex-row gap-8 !mt-2">
  <div class="flex flex-1 flex-col items-start">
    <div class="text-medium mb-2">Estimate</div>
    <NumInput value={$task ? $task.costEstimate : 1} handleChange={handleCostEstimateChange} />
  </div>
  <div class="flex flex-1 flex-col items-start">
    <div class="text-medium mb-2">Actual</div>
    <NumInput value={$task ? $task.costActual : undefined} handleChange={handleCostActualChange} />
  </div>
</div>

<div class="!mt-12 flex flex-row gap-4 justify-center">
  <Button on:click={toggleStatus} color={$task && $task.isDone ? 'light' : 'dark'} class="text-sm">
    {#if $task && $task.isDone}
      <CloseCircleSolid class="me-2 focus:outline-none" />
    {:else}
      <CheckCircleSolid class="me-2 focus:outline-none" />
    {/if}
    Mark as {$task && $task.isDone ? 'not ' : ''}done
  </Button>
  <Button
    on:click={() => {
      const result = confirm('Are you sure you want to delete this task?')
      if (result) {
        deleteTask(taskId)
      }
    }}
    color="red"
    class="text-sm"
  >
    <TrashBinSolid class="me-2 h-4 focus:outline-none" />
    Delete task
  </Button>
</div>

<button on:click={toggleStatus}></button>
