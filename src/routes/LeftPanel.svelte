<div class="left-panel">
	<button class="new-mail-button" on:click>
		<div class="icon">
			<span class="material-symbols-outlined"> edit </span>
		</div>
		<p>Scrivi</p>
	</button>
</div>

<style>
	.left-panel {
		max-width: 256px;
		min-width: 256px;
		display: flex;
		justify-content: center;
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
		margin: 0.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		aspect-ratio: 1/1;
		cursor: pointer;
	}
</style>
