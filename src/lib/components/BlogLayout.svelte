<script>
    export let metadata;
</script>

<svelte:head>
    <title>{metadata.title} - Blog - Baran Kılıç</title>
    <meta name="description" content={metadata.summary} />
</svelte:head>


<article>
    <div class="max-w-screen-md mx-auto p-2 tracking-inter">
        <h1 class="text-5xl max-w-screen-md mx-auto my-4 sm:my-6 leading-tight">{metadata.title}</h1>
        <div class="flex">
            <a href="/about"><img
                class="flex-none w-12 h-12 rounded-full"
                src="/images/baran.jpg"
                alt="Baran Kılıç"
                loading="lazy"
            /></a>
            <div class="ml-2">
                <a class="hover:underline font-medium" href="/about">Baran Kılıç</a>
                <div>
                    {new Date(metadata.date).toLocaleDateString(
                        "en-US",
                        {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        }
                    )} • {metadata.minsToRead} min read
                </div>
            </div>
        </div>

        {#if metadata.tags}
            <div class="mt-4 text-sm">
                <span>Tags:</span>
                {#each metadata.tags as tag}
                    <a
                        href="/blog/tag/{tag}"
                        class="border border-gray-800 dark:border-gray-400 rounded px-2 py-1 mr-2 hover:underline"
                        >{tag}</a
                    >
                {/each}
            </div>
        {/if}
    </div>
    {#if metadata.coverImage}
        <div class="max-w-screen-md mx-auto mt-6 mb-6">
            <img
                src="/images/{metadata.coverImage}"
                alt={metadata.coverImageAlt}
                loading="lazy"
            />
        </div>
    {/if}

    <div class="blog-body my-8">
        <slot />
    </div>
</article>
