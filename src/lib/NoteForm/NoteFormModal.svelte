<script>
  import { Button, Modal } from 'flowbite-svelte'
  import { createNote } from '../database/notes'
  import NoteEditor from './NoteEditor.svelte'

  /** @type {string} */
  export let modalTitle = 'New note'

  /** @type {boolean} */
  export let isNoteModalVisible = false

  /** @type {string | undefined} */
  export let title = undefined

  /** @type {string} */
  export let content = 'New note'

  // Editor variables
  let editor

  const handleCancel = () => {
    title = undefined
    isNoteModalVisible = false
  }

  const handleSave = async () => {
    if (editor && title && title.length > 0) {
      // @ts-ignore
      await createNote({
        title,
        content: editor.getHTML(),
        createdAt: new Date(),
      })
      title = undefined
      isNoteModalVisible = false
    }
  }
</script>

<Modal title={modalTitle} size="xl" bind:open={isNoteModalVisible} outsideclose>
  <input
    id="new-note-title"
    class="block w-full !bg-none border-none focus:outline-none focus:bg-slate-100 focus:ring-0 rounded-md -ms-2 px-2 py-2 !mt-0 placeholder-slate-400 text-slate-700 text-lg font-medium"
    placeholder="Note title"
    maxlength="64"
    bind:value={title}
  />
  <NoteEditor {content} bind:editor />

  <div class="mt-4 flex flex-row justify-end">
    <Button color="light" on:click={handleCancel} class="mr-4 text-base">Cancel</Button>
    <Button color="dark" on:click={handleSave} class="text-base">Save</Button>
  </div>
</Modal>
