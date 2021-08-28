<script context="module">
    import { base } from "$app/paths";

    export async function load({ fetch }) {
        const posts = await fetch(`${base}/blog.json`).then((r) => r.json());
        return {
            props: { posts },
        };
    }
</script>

<script>
    import IconRSS from "$lib/components/IconRSS.svelte";
    export let posts;
</script>

<svelte:head>
    <title>Blog - Baran Kılıç</title>
    <link rel="alternate" type="application/rss+xml" href="/blog/feed.xml" />
</svelte:head>

<div class="p-4">
    <section
        class="mx-auto max-w-screen-lg flex flex-col md:flex-row items-stretch md:justify-between mt-4 sm:mt-6 md:mt-8 text-center md:text-left"
    >
        <h1 class="text-7xl font-bold tracking-tighter leading-none">
            Baran's Blog
        </h1>
        <div class="mt-4 md:mt-0 flex flex-col justify-evenly">
            <div class="flex justify-end">
                <a type="application/rss+xml" href="/blog/feed.xml"><IconRSS /></a>
            </div>
            <div>My notes, interests, achievements, future, and past</div>
        </div>
    </section>

    <div class="mx-auto max-w-screen-md mt-8 tracking-inter">
        <!-- posts.slice(0, 1) -->
        {#each posts as { metadata, slug }}
            <a href="/blog/post/{slug}">
                <div
                    class="mb-6 flex flex-col md:flex-row bg-gray-50 dark:bg-gray-800 border rounded-xl overflow-hidden items-center"
                >
                    <img
                        class="object-cover w-full md:w-1/2 h-60"
                        src="/images/{metadata.coverImage}"
                        alt={metadata.coverImageAlt}
                    />
                    <div class="w-full md:w-1/2 p-4 space-y-4">
                        <div class="text-2xl">{metadata.title}</div>
                        <div>{metadata.summary}</div>
                        <div class="text-sm">
                            {new Date(metadata.date).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
