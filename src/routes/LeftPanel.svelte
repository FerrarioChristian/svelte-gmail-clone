<script>
	import { setImportantFilter, setSpecialFilter, setDefaultFilter } from '$lib/utilsStore.js';
</script>

<div class="left-panel">
	<button class="new-mail-button" on:click>
		<div class="icon">
			<span class="material-symbols-outlined"> edit </span>
		</div>
		<p>Scrivi</p>
	</button>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="folder" on:click={setDefaultFilter}>
		<span class="material-symbols-outlined"> inbox </span>
		<p>Principale</p>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="folder" on:click={setImportantFilter}>
		<span class="material-symbols-outlined"> label </span>
		<p>Importanti</p>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="folder" on:click={setSpecialFilter}>
		<span class="material-symbols-outlined"> star </span>
		<p>Speciali</p>
	</div>
</div>

<style>
	.left-panel {
		max-width: 256px;
		min-width: 256px;
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		box-sizing: border-box;
	}

	.new-mail-button {
		background-color: #c2e7ff;
		height: 0;
		padding: 1.7rem;
		border-radius: 1rem;
		align-items: center;
		display: flex;
		justify-content: center;
		border: none;
		margin-right: auto;
		margin-bottom: 2rem;
		cursor: pointer;
	}

	.new-mail-button:hover {
		box-shadow: 0px 2px 3px #ccc;
	}

	p {
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		font-size: 0.9rem;
	}

	.icon {
		width: 2rem;
		height: 2rem;
		margin: 0.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		aspect-ratio: 1/1;
		cursor: pointer;
	}

	.folder {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 2rem;
		gap: 1rem;
		padding-inline: 0.5rem;
		cursor: pointer;
	}

	.folder:hover {
		background-color: #f1f3f4;
	}
</style>
