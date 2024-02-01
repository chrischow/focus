<script>
  import { Button, Modal } from 'flowbite-svelte'
  import NoteEditor from '../../NoteForm/NoteEditor.svelte'
  import { blurInputOnSubmit } from '../../actions'
  import { db } from '../../database/db'
  import { formatDate } from '../../utils'
  import { deleteNote } from '../../database/notes'
  import { TrashBinSolid } from 'flowbite-svelte-icons'

  /** @type {Note} */
  export let note

  let title = note.title
  let isNoteModalVisible = false
  let editor

  const handleCancel = () => {
    isNoteModalVisible = false
  }

  const handleSave = async () => {
    if (editor && title && title.length > 0) {
      // @ts-ignore
      await db.notes.update(note.id, {
        title,
        content: editor.getHTML(),
        createdAt: new Date(),
      })
      isNoteModalVisible = false
    }
  }

  const handleDelete = async () => {
    const confirmation = confirm(
      'Are you sure you want to delete this note? This change cannot be undone.',
    )
    if (confirmation) {
      await deleteNote(note.id)
      isNoteModalVisible = false
    }
  }
</script>

<div class="flex flex-row space-between items-center">
  <Button
    class="flex-1 justify-start px-0 text-slate-800 dark:text-slate-400 text-base font-normal focus-within:ring-0 hover:underline hover:underline-offset-2 text-start"
    on:click={() => (isNoteModalVisible = true)}
  >
    {note.title}
  </Button>
  <div class="text-slate-500 text-base">{formatDate(note.createdAt, false)}</div>
</div>

<Modal title="Edit note" size="xl" bind:open={isNoteModalVisible} outsideclose>
  <input
    class="block w-full !bg-none border-none focus:outline-none focus:bg-slate-100 focus:ring-0 rounded-md -ms-2 px-2 py-2 !mt-0 placeholder-slate-400 text-slate-700 text-lg font-medium"
    placeholder="Note title"
    maxlength="64"
    bind:value={title}
    use:blurInputOnSubmit
  />
  <NoteEditor content={note.content} bind:editor />

  <div class="mt-4 flex flex-row">
    <div class="flex flex-1 justify-start">
      <Button color="red" class="text-sm" on:click={handleDelete}>
        <TrashBinSolid class="me-2 h-4 focus:outline-none" />
        Delete note
      </Button>
    </div>
    <Button color="light" on:click={handleCancel} class="mr-4 text-sm">Cancel</Button>
    <Button color="dark" on:click={handleSave} class="text-sm">Save</Button>
  </div>
</Modal>
