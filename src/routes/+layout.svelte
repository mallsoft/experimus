<script>
	import { navigating, page } from '$app/stores';
	import '../global.css';

	const routes = [
		{ name: 'main', href: '/' },
		{ name: 'nrk', href: '/nrk' },
		{ name: 'chart', href: '/chart' }
	];
</script>

<nav class="box" class:loading={$navigating}>
	{#if $navigating}
		{@const to = routes.find((x) => x.href === $navigating?.to?.url.pathname)}
		<span>Navigating to... {to?.name}</span>
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

	nav a {
		color: currentColor;
	}
	nav a:not(:focus, :hover) {
		text-decoration: none;
	}
	nav a.current {
		opacity: 0.5;
	}

	nav.loading span {
		color: white;
	}

	nav.loading {
		background: linear-gradient(90deg, #ffa07a, #87ceeb, #98fb98);
		animation: animatus 3s infinite;
		background-size: 200% 200%;
	}

	@keyframes animatus {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	main {
		padding: 1rem;
	}
</style>
