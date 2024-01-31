<script>
  import autosizeInput from 'autosize-input'
  import { Badge } from 'flowbite-svelte'
  import { CloseOutline } from 'flowbite-svelte-icons'
  import { db } from '../database/db'

  /** @type {Array<string>} */
  export let tags = []

  /** @type {number} */
  export let taskId

  /** @type {Set<string>} */
  let uniqueTags = new Set(tags)
  let newTag = ''

  const updateTags = async (tags) => {
    // @ts-ignore
    db.tasks.update(taskId, { tags })
  }
  const handleAddTag = () => {
    if (newTag && newTag.length > 0 && !uniqueTags.has(newTag)) {
      tags.push(newTag)
      tags = tags
      newTag = ''
      updateTags(tags)
    }
  }

  /**
   * Enter to submit
   * @param {KeyboardEvent} event
   */
  const handleEnterKeydown = (event) => {
    if (event.key === 'Enter') {
      handleAddTag()
    }
  }

  /**
   * Remove tag
   * @param {string} tag
   */
  const handleRemoveTag = (tag) => {
    tags = tags.filter((existingTag) => existingTag !== tag)
    uniqueTags.delete(tag)
    uniqueTags = uniqueTags
    updateTags(tags)
  }

  /**
   * Expand input box to match contents, with a minimum width depending on the palceholder
   * @param {HTMLElement} node
   */
  const resizeInput = (node) => {
    autosizeInput(node, { minWidth: true })
    return {
      destroy() {},
    }
  }

  /**
   * Blur on escape
   * @param {HTMLElement} node
   */
  const blurOnEscape = (node) => {
    /**
     * Handle escape keydown
     * @param {KeyboardEvent} event
     */
    const handleEscapeKeydown = (event) => {
      if (event.key === 'Escape') {
        node.blur()
      }
    }

    node.addEventListener('keydown', handleEscapeKeydown)

    return {
      destroy() {
        node.removeEventListener('keydown', handleEscapeKeydown)
      },
    }
  }
</script>

<div class="flex flex-wrap gap-2">
  {#each tags as tag}
    <Badge large color="dark">
      {tag}
      <CloseOutline
        class="ml-3 w-2 h-2 focus:outline-none hover:cursor-pointer"
        on:click={() => handleRemoveTag(tag)}
      />
    </Badge>
  {/each}
  <input
    placeholder="Add new tag..."
    use:resizeInput
    use:blurOnEscape
    bind:value={newTag}
    on:keydown={handleEnterKeydown}
    class="focus:outline-none bg-none focus:bg-slate-100 rounded-md px-2 py-1 text-sm text-slate-700"
  />
</div>
