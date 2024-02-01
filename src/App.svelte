<script>
  import { pattern } from 'svelte-pathfinder'
  import { formatDate } from './lib/utils'
  import Root from './pages/Root.svelte'
  import Tasks from './pages/Tasks.svelte'
  import { DarkMode } from 'flowbite-svelte'

  let date = new Date()
</script>

<main class="main">
  <div class="absolute flex-none top-4 right-4">
    <DarkMode />
  </div>
  <h1 class="flex justify-center tracking-widest font-light text-6xl dark:text-slate-300">focus</h1>
  <div class="mt-4 flex justify-center">
    <span class="text-base tracking-widest dark:text-slate-500">
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
    @apply w-full h-screen flex flex-col px-16 py-8 dark:bg-slate-900;
  }
</style>
