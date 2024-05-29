<script>
	import { emailStore } from '$lib/emailStore.js';

	function deleteEmail(index) {
		emailStore.update((emails) => {
			return emails.filter((_, i) => i !== index);
		});
	}

	function toggleFavourite(index) {
		emailStore.update((emails) => {
			emails[index].speciale = !emails[index].speciale;
			return emails;
		});
	}

	function toggleImportant(index) {
		emailStore.update((emails) => {
			emails[index].importante = !emails[index].importante;
			return emails;
		});
	}

	export let index;
	export let email;

	$: favouriteColorClass = email.speciale ? 'yellow-icon' : '';
	$: importantColorClass = email.importante ? 'yellow-icon' : '';
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="mail-preview" on:click role="button">
	<input type="checkbox" class="icon" />
	<button
		class="{favouriteColorClass} icon"
		on:click|stopPropagation={() => toggleFavourite(index)}
	>
		<span class="material-symbols-outlined"> star </span>
	</button>
	<button
		class="{importantColorClass} icon"
		on:click|stopPropagation={() => toggleImportant(index)}
	>
		<span class="material-symbols-outlined"> label </span>
	</button>
	<h3 class="from">{email.mittente}</h3>
	<h3 class="object">
		{email.oggetto}
		<span> - {email.corpo}</span>
	</h3>
	<button class="icon delete" on:click|stopPropagation={() => deleteEmail(index)}>
		<span class="material-symbols-outlined"> delete </span>
	</button>
</div>

<style>
	.mail-preview {
		box-sizing: border-box;
		display: flex;
		padding: 0.5rem;
		border-bottom: 1px solid #e0e0e0;
		height: 2.5rem;
		align-items: center;
		flex-shrink: 1;
		min-width: none;
		min-width: 20rem;
	}

	.mail-preview:hover {
		box-shadow: 0 0 0.8rem #e0e0e0;
	}

	.icon {
		box-sizing: border-box;
		color: #5f6368;
		margin: 0.4rem;
		padding: 0.1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		cursor: pointer;
		border: none;
		background-color: transparent;
		outline: none;
		aspect-ratio: 1/1;
	}

	.icon:hover {
		background-color: #e0e0e0;
	}

	.icon span {
		font-size: 22px;
	}

	.mail-preview:not(:hover) .delete {
		display: none;
	}

	.from {
		margin: 0;
		margin-left: 0.5rem;
		flex: 0;
		font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
		font-size: 0.875rem;
		letter-spacing: normal;
		line-height: 1.5rem;
		flex-basis: 15rem;
		flex-shrink: 0;
	}

	.object {
		margin: 0;
		margin-right: 1rem;
		font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
		font-size: 0.875rem;
		letter-spacing: normal;
		line-height: 1.5rem;
		flex: 1;
		min-width: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.object span {
		min-width: 0;
		font-weight: 400;
		color: #5f6368;
		flex-shrink: 1;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.yellow-icon {
		color: #fbbc05;
	}
</style>
