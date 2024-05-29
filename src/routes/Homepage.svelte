<script>
	import Settings from './Settings.svelte';
	import LeftPanel from './LeftPanel.svelte';
	import NavBar from './NavBar.svelte';
	import MailContainer from './MailContainer.svelte';
	import NewMail from './NewMail.svelte';

	let showSettings = false;
	let showNewMail = false;

	const toggleShowSettings = () => {
		showSettings = !showSettings;
	};

	const toggleNewMail = () => {
		showNewMail = !showNewMail;
	};
</script>

<NavBar {toggleShowSettings} />
<div class="main-container">
	<LeftPanel on:click={toggleNewMail} />
	<MailContainer />
	{#if showSettings}
		<Settings />
	{/if}
	<div class="right-panel"></div>
</div>
<NewMail {showNewMail} on:click={toggleNewMail} />

<style>
	.main-container {
		flex: 1;
		display: flex;
		flex-direction: row;
		padding-bottom: 0.5rem;
	}
	.right-panel {
		width: 56px;
		flex-shrink: 0;
	}
</style>
