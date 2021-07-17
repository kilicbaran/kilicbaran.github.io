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

<style>
    ul > li > a {
        @apply text-blue-600 hover:underline visited:text-purple-600;
    }
</style>

<svelte:head>
    <title>Web Dev Tools - Resources - Baran Kılıç</title>
    <meta
        name="description"
        content="Links to useful web development tools, speed tests, validators."
    />
</svelte:head>

<Layout {path}>
    <div class="mx-auto max-w-screen-md p-2">
        <HomeTitle>Web Dev Tools</HomeTitle>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <section>
                <h2 class="text-2xl">Validators</h2>
                <ul>
                    <li>
                        <a
                            href="https://validator.w3.org/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            >W3C HTML Markup Validator</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://validator.w3.org/feed/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            >W3C Atom, RSS Feed Validator</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://jigsaw.w3.org/css-validator/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">W3C CSS Validator</a
                        >
                    </li>
                </ul>
            </section>
            <section>
                <h2 class="text-2xl">SEO Check</h2>
                <ul>
                    <li>
                        <a
                            href="https://www.seobility.net/en/seocheck/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">Seobility SEO Check</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://seositecheckup.com/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">SEO Site Checkup</a
                        >
                    </li>
                </ul>
            </section>
            <section>
                <h2 class="text-2xl">Speed & Overall Tests</h2>
                <ul>
                    <li>
                        <a
                            href="https://web.dev/measure/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">Google Measure</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://developers.google.com/speed/pagespeed/insights/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">PageSpeed Insights</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://webpagetest.org/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">Web Page Test</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://gtmetrix.com/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">GTMetrix</a
                        >
                    </li>
                </ul>
            </section>
            <section>
                <h2 class="text-2xl">Meta Tag Tests</h2>
                <ul>
                    <li>
                        <a
                            href="https://www.opengraph.xyz/"
                            target="_blank"
                            rel="noopener noreferrer nofollow">OpenGraph Preview</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://cards-dev.twitter.com/validator"
                            target="_blank"
                            rel="noopener noreferrer nofollow">Twitter Card Validator</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://search.google.com/test/rich-results"
                            target="_blank"
                            rel="noopener noreferrer nofollow">Google Rich Results Test</a
                        >
                    </li>
                </ul>
            </section>
            <section>
                <h2 class="text-2xl">Other</h2>
                <ul>
                    <li>
                        <a
                            href="https://search.google.com/test/mobile-friendly"
                            target="_blank"
                            rel="noopener noreferrer nofollow">Google Mobile Friendly Test</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://search.google.com/test/amp"
                            target="_blank"
                            rel="noopener noreferrer nofollow">Google AMP Test</a
                        >
                    </li>
                </ul>
            </section>
        </div>
    </div>
</Layout>
