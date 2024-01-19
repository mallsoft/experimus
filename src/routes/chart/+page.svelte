<script>
	import { onMount } from 'svelte';
	import { options } from './opts';

	/** @type {HTMLElement}*/
	let div;
	/** @type {any}*/
	let apex;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		apex = new ApexCharts(div, options);
		apex.render();
	});
</script>

<div bind:this={div} />
