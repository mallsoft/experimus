<script>
	import { chart } from 'svelte-apexcharts';

	/** @type {any} */
	export let options = null;
</script>

<div use:chart={options} />
