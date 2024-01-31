<script>
  import { liveQuery } from 'dexie'
  import { db } from '../database/db'
  import NoteListItem from './NoteListItem/NoteListItem.svelte'

  /** @type {string | undefined} */
  export let searchQuery = undefined
  // @ts-ignore
  $: notes = liveQuery(() =>
    // @ts-ignore
    db.notes
      .orderBy('createdAt')
      .reverse()
      .filter((note) => {
        if (searchQuery) {
          const regex = new RegExp(searchQuery, 'gi')
          return regex.test(note.title) || regex.test(note.content)
        }
        return true
      })
      .toArray(),
  )
</script>

<div class="px-4 flex flex-col">
  {#if $notes}
    {#each $notes as note}
      <NoteListItem {note} />
    {/each}
  {/if}
</div>
