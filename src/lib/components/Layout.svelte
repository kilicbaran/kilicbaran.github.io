<script>
    import Footer from "$lib/components/Footer.svelte";
    import HomeNav from "$lib/components/HomeNav.svelte";

    export let path;
    export let extraClasses = "";
</script>

<div
    class="mx-auto flex flex-col min-h-screen min-h-screen-ios"
>
    <HomeNav path={path} />
    <main class="flex-grow {extraClasses}"><slot></slot></main>
    <Footer />
</div>
