<script>
	import { emailStore } from '$lib/emailStore.js';

	export let showNewMail = false;

	let mittente = '';
	let oggetto = '';
	let corpo = '';

	function addEmail() {
		const newEmail = {
			mittente,
			oggetto,
			corpo,
			speciale: false,
			importante: false
		};
		emailStore.update((emails) => [...emails, newEmail]);
		mittente = '';
		oggetto = '';
		corpo = '';

		showNewMail = false;
	}
</script>

{#if showNewMail}
	<div class="new-mail-container">
		<div class="new-mail-header">
			<h3>Nuovo messaggio</h3>
			<button on:click>X</button>
		</div>
		<form on:submit|preventDefault={addEmail}>
			<input type="text" placeholder="A" bind:value={mittente} required />
			<input type="text" placeholder="Oggetto" bind:value={oggetto} required />
			<textarea bind:value={corpo}></textarea>
			<button type="submit">Invia</button>
		</form>
	</div>
{/if}

<style>
	.new-mail-container {
		position: absolute;
		bottom: 0px;
		right: 3vw;
		background-color: white;
		width: 50%;
		height: 48%;
		max-width: 35rem;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		display: flex;
		flex-direction: column;
		box-shadow:
			0px 8px 10px 1px rgba(0, 0, 0, 0.14),
			0px 3px 14px 2px rgba(0, 0, 0, 0.12),
			0px 5px 5px -3px rgba(0, 0, 0, 0.2);

		font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
	}

	.new-mail-header {
		padding: 13px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #041e49;
		background-color: #f2f6fc;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		font-size: small;
		height: 1rem;
	}

	.new-mail-header button {
		border-radius: 5px;
		font-size: large;
		font-weight: bold;
		background-color: transparent;
		outline: none;
		border: none;
		cursor: pointer;
	}

	.new-mail-header button:hover {
		background-color: lightgray;
	}

	form {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	form input,
	form textarea {
		box-sizing: border-box;
		height: 2rem;
		padding: 1rem;
		border: none;
		border-bottom: 1px solid #ccc;
		outline: none;
		border-radius: 0;
		margin: 0 1rem;
	}

	form textarea {
		font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
		flex: 1;
		resize: none;
	}

	form button {
		background-color: #1b61d1;
		color: white;
		padding: 0.5rem;
		border: none;
		border-radius: 4px;
		text-transform: capitalize;
		margin: 1rem;
		width: 5rem;
	}
</style>
