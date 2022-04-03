<script>
  import { menuItems } from "$lib/menuItems";
  import IconGithub from "$lib/components/IconGithub.svelte";
  import IconScholar from "$lib/components/IconScholar.svelte";

  export let path;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap&text=B"
    rel="stylesheet"
  />
</svelte:head>

<header class="px-2 py-1 xl:px-10 flex border-b items-center shadow">
  <a
    href="/"
    class="shrink-0 mr-auto w-10 h-10 leading-10 font-sourceSerifPro font-light text-4xl text-center subpixel-antialiased border border-gray-900 dark:border-gray-100 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    B
  </a>

  <nav
    class="ml-2 px-2 overflow-x-auto overflow-y-hidden whitespace-nowrap flex align-items-center"
  >
    {#each menuItems as { href, name }}
      <a
        {href}
        class="px-3 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        class:text-blue-500={path.startsWith(href.replace(/\/$/, ""))}
        class:font-bold={path.startsWith(href.replace(/\/$/, ""))}
      >
        {name}
      </a>
    {/each}
    <a
      class="p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      href="https://github.com/kilicbaran"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGithub />
    </a>
    <a
      class="p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      href="https://scholar.google.com/citations?user=m3e8FOQAAAAJ&hl=en&oi=sra"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconScholar />
    </a>
  </nav>
</header>
