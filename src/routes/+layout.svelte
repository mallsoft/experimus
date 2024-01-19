<script>
	import { navigating, page } from '$app/stores';
	import '../global.css';

	const routes = [
		{ name: 'main', href: '/' },
		{ name: 'nrk', href: '/nrk' },
		{ name: 'chart', href: '/chart' }
	];
</script>

<nav class="box">
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
		margin: 0.5rem;
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
