<script>

// @ts-nocheck

	import { page } from '$app/stores';
  import { Moment } from "$lib/script/fetcher"
  let /** @type {string} */ date = Moment(new Date())
</script>

<div class="linimasa">
  <h2>&lbrace; {$page.status} &rbrace;</h2>
  <div class="pesan">
    <p class="perasaan">
      {$page.error.message}
      <small>{date}</small>
    </p>
  </div>
</div>