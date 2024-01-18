<script>
	import { navigating, page } from '$app/stores';
	import '../global.css';

	const routes = [
		{ name: 'main', href: '/' },
		{ name: 'nrk', href: '/nrk' }
	];
</script>

<nav>
	{#if $navigating}
		{@const to = routes.find((x) => x.href === $navigating?.to?.url.pathname)}
		Navigating to... {to?.name}
	{:else}
		{#each routes as { name, href }}
			<a class:current={$page.url.pathname === href} {href}>{name}</a>
		{/each}
	{/if}
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		padding: 1rem;
		margin: 0.5rem;
		border-radius: 0.5rem;
		background-color: white;
		box-shadow: 1px 2px 10px -4px rgba(0, 0, 0, 0.5);
	}

	a {
		color: currentColor;
	}
	a:not(:focus, :hover) {
		text-decoration: none;
	}
	a.current {
		opacity: 0.5;
	}

	main {
		padding: 1rem;
	}
</style>
