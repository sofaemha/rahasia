<script>
  import { send } from '$lib/script/fetcher'
  import { writable } from 'svelte/store'
  import Sukses from '$lib/component/Sukses.svelte'
  import Luring from '$lib/component/Luring.svelte'

  let /** @type {string} */ message,
      /** @type {string} */ text,
      /** @type {number} */ status,
      /** @type {boolean} */ daring

  const m = writable(''),
        s = writable(1)

	m.subscribe(value => { message = value })
	s.subscribe(value => { status = value })

  const submit = async (/** @type {{ preventDefault: () => void }} */ evt) => {
    evt.preventDefault()

    const value = message.trim()
    if (value.length === 0) return

    s.set(2)
    const response = await send(value)

    s.set(3)

    setTimeout(() => {
      s.set(1)
    }, 15000)

    if (response !== null ? true : false) {
      m.set(''); text = ''
    }

    return ''
  }
</script>

<svelte:window bind:online={daring}/>

{#if daring === false}
  <Luring/>
{:else if status === 3}
  <Sukses/>
{:else}
  <form>
    <textarea
      bind:value={text}
      name="percakapan"
      placeholder="Tulis pesan disini..."
      on:input={() => {m.set(text)}}
      disabled={status === 2}
    ></textarea>

    <small> 
      <span class="catatan">*</span>
      <span>
        pesan akan melewati proses peninjauan sebelum ditampilkan
      </span>
    </small>

    <button class="kirim" on:click={submit}>
      Kirim
    </button>
  </form>
{/if}