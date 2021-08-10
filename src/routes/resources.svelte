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

    const cards = [
        {
            name: "Web Dev Tools",
            href: "web-dev-tools",
            classes: "from-blue-400 to-blue-700"
        },
        {
            name: "Software Dev",
            href: "software-dev",
            classes: "from-orange-400 to-orange-700"
        },
        {
            name: "Coming soon",
            href: "",
            classes: "from-gray-400 to-gray-700"
        },
    ];
</script>

<svelte:head>
    <title>Resources - Baran Kılıç</title>
    <meta
        name="description"
        content="Resources like links, cheatsheets and code snippets about programming and command line."
    />
</svelte:head>

<Layout {path}>
    <div class="mx-auto max-w-screen-md p-2">
        <HomeTitle>Resources</HomeTitle>
        <section class="max-w-screen-md mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {#each cards as {name, href, classes}}
                <a
                    href="/resources/{href}"
                    class="block bg-gradient-to-br {classes} text-white rounded-2xl w-full h-32 text-2xl font-medium flex justify-center items-center"
                >
                    {name}
                </a>
            {/each}
        </section>
        <p class="text-xl mt-4">This page is under construction. 🚧</p>
    </div>
</Layout>
