<script>
  import { CodeOutline, ListSolid } from 'flowbite-svelte-icons'
  import Fa6SolidIndent from '~icons/fa6-solid/indent'
  import Fa6SolidOutdent from '~icons/fa6-solid/outdent'
  import LaListOl from '~icons/la/list-ol'

  export let editor

  const buttonBaseClass = 'btn-base'
  const buttonInactiveClass = 'btn-inactive'
  const buttonActiveClass = 'btn-active'

  /**
   * Get base class and either inactive or active button class
   * @param {boolean} isActive
   */
  const getButtonClass = (isActive) => {
    if (isActive) {
      return `${buttonBaseClass} ${buttonActiveClass}`
    }
    return `${buttonBaseClass} ${buttonInactiveClass}`
  }
</script>

<button
  on:click={() => editor.chain().focus().toggleBold().run()}
  class={getButtonClass(editor.isActive('bold'))}
>
  B
</button>
<button
  on:click={() => editor.chain().focus().toggleItalic().run()}
  class={getButtonClass(editor.isActive('italic'))}
>
  I
</button>
<button
  on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
  class={getButtonClass(editor.isActive('heading', { level: 1 }))}
>
  H1
</button>
<button
  on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
  class={getButtonClass(editor.isActive('heading', { level: 2 }))}
>
  H2
</button>
<button
  on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
  class={getButtonClass(editor.isActive('heading', { level: 3 }))}
>
  H3
</button>
<button
  on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
  class={getButtonClass(editor.isActive('heading', { level: 4 }))}
>
  H4
</button>
<button
  on:click={() => editor.chain().focus().toggleCodeBlock().run()}
  class={getButtonClass(editor.isActive('codeBlock'))}
>
  <CodeOutline class="h-3/5" />
</button>
<button
  on:click={() => editor.chain().focus().toggleBulletList().run()}
  class={getButtonClass(editor.isActive('bulletList'))}
>
  <ListSolid class="h-1/2" />
</button>
<button
  on:click={() => editor.chain().focus().toggleOrderedList().run()}
  class={getButtonClass(editor.isActive('orderedList'))}
>
  <LaListOl class="h-3/4" />
</button>
<button
  on:click={() => editor.chain().focus().sinkListItem('listItem').run()}
  class={buttonBaseClass}
  disabled={!editor.can().sinkListItem('listItem')}
>
  <Fa6SolidIndent class="h-3/4" />
</button>
<button
  on:click={() => editor.chain().focus().liftListItem('listItem').run()}
  class={getButtonClass(editor.isActive('codeBlock'))}
  disabled={!editor.can().liftListItem('listItem')}
>
  <Fa6SolidOutdent class="h-3/4" />
</button>

<style lang="postcss">
  .btn-base {
    @apply px-2 py-1 w-8 flex justify-center items-center text-sm border border-slate-300 rounded-lg dark:border-slate-600 disabled:text-slate-300 disabled:border-slate-200 dark:disabled:text-slate-700 dark:disabled:border-slate-700;
  }

  .btn-inactive {
    @apply bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700;
  }

  .btn-active {
    @apply bg-slate-900 text-slate-200 hover:bg-slate-700 hover:text-slate-300 dark:text-slate-400 dark:bg-slate-900;
  }
</style>
