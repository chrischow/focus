<script>
  import { Button } from 'flowbite-svelte'
  import { CodeOutline, ListSolid } from 'flowbite-svelte-icons'
  import Fa6SolidIndent from '~icons/fa6-solid/indent'
  import Fa6SolidOutdent from '~icons/fa6-solid/outdent'
  import LaListOl from '~icons/la/list-ol'

  export let editor
</script>

<Button
  on:click={() => editor.chain().focus().toggleBold().run()}
  color={editor.isActive('bold') ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  B
</Button>
<Button
  on:click={() => editor.chain().focus().toggleItalic().run()}
  color={editor.isActive('italic') ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  I
</Button>
<Button
  on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
  color={editor.isActive('heading', { level: 1 }) ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  H1
</Button>
<Button
  on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
  color={editor.isActive('heading', { level: 2 }) ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  H2
</Button>
<Button
  on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
  color={editor.isActive('heading', { level: 3 }) ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  H3
</Button>
<Button
  on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
  color={editor.isActive('heading', { level: 4 }) ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  H4
</Button>
<Button
  on:click={() => editor.chain().focus().toggleCodeBlock().run()}
  color={editor.isActive('codeBlock') ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  <CodeOutline />
</Button>
<Button
  on:click={() => editor.chain().focus().toggleBulletList().run()}
  color={editor.isActive('bulletList') ? 'dark' : 'light'}
  class="px-2 py-1 w-8"
>
  <ListSolid />
</Button>
<Button
  on:click={() => editor.chain().focus().toggleOrderedList().run()}
  color={editor.isActive('orderedList') ? 'dark' : 'light'}
  class="p-0 w-8"
>
  <LaListOl />
</Button>
<Button
  on:click={() => editor.chain().focus().sinkListItem('listItem').run()}
  color={'light'}
  class="p-0 w-8"
  disabled={!editor.can().sinkListItem('listItem')}
>
  <Fa6SolidIndent />
</Button>
<Button
  on:click={() => editor.chain().focus().liftListItem('listItem').run()}
  color={'light'}
  class="p-0 w-8"
  disabled={!editor.can().liftListItem('listItem')}
>
  <Fa6SolidOutdent />
</Button>
