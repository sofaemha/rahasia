<script>
  import { Moment } from '$lib/script/fetcher'
  import Respons from '$lib/component/Respons.svelte'
  import Balasan from '$lib/component/Balasan.svelte'

  export let /** @type {number} */ id,
            /** @type {string} */ message,
            /** @type {string} */ date,
            /** @type {number} */ page

  date = Moment(date)
</script>

<div class="pesan">
  <p class="perasaan">
    {message}
    <small>{date}</small>
  </p>

  {#if id !== 0}
    <Respons parent={id}/>
    <Balasan id={id} page={page}/>
  {/if}
</div>
