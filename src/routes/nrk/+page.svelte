<script>
	export let data;
</script>

<svelte:head>
	<title>NEWS</title>
</svelte:head>

<h1>Get 10 first headings from nrk</h1>

<ul>
	{#each data.headings as { text, href }}
		<li>
			<a {href}>{text}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 1rem;
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	li {
		padding: 0.5rem;
	}
	li + li {
		border-top: 1rex solid darkgray;
	}
</style>
