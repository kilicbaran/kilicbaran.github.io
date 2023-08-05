<script>
	import HeroBackground from '$lib/components/HeroBackground.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Resources from '$lib/components/Resources.svelte';
	import About from '$lib/components/About.svelte';
	import HomeFooter from '$lib/components/HomeFooter.svelte';
	import Publications from '$lib/components/Publications.svelte';
</script>

<!-- <header class="flex justify-center items-center h-16 bg-slate-100">
	<img src={logo} alt="logo" class="h-10 w-10" />
	<nav />
</header> -->

<svelte:head>
	<title>Baran Kılıç</title>
	<meta
		name="description"
		content="Software Engineer. MSc. & BSc. in Computer Engineering. Check out my projects and know more about me."
	/>
</svelte:head>

<main class="overflow-hidden">
	<HeroBackground />
	<Hero />
	<Projects />
	<Resources />
	<Publications />
	<About />
	<HomeFooter />
</main>
