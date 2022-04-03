<script context="module">
  export function load({ url, error, status }) {
    return {
      props: {
        path: url.pathname,
        status,
        error,
      },
    };
  }
</script>

<script>
  import Layout from "$lib/components/Layout.svelte";
  import HomeTitle from "$lib/components/HomeTitle.svelte";
  import { dev } from "$app/env";

  export let status;
  export let error;
  export let path;
</script>

<svelte:head>
  <title>Page not found - Baran Kılıç</title>
</svelte:head>

<Layout {path}>
  <div class="mx-auto max-w-screen-md p-2">
    <HomeTitle>Page not found</HomeTitle>
    <div class="max-w-screen-md mx-auto mt-4">
      <a href="/" class="underline text-blue-500 text-xl">Go back to homepage</a
      >
    </div>
    <p>{status} - {error.message}</p>
    {#if dev && error.stack}
      <pre class="text-xs mt-4 overflow-scroll">{error.stack}</pre>
    {/if}
  </div>
</Layout>
