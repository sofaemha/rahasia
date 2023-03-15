<script>
	import { page } from '$app/stores';
	import { Page, Moment } from '$lib/script/fetcher'
  import Plang from "$lib/component/Plang.svelte"
  import Linimasa from "$lib/component/Linimasa.svelte"
	import Halaman from '$lib/component/Halaman.svelte';

	let p = Number($page.params.path), date = Moment(new Date())

</script>

{#await Page()}
	<div class="linimasa">
		<h2>&lbrace; Proses &rbrace;</h2>
		<div class="pesan">
			<p class="perasaan">
				Sedang mengambil data...
				<small>{date}</small>
			</p>
		</div>
	</div>
{:then result} 
	{#if p > Math.ceil(result.length / 5)}
		<div class="linimasa">
			<h2>&lbrace; 404 &rbrace;</h2>
			<div class="pesan">
				<p class="perasaan">
					Not Found
					<small>{date}</small>
				</p>
			</div>
		</div>
	{:else}
		<Plang/>

		<Linimasa page={p}/>

		<Halaman page={p}/>
	{/if}
{:catch error}
	<div class="linimasa">
		<h2>&lbrace; Error &rbrace;</h2>
		<div class="pesan">
			<p class="perasaan">
        {error.message}
        <small>{date}</small>
			</p>
		</div>
	</div>
{/await}