import autosize from 'autosize'

/**
 * Reusable action to resize textarea
 * @param {HTMLTextAreaElement} node 
 * @returns 
 */
export const resizeWithContents = (node) => {
  autosize(node)
  return {
    destroy() {
      autosize.destroy(node)
    },
  }
}

/**
   * Blur title input on enter
   * @param {HTMLInputElement} node
   */
export const blurInputOnSubmit = (node) => {
  /** @param {KeyboardEvent} event */
  const handleKeydowns = (event) => {
    if (event.key === 'Enter') {
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