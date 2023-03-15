<script>
  import Pesan from "$lib/component/Pesan.svelte";
  import fetch, { Moment } from "$lib/script/fetcher"

  export let /** @type {number} */ page = 1

  let /** @type {any} */ pesan = fetch(page),
      /** @type {string} */ date = Moment(new Date())
</script>

<div class="linimasa">
  <h2>Lini Masa</h2>

  {#await pesan}
    <div class="pesan">
      <p class="perasaan">
        Sedang mengambil data...
        <small>{date}</small>
      </p>
    </div>
  {:then value}
    {#if value.length === 0}
      <div class="pesan">
        <p class="perasaan">
          Sepertinya belum ada pesan rahasia yang ditampilkan? 😶
          <small>{date}</small>
        </p>
      </div>
    {:else}
      {#each value as { created, id, message }}
        <Pesan
          id={id}
          page={page}
          message={message}
          date={created}
        />
      {/each}
    {/if}
  {:catch error}
    <div class="pesan">
      <p class="perasaan">
        {error.message}
        <small>{date}</small>
      </p>
    </div>
  {/await}
</div>