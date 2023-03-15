<script>
  import { send } from '$lib/script/fetcher'
  import { writable } from 'svelte/store'

  let /** @type {string} */ message,
      /** @type {string} */ text,
      /** @type {number} */ status,
      /** @type {boolean} */ daring

  export let /** @type {number} */ parent

  const m = writable(''),
        s = writable(1)

	m.subscribe(value => { message = value })
	s.subscribe(value => { status = value })

  const submit = async (/** @type {{ preventDefault: () => void }} */ evt) => {
    evt.preventDefault()

    const value = message.trim()
    if (value.length === 0) return

    s.set(2)
    const response = await send(value, parent)

    s.set(3)

    setTimeout(() => {
      s.set(1)
    }, 20000)

    if (response !== null ? true : false) {
      m.set(''); text = ''
    }

    return ''
  }
</script>

<svelte:window bind:online={daring}/>

<form class="jawaban">
  <input
    bind:value={text}
    on:input={() => {m.set(text)}}
    type="text"
    name="jawaban"
    placeholder="Tulis balasan anda..."
    disabled={status === 2 || daring === false}
  />

  <button class="kirim" on:click={submit} disabled={status === 2 || daring === false}>
    {status === 2 ? '...' : 'Balas'}
  </button>
</form>

{#if status === 3}
  <div class="peringatan sukses detail">
    <p>
      Pesan anda sudah terkirim, namun belum dapat ditampilkan karena harus menunggu proses peninjauan.
    </p>
  </div>
{/if}