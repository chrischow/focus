<script>
  import { pattern } from 'svelte-pathfinder'
  import { formatDate } from './lib/utils'
  import Root from './pages/Root.svelte'
  import Tasks from './pages/Tasks.svelte'
  import { TabItem, Tabs } from 'flowbite-svelte'
  import MainTasks from './pages/MainTasks.svelte'
  import Notes from './pages/Notes.svelte'

  let date = new Date()
</script>

<main class="main">
  <h1 class="flex justify-center tracking-widest font-light text-6xl">focus</h1>
  <div class="mt-4 flex justify-center">
    <span class="text-base tracking-widest">
      {formatDate(date, true)}
    </span>
  </div>
  <!-- Router -->
  {#if $pattern('/')}
    <Root />
  {:else if $pattern('/tasks')}
    <Tasks />
  {/if}
</main>

<style lang="postcss">
  .main {
    @apply w-full flex flex-col px-16 py-8;
  }
</style>
