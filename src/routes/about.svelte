<script context="module">
  export function load({ url }) {
    return {
      props: {
        path: url.pathname,
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
  <meta
    name="description"
    content="Get to know Baran Kılıç. Educational background, accomplishments, and contact info."
  />
</svelte:head>

<Layout {path}>
  <div class="mx-auto max-w-screen-md p-4 tracking-inter subpixel-antialiased">
    <HomeTitle>About Me</HomeTitle>
    <div class="divide-y">
      <section class="max-w-prose mx-auto py-5">
        <p class="mb-2 text-xl">
          <span class="text-xl">👋 Hi, I'm Baran Kılıç.</span> 👨‍💻 I am a computer
          engineer.
        </p>
      </section>
      <section class="py-5">
        <h2 class="text-3xl mb-2">Education</h2>

        <p class="max-w-prose mx-auto">
          I received my M.Sc. and B.Sc. degree in <a
            class="underline text-blue-600 visited:text-purple-600"
            href="https://cmpe.boun.edu.tr"
            target="_blank"
            rel="noopener noreferrer nofollow">Computer Engi&shy;neer&shy;ing</a
          >
          from
          <a
            class="underline text-blue-600 visited:text-purple-600"
            href="http://www.boun.edu.tr"
            target="_blank"
            rel="noopener noreferrer nofollow">Boğaziçi University</a
          >, Istanbul, Turkey in 2022 and 2019, respectively. I graduated from
          <a
            class="underline text-blue-600 visited:text-purple-600"
            href="https://en.wikipedia.org/wiki/Istanbul_High_School"
            target="_blank"
            rel="noopener noreferrer">Istanbul High School</a
          >.
        </p>
      </section>
      <section class="py-5">
        <h2 class="text-3xl mb-2">News</h2>

        <div id="news-list" class="max-w-prose mx-auto space-y-4">
          <div>
            26 Feb 2022 • We published pagerank datasets for <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://zenodo.org/record/6038419"
              target="_blank"
              rel="noopener noreferrer">Ethereum</a
            >
            and
            <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://zenodo.org/record/6052811"
              target="_blank"
              rel="noopener noreferrer">Bitcoin</a
            > blockchains.
          </div>
          <div>
            04 Jan 2022 • The extended version of our conference paper is
            published in <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://link.springer.com/article/10.1007/s10586-021-03511-0"
              target="_blank"
              rel="noopener noreferrer">Cluster Computing</a
            > journal.
          </div>
          <div>
            26 Jul 2021 • We released our <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://gitlab.infinitech-h2020.eu/pilot9/scalable-transaction-graph-analysis-component-ethereum"
              target="_blank"
              rel="noopener noreferrer"
              >parallel and scalable blockchain transaction graph analysis
              system</a
            >.
          </div>
          <div>
            26 Jul 2021 • We released the source code of our <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://github.com/hyperledger/fabric-samples/tree/main/token-erc-1155"
              target="_blank"
              rel="noopener noreferrer">ERC-1155 Chaincode for Fabric</a
            >
            under an open source licence. Learn more about
            <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://www.youtube.com/watch?v=eXPI5Xncf4M"
              target="_blank"
              rel="noopener noreferrer">ERC-1155</a
            >.
          </div>
          <div>
            4 Dec 2020 • Our conferance paper titled "A Cluster Based System for
            Analyzing Ethereum Blockchain Transaction Data" is now <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://ieeexplore.ieee.org/abstract/document/9274081"
              target="_blank"
              rel="noopener noreferrer">online</a
            >.
          </div>
          <div>
            3 Nov 2020 • I am presenting our paper titled "A Cluster Based
            System for Analyzing Ethereum Blockchain Transaction Data" at The
            Second International Conference on Blockchain Computing and
            Applications <a
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
            17 Feb 2020 • We published a <a
              class="underline text-blue-600 visited:text-purple-600"
              href="https://zenodo.org/record/4718440"
              target="_blank"
              rel="noopener noreferrer">dataset</a
            > of ether and popular ERC20 token transactions extracted from Ethereum
            blockchain.
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
              class="underline text-blue-600 visited:text-purple-600"
              >Boun Course Planner</a
            > goes live.
          </div>
        </div>
      </section>
      <section class="py-5">
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
  </div>
</Layout>
