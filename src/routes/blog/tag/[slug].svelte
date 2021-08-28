<script context="module">
    import { base } from "$app/paths";

    export async function load({ page, fetch }) {
        const slug = page.params.slug;

        const posts = await fetch(`${base}/blog.json`).then((r) => r.json());
        const filteredPosts = posts.filter((post) =>
            post.metadata.tags.includes(slug)
        );
        return {
            props: { posts: filteredPosts, tag: slug },
        };
    }
</script>

<script>
    export let posts;
    export let tag;
</script>

<svelte:head>
    <title>Tag "{tag}" - Blog - Baran Kılıç</title>
</svelte:head>

<div class="p-4">
    <section
        class="mx-auto max-w-screen-lg flex flex-col md:flex-row items-center md:justify-between mt-4 sm:mt-6 md:mt-8 text-center md:text-left"
    >
        <h1 class="text-7xl font-bold tracking-tighter leading-none">
            Baran's Blog
        </h1>
        <span class="mt-4 md:mt-0"
            >My notes, interests, achievements, future, and past</span
        >
    </section>

    <div class="mx-auto max-w-screen-md mt-8">
        <h2 class="text-xl mb-6">Posts with tag: "{tag}"</h2>
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
