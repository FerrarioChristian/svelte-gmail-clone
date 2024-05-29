<script>
	import { emailStore } from '$lib/emailStore.js';
	import { searchValue } from '$lib/utilsStore.js';
	import MailPreview from './MailPreview.svelte';

	let emailList = [];
	let inputValue = '';
	$: mailToView = undefined;

	let filterCallback;

	searchValue.subscribe((value) => {
		inputValue = value;
		emailStore.update((emails) => emails);
	});

	emailStore.subscribe((value) => {
		emailList = value;
	});

	$: emailList = emailList.filter(filterCallback);

	const defaultFilter = (email) => {
		return (
			email.mittente.toLowerCase().includes(inputValue.toLowerCase()) ||
			email.oggetto.toLowerCase().includes(inputValue.toLowerCase()) ||
			email.corpo.toLowerCase().includes(inputValue.toLowerCase())
		);
	};
	filterCallback = defaultFilter;
</script>

<div class="mail-container">
	<div class="mail-list-container">
		{#each emailList as email, index}
			<MailPreview
				{email}
				{index}
				on:click={() => {
					mailToView = emailList[index];
				}}
			/>
		{/each}
	</div>
	<div class="separator"></div>
	<div class="mail-view-container">
		{#if mailToView}
			<div>
				<h1>{mailToView.oggetto}</h1>
				<p>{mailToView.corpo}</p>
			</div>
		{:else}
			<div>
				<h3>Nessuna mail selezionata</h3>
			</div>
		{/if}
	</div>
</div>

<style>
	.mail-container {
		background-color: white;
		display: flex;
		flex-grow: 1;
		flex-shrink: 5;
		border-radius: 1rem;
		min-width: 20rem;
	}

	.mail-list-container {
		flex-basis: 0;
		display: flex;
		flex-direction: column;
		flex-grow: 2;
		border-radius: 1rem;
		min-width: 20rem;
	}

	.separator {
		width: 1px;
		background-color: #f1f3f4;
	}

	.mail-view-container {
		flex-basis: 0;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		border-radius: 1rem;
		min-width: 20rem;
	}

	.mail-view-container div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 2rem;
	}

	.mail-view-container div h3 {
		padding: 1rem;
		width: 100%;
		text-align: center;
		font-weight: 400;
	}
</style>
