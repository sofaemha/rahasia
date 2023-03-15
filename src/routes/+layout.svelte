<script>
  import "$lib/style/Utama.scss"
  import Kepala from "$lib/component/Kepala.svelte"
  import Kaki from "$lib/component/Kaki.svelte"
  import { PUBLIC_APPLICATION_ANALYTICS as analytics } from "$env/static/public";
</script>

<Kepala/>

<slot />

<Kaki/>

{@html analytics}