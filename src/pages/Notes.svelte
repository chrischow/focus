<script>
  import { Button, Input } from 'flowbite-svelte'
  import NoteFormModal from '../lib/NoteForm/NoteFormModal.svelte'
  import NoteList from '../lib/NoteList/NoteList.svelte'

  /** @type {boolean} */
  let isNoteModalVisible = false

  /** @type {string | undefined} */
  let searchQuery = undefined
</script>

<div class="mt-6 flex justify-center">
  <div class="w-192">
    <hr class="mb-4" />
    <Input
      color="base"
      placeholder="Search notes..."
      bind:value={searchQuery}
      class="rounded-lg focus:ring-0 focus:outline-none focus:border-slate-500 bg-transparent dark:bg-slate-800 dark:focus:bg-slate-800 dark:border-none mb-2 px-4 text-sm text-slate-600 placeholder-slate-400"
    />
    <NoteList {searchQuery} />
    <Button
      class="py-2 px-4 text-slate-400 dark:text-slate-600 text-base font-normal focus-within:ring-0 hover:underline hover:underline-offset-2 text-start"
      on:click={() => {
        isNoteModalVisible = true
      }}>Add new note</Button
    >
    <NoteFormModal bind:isNoteModalVisible />
  </div>
</div>
