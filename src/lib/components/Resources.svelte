<script>
	import ResourcesLatex from './ResourcesLatex.svelte';
	import ResourcesSoftwareDev from './ResourcesSoftwareDev.svelte';
	import ResourcesWebDevTools from './ResourcesWebDevTools.svelte';
</script>

<div class="background text-white p-4">
	<section class="mx-auto max-w-3xl mt-16 mb-16">
		<h2 class="text-3xl sm:text-4xl font-bold mb-2">Resources</h2>
		<div class="text-lg mb-4">Useful links, guides, cheatsheets, tools</div>

		<div class="space-y-6">
			<ResourcesWebDevTools />
			<ResourcesSoftwareDev />
			<ResourcesLatex />
		</div>
	</section>
</div>

<style>
	.background {
		background: radial-gradient(53.2% 178.72% at 27.1% 182.75%, #c241ff 6.65%, #6b57ff 100%);
	}
</style>
