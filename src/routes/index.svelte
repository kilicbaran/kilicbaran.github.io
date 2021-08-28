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
    import IconArrowRight from "$lib/components/IconArrowRight.svelte";
    import { menuItems } from "$lib/menuItems";

    export let path;
</script>

<svelte:head>
    <title>Baran Kılıç</title>
    <meta
        name="description"
        content="Personal website of Baran Kılıç. M.Sc. Student in Computer Engineering. Check out my projects, blog posts, and know more about me."
    />
    <style type="text/css">
        .my-stroke-width {
            stroke-width: 7px;
        }

        @media (min-width: 640px) {
            .my-stroke-width {
                stroke-width: 5px;
            }
        }

        @media (min-width: 768px) {
            .my-stroke-width {
                stroke-width: 4px;
            }
    } 
    </style>
</svelte:head>

<Layout {path}>
    <div class="mx-auto max-w-screen-md p-4">
        {#each menuItems as { href, name, bgColor, strokeColor, textColor }}
            <a
                {href}
                class="{bgColor}  text-white font-black rounded-lg px-8 h-18 sm:h-24 md:h-28 overflow-hidden flex items-center mb-4 hover:shadow-xl transition ease-in-out duration-300 transform-gpu hover:-translate-y-1"
            >
                <div class="subpixel-antialiased text-transparent w-full transform-gpu -rotate-6 -translate-y-2 sm:-translate-y-6 md:-translate-y-7 -translate-x-4 sm:translate-x-0">
                    <svg class="h-full w-full" style="font-size: 72px;" viewBox="0 0 550 100"
                        ><text
                            class="my-stroke-width"
                            y="80"
                            text-rendering="optimizeLegibility"
                            letter-spacing="6"
                            fill={textColor}
                            paint-order="stroke"
                            stroke={strokeColor}
                            stroke-linejoin="round"
                            >{name}</text
                        ></svg
                    >
                </div>
                <div class="ml-auto text-blue-50"><IconArrowRight /></div>
            </a>
        {/each}
    </div>
</Layout>
