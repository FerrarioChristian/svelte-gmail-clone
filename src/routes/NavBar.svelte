<script>
	import { searchValue } from '$lib/utilsStore.js';
	export let toggleShowSettings;

	$: inputValue = '';
	$: {
		searchValue.set(inputValue);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav>
	<div class="logo-container">
		<div class="icon">
			<span class="material-symbols-outlined"> menu </span>
		</div>
		<img src="../logo_gmail.png" alt="gmail logo" />
	</div>

	<div class="searchbar">
		<div class="icon">
			<span class="material-symbols-outlined"> search </span>
		</div>
		<input type="text" placeholder="Cerca nella posta" bind:value={inputValue} />
		<div class="icon">
			<span class="material-symbols-outlined"> tune </span>
		</div>
	</div>
	<div class="icon">
		<span class="material-symbols-outlined"> help </span>
	</div>
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<div class="icon" on:click={toggleShowSettings} role="button">
		<span class="material-symbols-outlined"> settings </span>
	</div>
	<div class="icon">
		<span class="material-symbols-outlined"> apps </span>
	</div>
	<div class="icon">
		<span class="material-symbols-outlined"> account_circle </span>
	</div>
</nav>

<style>
	nav {
		height: 3rem;
		display: flex;
		padding: 0.5rem;
		flex-direction: row;
		align-items: center;
	}

	img {
		margin: 0.4rem;
	}

	.icon {
		color: #5f6368;
		margin: 0.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}
	.icon:hover {
		background-color: lightgray;
	}

	.logo-container {
		min-width: 246px;
		display: flex;
		align-items: center;
	}
	.searchbar {
		display: flex;
		width: 45rem;
		background-color: #eaf1fb;
		border-radius: 3rem;
		margin-right: auto;
	}
	input {
		background-color: transparent;
		border: none;
		flex-grow: 1;
		font-size: medium;
	}
	input:focus {
		outline: none;
	}
</style>
