<script>
  import { blurInputOnSubmit, resizeWithContents } from '../actions'

  /**  @type {boolean} Flag to indicate whether user is in editing mode */
  export let isEditing = false

  /** @type {string} Content to display/edit */
  export let content

  /** @type {string} Content to display/edit */
  export let placeholder

  /** @type {('text'|'textarea')} Type of input */
  export let type = 'text'

  /** Callback for changes to editable */
  export let handleChange

  /**
   * Blur textarea input on enter
   * @param {HTMLTextAreaElement} node
   */
  const blurTextareaOnSubmit = (node) => {
    /** @param {KeyboardEvent} event */
    const handleKeydowns = (event) => {
      if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
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

{#if isEditing}
  {content}
{:else if type === 'text'}
  <input
    type="text"
    maxlength="64"
    use:blurInputOnSubmit
    bind:value={content}
    on:change={() => handleChange(content)}
    {placeholder}
    class="block w-full bg-none border-none focus:outline-none focus:bg-slate-50 focus:ring-0 rounded-md -ms-2 px-2 py-2 !mt-0 placeholder-slate-400 text-slate-600 text-lg"
  />
{:else}
  <textarea
    use:blurTextareaOnSubmit
    use:resizeWithContents
    bind:value={content}
    on:change={() => handleChange(content)}
    {placeholder}
    class="block w-full bg-none border-none focus:outline-none focus:bg-slate-50 focus:ring-0 rounded-md -ms-2 px-2 py-2 !mt-0 placeholder-slate-400 text-slate-600"
  />
{/if}
