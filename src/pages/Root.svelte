<script>
  import { TabItem, Tabs } from 'flowbite-svelte'
  import MainTasks from './MainTasks.svelte'
  import Notes from './Notes.svelte'
</script>

<Tabs style="underline" class="mt-6 justify-center gap-8" contentClass="bg-none" divider={false}>
  <TabItem
    open
    title="Do"
    class="list-none w-16"
    activeClasses="text-lg text-slate-700 dark:text-slate-300"
    inactiveClasses="text-lg text-slate-300 dark:text-slate-600"
  >
    <MainTasks />
  </TabItem>
  <TabItem
    title="Scribe"
    class="list-none w-16"
    activeClasses="text-lg text-slate-700 dark:text-slate-300"
    inactiveClasses="text-lg text-slate-300 dark:text-slate-600"
  >
    <Notes />
  </TabItem>
</Tabs>
