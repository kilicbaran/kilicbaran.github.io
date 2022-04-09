<script>
  import "../app.css";
  import { dev } from "$app/env";
</script>

<svelte:head>
  {#if !dev}
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
