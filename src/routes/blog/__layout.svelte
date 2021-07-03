<script context="module">
	export async function load({ page }) {
		return {
			props: {
				path: page.path
			}
		};
	}
</script>

<script>
    import Layout from "$lib/components/Layout.svelte";
	export let path;
</script>

<Layout path={path}>
    <slot></slot>
</Layout>
