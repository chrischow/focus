<script>
  import { NumberInput } from 'flowbite-svelte'

  export let value = 1
  export let handleChange
  console.log(value)
</script>

<NumberInput
  type="number"
  min={0.5}
  step={0.5}
  bind:value
  on:change={() => handleChange(value)}
  class="focus:!ring-0 focus:!outline-none focus:border-slate-700 dark:bg-slate-700 dark:border-none dark:text-slate-300"
/>
