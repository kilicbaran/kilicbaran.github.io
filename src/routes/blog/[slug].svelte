<script context="module">
  import { base } from "$app/paths";

  export async function load({ page, fetch }) {
    const slug = page.params.slug;

    const { post, metadata } = await fetch(`${base}/blog/${slug}.json`).then(
      (r) => r.json()
    );

    return {
      props: { post, metadata },
    };
  }
</script>

<script>
  import BlogLayout from "$lib/components/BlogLayout.svelte";

  export let post;
  export let metadata;
</script>

<BlogLayout {metadata}>
  {@html post}
</BlogLayout>
