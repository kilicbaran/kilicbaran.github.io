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
    <title>Software Dev - Resources - Baran Kılıç</title>
    <meta
        name="description"
        content="Useful links about software development."
    />
</svelte:head>

<Layout {path}>
    <div class="mx-auto max-w-screen-md p-2">
        <HomeTitle>Software Dev</HomeTitle>
        <div id="software-dev" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <section>
                <h2 class="text-2xl">Documenting Changes</h2>
                <ul>
                    <li>
                        <a
                            href="https://keepachangelog.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Keep a change log</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://www.conventionalcommits.org"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            >Conventional Commits</a
                        >
                    </li>
                    
                </ul>
            </section>
            
        </div>
    </div>
</Layout>
