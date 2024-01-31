<script>
  export let submitAction

  /** @type {string} */
  let value = ''

  /**
   * Handle enter and escape keydowns
   * @param {HTMLInputElement} node
   */
  const customKeydown = (node) => {
    /**
     * Submit on enter, blur on escape
     * @param {KeyboardEvent} event
     */
    const handleKeydowns = (event) => {
      if (event.key === 'Enter') {
        submitAction({ title: value, isDone: 0, tags: [], createdAt: new Date() })
        value = ''
      } else if (event.key === 'Escape') {
        node.blur()
      }
    }
    node.addEventListener('keydown', handleKeydowns)

    return {
      destroy() {
        node.removeEventListener('keydown', handleKeydowns)
      },
    }
  }
</script>

<input
  use:customKeydown
  class="focus:outline-none rounded-md w-full px-4 py-2 bg-transparent border-none !placeholder-slate-400 focus:bg-slate-100 text-slate-700 text-base"
  placeholder="Add new task"
  size="lg"
  bind:value
/>
