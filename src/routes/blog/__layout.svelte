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
  export let path;
</script>

<Layout {path}>
  <slot />
</Layout>
