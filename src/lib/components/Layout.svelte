<script>
  import Footer from "$lib/components/Footer.svelte";
  import HomeNav from "$lib/components/HomeNav.svelte";

  export let path;
  export let extraClasses = "";
</script>

<div class="mx-auto flex flex-col min-h-screen min-h-screen-ios">
  <HomeNav {path} />
  <main class="grow {extraClasses}"><slot /></main>
  <Footer />
</div>
