<script>
  import { PUBLIC_APPLICATION_NAME as name, PUBLIC_APPLICATION_DESCRIPTION as description } from '$env/static/public'
  import Blangko from '$lib/component/Blangko.svelte';
</script>

<div class="plang">
  <h1>{@html name }</h1>

  <p class="keterangan">
    {@html description }
  </p>

  <Blangko/>
</div>