<script>
	import logo from '$lib/assets/baran-logo.svg';
	import IconMail from '$lib/icons/Mail.svelte';
	import IconGithub from '$lib/icons/Github.svelte';
	import IconScholar from '$lib/icons/Scholar.svelte';
	import IconLinkedIn from '$lib/icons/LinkedIn.svelte';
</script>

<div class="p-4 mx-auto max-w-screen-md flex justify-center gap-6 my-20 sm:my-32 md:my-36">
	<img src={logo} alt="logo" class="h-24 w-24" />
	<div>
		<h1 class="text-4xl sm:text-5xl font-bold">Baran Kılıç</h1>
		<p class="text-2xl font-semibold text-gray-700 mb-2">software engineer</p>
		<div>
			<a class="social" href="https://github.com/kilicbaran" aria-label="github">
				<IconGithub />
			</a>
			<a class="social" href="https://linkedin.com/in/baran-kilic/" aria-label="linkedin">
				<IconLinkedIn />
			</a>
			<a
				class="social"
				href="https://scholar.google.com/citations?user=m3e8FOQAAAAJ&hl=en&oi=sra"
				aria-label="google scholar"
			>
				<IconScholar />
			</a>
			<a class="social" href="mailto:baran2kilic@gmail.com" aria-label="email">
				<IconMail />
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.social {
		@apply inline-block p-2 rounded hover:bg-[#FF4A4A]/10 text-[#850D0D] dark:hover:bg-gray-700;
	}
</style>
