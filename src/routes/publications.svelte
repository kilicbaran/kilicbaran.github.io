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
  export let path;

  const journal_pubs = [
    {
      text: "Baran Kılıç, Can Özturan, and Alper Sen. “Parallel analysis of Ethereum blockchain transaction data using cluster computing”. In: Cluster Computing (Jan. 2022). doi: 10.1007/s10586-021-03511-0.",
      links: [
        {
          label: "Link",
          link: "https://link.springer.com/article/10.1007/s10586-021-03511-0",
        },
      ],
    },
  ];

  const conf_papers = [
    {
      text: 'B. Kılıç, C. Özturan and A. Sen, "A Cluster Based System for Analyzing Ethereum Blockchain Transaction Data," 2020 Second International Conference on Blockchain Computing and Applications (BCCA), 2020, pp. 59-65, doi: 10.1109/BCCA50787.2020.9274081.',
      links: [
        {
          label: "Link",
          link: "https://ieeexplore.ieee.org/abstract/document/9274081",
        },
        /*{
                    label: "Slide",
                    link: "/publications/bcca2020-anayzing-ethereum-transactions.pdf",
                },*/
      ],
      // keywords: [
      //     "blockchain",
      //     "cluster",
      //     "ethereum",
      //     "graph analysis",
      //     "MPI",
      //     "transaction graph",
      // ],
    },
  ];
</script>

<svelte:head>
  <title>Publications - Baran Kılıç</title>
  <meta
    name="description"
    content="Publications authored by Baran Kılıç. Conference papers, journal publications."
  />
</svelte:head>

<Layout {path}>
  <div class="mx-auto max-w-screen-md p-4 tracking-inter">
    <HomeTitle>Publications</HomeTitle>
    <section class="mx-auto mt-4">
      <h2 class="text-2xl mb-1">Journal Articles</h2>
      <ol class="list-decimal mx-auto pl-8">
        {#each journal_pubs as { text, links, keywords }, index}
          <li value={index + 1}>
            <span>{text}</span>
            {#each links as { label, link }}
              <a
                class="m-1 p-1 border rounded border-blue-500 text-blue-500 hover:border-blue-800 hover:text-blue-800"
                href={link}
                target="_blank"
                rel="noopener noreferrer">{label}</a
              >
            {/each}
            {#if keywords}
              <div class="mt-2">
                <span class="mr-1">Keywords:</span>
                {#each keywords as keyword, index}
                  <span class="mr-1"
                    >{keyword}{#if index != keywords.length - 1},{/if}
                  </span>
                {/each}
              </div>
            {/if}
          </li>
        {/each}
      </ol>
    </section>
    <section class="mx-auto mt-4">
      <h2 class="text-2xl mb-1">Conference Papers</h2>
      <ol class="list-decimal mx-auto pl-8">
        {#each conf_papers as { text, links, keywords }, index}
          <li value={index + 1}>
            <span>{text}</span>
            {#each links as { label, link }}
              <a
                class="m-1 p-1 border rounded border-blue-500 text-blue-500 hover:border-blue-800 hover:text-blue-800"
                href={link}
                target="_blank"
                rel="noopener noreferrer">{label}</a
              >
            {/each}
            {#if keywords}
              <div class="mt-2">
                <span class="mr-1">Keywords:</span>
                {#each keywords as keyword, index}
                  <span class="mr-1"
                    >{keyword}{#if index != keywords.length - 1},{/if}
                  </span>
                {/each}
              </div>
            {/if}
          </li>
        {/each}
      </ol>
    </section>
  </div>
</Layout>
