<script>
    import "../app.postcss";
    import { dev } from '$app/env';
</script>
<svelte:head>
    {#if !dev}
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; connect-src 'self'; frame-src https://render.githubusercontent.com; img-src https://* 'self'; media-src 'self'; style-src https://rsms.me/ https://fonts.googleapis.com https://github.githubassets.com/ 'unsafe-inline' 'self'; font-src https://rsms.me/ https://fonts.gstatic.com; manifest-src 'self';  script-src 'self' 'unsafe-inline'; worker-src 'self';">
    {/if}
</svelte:head>
<slot></slot>