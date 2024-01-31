import { mergeAttributes } from '@tiptap/core'
import BaseHeading from '@tiptap/extension-heading'

// Extend heading
const classes = {
  1: 'mt-3 text-3xl mb-3',
  2: 'mt-3 text-2xl mb-2',
  3: 'mt-2 text-xl mb-1',
  4: 'mt-2 text-lg mb-1',
}

export const HeadingExtension = BaseHeading.configure({ levels: [1, 2, 3, 4] }).extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const level = hasLevel ? node.attrs.level : this.options.levels[0]

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`,
      }),
      0,
    ]
  },
})