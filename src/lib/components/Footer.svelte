<script>
    import { menuItems } from "$lib/menuItems";
</script>

<footer class="flex-none py-1 bg-gray-800  text-sm tracking-inter">
    <div
        class="mx-auto max-w-screen-lg py-2 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
        <div class="col-span-1 md:col-span-2 text-center lg:text-left">
            <a href="/" class="font-semibold text-gray-300 mr-4 mb-1 hover:underline"
                >BARAN KILIÇ</a
            >
            {#each menuItems as { href, name }}
                <a
                    {href}
                    class="mr-4 mb-1 text-gray-400 hover:text-gray-200 hover:underline"
                    >{name}</a
                >
            {/each}
        </div>

        <div class="col-span-1 text-center">
            <a
                class="mr-4 text-gray-400 hover:text-gray-200 hover:underline"
                href="https://github.com/kilicbaran"
                target="_blank"
                rel="noopener noreferrer">Github</a
            >
            <a
                class="text-gray-400 hover:text-gray-200 hover:underline"
                href="https://scholar.google.com/citations?user=m3e8FOQAAAAJ&hl=en&oi=sra"
                target="_blank"
                rel="noopener noreferrer">Scholar</a
            >
        </div>
        <div class="col-span-1 text-center">
            <span class="text-gray-400"
                >Copyright © 2021-{new Date().getFullYear()} Baran Kılıç</span
            >
        </div>
    </div>
</footer>
