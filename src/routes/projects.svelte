<script context="module">
  export async function load({ page }) {
    return {
      props: {
        path: page.path,
      },
    };
  }
</script>

<script>
  import Layout from "$lib/components/Layout.svelte";
  import HomeTitle from "$lib/components/HomeTitle.svelte";
  export let path;
</script>

<svelte:head>
  <title>Projects - Baran Kılıç</title>
  <meta
    name="description"
    content="Baran Kılıç' projects, such as Boun Course Planner."
  />
</svelte:head>

<Layout {path} extraClasses="bg-blueGray-100 dark:bg-black">
  <div class="p-2">
    <HomeTitle>Projects</HomeTitle>
    <section
      id="boun-course-planner"
      class="max-w-screen-lg mx-auto bg-white dark:bg-gray-800  rounded-2xl mt-4 md:mt-8 overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 md:h-96"
    >
      <div
        class="p-4 lg:p-8 flex flex-col justify-center order-last md:order-first space-y-3"
      >
        <h3 class="text-2xl font-bold text-center md:text-left">
          Boun Course Planner
        </h3>
        <p class="font-semibold text-indigo-500">
          A course schedule planning tool for Boğaziçi University used by
          several thousands of students each year.
        </p>
        <p class="text-gray-800 dark:text-gray-200">
          Although I like the old-school course schedule tables in the
          registration website, it is hard to create a schedule with it. So, I
          created this tool to make the course planning process seamless.
        </p>
        <div class="text-center md:text-left">
          <a
            class="inline-block px-3 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded"
            href="https://kilicbaran.github.io/boun-course-planner"
            target="_blank"
            rel="noopener noreferrer">Visit website</a
          >
        </div>
      </div>

      <img
        class="w-full h-60 md:h-full object-cover object-left-top"
        src="/images/boun-course-planner.webp"
        alt="Boun Course Planner website screenshot"
        width="2286"
        height="1312"
        loading="lazy"
      />
    </section>
  </div>
</Layout>
