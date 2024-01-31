<script>
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import { onDestroy, onMount } from 'svelte'
  import EditorMenu from './EditorMenu.svelte'
  import { HeadingExtension } from './HeadingExtension'
  import { Hr } from 'flowbite-svelte'

  export let content = 'New note'
  export let editor
  let element

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit.configure({
          blockquote: false,
          hardBreak: false,
          code: false,
          strike: false,
          dropcursor: false,
          gapcursor: false,
          history: false,
          heading: false,
          codeBlock: {
            HTMLAttributes: {
              class: 'p-2 rounded-md bg-slate-700 text-slate-300',
            },
          },
          paragraph: {
            HTMLAttributes: {
              class: 'text-base',
            },
          },
        }),
        HeadingExtension,
      ],
      content: content,
      onTransaction: () => {
        editor = editor
      },
      editorProps: {
        attributes: {
          class:
            'outline-none focus:outline-none focus:bg-slate-50 text-slate-700 -mx-2 px-2 pt-2 pb-4 rounded-md',
        },
      },
    })
  })

  onDestroy(() => {
    if (editor) {
      editor.destroy()
    }
  })
</script>

{#if editor}
  <div class="!mt-4 flex flex-row gap-2">
    <EditorMenu {editor} />
  </div>
{/if}

<Hr />
<div bind:this={element} class="!mt-4 focus:outline-none" />
