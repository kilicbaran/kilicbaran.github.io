<script>
    import "../app.postcss";
    import { dev } from "$app/env";
</script>

<svelte:head>
    {#if !dev}
        <meta
            http-equiv="Content-Security-Policy"
            content="default-src https://www.google-analytics.com 'unsafe-inline'; connect-src 'self' https://www.google-analytics.com; frame-src https://render.githubusercontent.com; img-src https://* www.googletagmanager.com https://www.google-analytics.com 'self'; media-src 'self'; style-src https://rsms.me/ https://fonts.googleapis.com https://github.githubassets.com/ 'unsafe-inline' 'self'; font-src https://rsms.me/ https://fonts.gstatic.com; manifest-src 'self';  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com; worker-src 'self';"
        />
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-90M94T4S8S"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "G-90M94T4S8S");
        </script>
    {/if}
</svelte:head>
<slot />
