<script>
	import '../app.css';
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	{#if !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-90M94T4S8S"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-90M94T4S8S');
		</script>
	{/if}
</svelte:head>

<slot />
