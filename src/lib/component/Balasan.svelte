<script>
  import fetch, { Moment } from '$lib/script/fetcher'

  export let /** @type {number} */ id,
            /** @type {number} */ page = 1
  let /** @type {any} */ pesan = fetch(page, id),
      /** @type {string} */ date = Moment(new Date())

</script>

{#await pesan}
  <ul class="anak">
    <li>
      Sedang mengambil data...
      <small>{date}</small>
    </li>
  </ul>
{:then value}
  {#if value.length !== 0}
    <ul class="anak">
      {#each value as { created, id, message, owner }}
        <li data-name="{id}" class="{owner ? 'admin' : ''}">
          {message}
          <small>{Moment(created)}</small>
        </li>
      {/each}
    </ul>
  {/if}
{:catch error}
  <ul class="anak">
    <li>
      {error.message}
      <small>{date}</small>
    </li>
  </ul>
{/await}