<script>
  import { Page } from "$lib/script/fetcher";

  export let /** @type {number} */ page = 1
  let /** @type {any} */ A = `\xa0`,
      /** @type {any} */ B = `\xa0`,
      /** @type {any} */ C = `\xa0`,
      /** @type {any} */ D = `\xa0`,
      /** @type {any} */ E = `\xa0`,
      /** @type {number} */ F,
      /** @type {number} */ P,
      /** @type {number} */ N,
      /** @type {number} */ L,
      active = true;

  Page().then((result) => {
    L = Math.ceil(result.length / 5)
    if (page <= 3) {
      A = 1, B = 2, C = 3, D = 4, E = 5
    } else if (L - page <= 2) {
      E = L, D = L - 1, C = D - 1, B = C - 1, A = B - 1
    } else {
      C = page, A = C - 2, B = C - 1, D = C + 1, E = C + 2
    }
    F = 1, P = (A-1 < 1)? 1 : A-1,
    N = (E+1 > L)? L : E+1
  })

</script>

<div class="halaman">
  {#if page > 4}
    <a target="_self" href="/p/{F}">&laquo;</a>
  {/if}
  {#if page > 3}
    <a target="_self" href="/p/{P}">&lsaquo;</a>
  {/if}

  {#if L <= 5}
    {#if L >= 1}
      <a target="_self" class:active="{page === A}" href="/p/{A}">{A}</a>
    {/if}
    {#if L >= 2}
      <a target="_self" class:active="{page === B}" href="/p/{B}">{B}</a>
    {/if}
    {#if L >= 3}
      <a target="_self" class:active="{page === C}" href="/p/{C}">{C}</a>
    {/if}
    {#if L >= 4}
      <a target="_self" class:active="{page === D}" href="/p/{D}">{D}</a>
    {/if}
    {#if L >= 5}
      <a target="_self" class:active="{page === E}" href="/p/{E}">{E}</a>
    {/if}
  {:else}
    <a target="_self" class:active="{page === A}" href="/p/{A}">{A}</a>
    <a target="_self" class:active="{page === B}" href="/p/{B}">{B}</a>
    <a target="_self" class:active="{page === C}" href="/p/{C}">{C}</a>
    <a target="_self" class:active="{page === D}" href="/p/{D}">{D}</a>
    <a target="_self" class:active="{page === E}" href="/p/{E}">{E}</a>
  {/if}

  {#if (L - page) > 2}
    <a target="_self" href="/p/{N}">&rsaquo;</a>
  {/if}
  {#if (L - page) > 3}
    <a target="_self" href="/p/{L}">&raquo;</a>
  {/if}
</div>
