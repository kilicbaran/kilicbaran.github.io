<script context="module">
    export async function load({ page }) {
        return {
            props: {
                path: page.path,
            },
        };
    }
</script>

<script>
    import Layout from "$lib/components/Layout.svelte";
    import HomeTitle from "$lib/components/HomeTitle.svelte";
    export let path;
</script>

<svelte:head>
    <title>Page not found - Baran Kılıç</title>
</svelte:head>

<Layout {path}>
    <div class="mx-auto max-w-screen-md p-2">
        <HomeTitle>Page not found</HomeTitle>
        <div class="max-w-screen-md mx-auto mt-4">
            <a href="/" class="underline text-blue-500 text-xl"
                >Go back to homepage</a
            >
        </div>
    </div>
</Layout>
