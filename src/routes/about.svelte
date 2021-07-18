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
    import IconEmail from "$lib/components/IconEmail.svelte";

    export let path;
</script>

<svelte:head>
    <title>About - Baran Kılıç</title>
    <meta name="description" content="Get to know Baran Kılıç. Educational background, accomplishments and contant info." />
</svelte:head>

<Layout {path}>
    <div class="mx-auto max-w-screen-md p-2">
        <HomeTitle>About Me</HomeTitle>
        <section class="max-w-prose mx-auto mt-4">
            <p class="mb-2 text-xl">Hi 👋, I'm Baran Kılıç.</p>
            <p>
                I am a computer engineer. I'm currently pursuing my M.Sc. degree
                in <a
                    class="underline text-blue-600 visited:text-purple-600"
                    href="https://cmpe.boun.edu.tr"
                    target="_blank"
                    rel="noopener noreferrer nofollow">Computer Engi&shy;neer&shy;ing</a
                >
                at
                <a
                    class="underline text-blue-600 visited:text-purple-600"
                    href="http://www.boun.edu.tr"
                    target="_blank"
                    rel="noopener noreferrer nofollow">Boğaziçi University</a
                >, Istanbul, Turkey, from where I also received my B.S. degree
                and high honor certificate. I graduated from <a
                    class="underline text-blue-600 visited:text-purple-600"
                    href="https://en.wikipedia.org/wiki/Istanbul_High_School"
                    target="_blank"
                    rel="noopener noreferrer">Istanbul High School</a
                >.
            </p>
        </section>
        <section class="mt-8">
            <h2 class="text-3xl mb-2">News</h2>

            <div id="news-list" class="max-w-prose mx-auto space-y-3">
                <div>
                    4 Dec 2020 • Our conferance paper titled "A Cluster Based
                    System for Analyzing Ethereum Blockchain Transaction Data"
                    is now <a
                        class="underline text-blue-600 visited:text-purple-600"
                        href="https://ieeexplore.ieee.org/abstract/document/9274081"
                        target="_blank"
                        rel="noopener noreferrer">online</a
                    >.
                </div>
                <div>
                    3 Nov 2020 • I am presenting our paper titled "A Cluster
                    Based System for Analyzing Ethereum Blockchain Transaction
                    Data" at The Second International Conference on Blockchain
                    Computing and Applications <a
                        class="underline text-blue-600 visited:text-purple-600"
                        href="http://intelligenttech.org/BCCA2020/program.html"
                        target="_blank"
                        rel="noopener noreferrer">(BCCA 2020)</a
                    >.
                </div>
                <div>
                    4 Aug 2020 • Check out <a
                        class="underline text-blue-600 visited:text-purple-600"
                        href="https://www.infinitech-h2020.eu/blog/7-blog/65-transaction-graph-dataset-for-the-ethereum-blockchain"
                        target="_blank"
                        rel="noopener noreferrer">our blog post</a
                    > to learn more about what we do in the Infinitech project.
                </div>
                <div>
                    5 Nov 2019 • Started <a
                        class="underline text-blue-600 visited:text-purple-600"
                        href="https://cmpe.boun.edu.tr/news/eu-sponsored-h2020-project-infinitech-started"
                        target="_blank"
                        rel="noopener noreferrer">working</a
                    >
                    in the
                    <a
                        class="underline text-blue-600 visited:text-purple-600"
                        href="https://www.infinitech-h2020.eu/"
                        target="_blank"
                        rel="noopener noreferrer">Infinitech</a
                    > project. 🎉
                </div>
                <div>
                    11 Sep 2018 • <a
                        href="/projects#boun-course-planner"
                        class="underline text-blue-600 visited:text-purple-600">Boun Course Planner</a
                    > goes live.
                </div>
            </div>
        </section>
        <section class="mt-8">
            <h2 class="text-3xl mb-2">Contact Me</h2>
            <ul class="max-w-prose mx-auto">
                <li>
                    <a
                        class="inline-block p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-300"
                        href="mailto:baran.kilic@boun.edu.tr"
                    >
                        <IconEmail />
                    </a>
                </li>
            </ul>
        </section>
    </div>
</Layout>
