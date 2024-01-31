<script>
  /**
   * @type {string} Tag label
   */
  export let label
  export let onClick
</script>

<div class="flex flex-row">
  {label}
  <button on:click={onClick} class="ml-3">x</button>
</div>
