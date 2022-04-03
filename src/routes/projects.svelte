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
    content="Baran Kılıç's projects, such as Boun Course Planner."
  />
</svelte:head>

<Layout {path} extraClasses="bg-slate-100 dark:bg-black">
  <div class="p-4 pb-8 tracking-inter subpixel-antialiased">
    <HomeTitle>Projects</HomeTitle>
    <h2
      class="max-w-screen-md mx-auto mt-4 sm:mt-6 md:mt-8 text-3xl tracking-inter text-left"
    >
      My Projects
    </h2>
    <section
      id="boun-course-planner"
      class="max-w-screen-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl mt-4 mb-4 overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 md:h-96"
    >
      <div
        class="p-4 lg:p-8 flex flex-col justify-center order-last md:order-first space-y-3"
      >
        <p class="font-medium text-indigo-500">Course schedule planner</p>
        <h3 class="text-2xl font-semibold text-left">Boun Course Planner</h3>
        <p class="text-gray-800 dark:text-gray-200">
          A tool for Boğaziçi University used by thousands of students each
          semester. Although I like the old-school course schedule tables in the
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

    <div
      class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto"
    >
      <section
        id="honeybadgers"
        class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          class="w-full h-60 object-cover object-left-top"
          src="/images/honeybadgers.webp"
          alt="HoneyBadgers website screenshot"
          width="2560"
          height="1480"
          loading="lazy"
        />

        <div class="p-4 md:p-6 flex flex-col space-y-3">
          <p class="font-medium text-orange-500">Freelancer platform</p>
          <h3 class="text-2xl font-semibold text-left">HoneyBadgers</h3>

          <p class="text-gray-800 dark:text-gray-200">
            A platform for freelancers and clients to do business. The frontend
            of this university project is designed and coded by me.
          </p>
          <p class="text-gray-500 dark:text-gray-200 text-xs">
            Note: This website uses Heroku, so it takes several seconds to
            launch the website and its database isn't persistent. You can create
            a dummy user to login.
          </p>
          <div class="text-center md:text-left">
            <a
              class="inline-block px-3 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded"
              href="https://honeybadgers-frontend-test.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer">Visit website</a
            >
            <a
              class="inline-block px-3 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded"
              href="https://github.com/bounswe/bounswe2018group10"
              target="_blank"
              rel="noopener noreferrer">Source code</a
            >
          </div>
        </div>
      </section>

      <section
        id="twitter-job-search"
        class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          class="w-full h-60 object-cover object-center"
          src="/images/twitter-job-search.webp"
          alt="my twitter job search website screenshot"
          width="2560"
          height="1480"
          loading="lazy"
        />

        <div class="p-4 md:p-6 flex flex-col space-y-3">
          <p class="font-medium text-green-500">Job Listing</p>
          <h3 class="text-2xl font-semibold text-left">Twitter Job Search</h3>

          <p class="text-gray-800 dark:text-gray-200">
            A web app that shows you job posting tweets about a particular
            skill/job.
          </p>
          <p class="text-gray-500 dark:text-gray-200 text-xs">
            Note: This website uses Heroku, so it takes several seconds to
            launch the website and its database isn't persistent. You can create
            a dummy user to login.
          </p>
          <div class="text-center md:text-left">
            <a
              class="inline-block px-3 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded"
              href="https://findmeajobtwitter.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer">Visit website</a
            >
            <a
              class="inline-block px-3 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded"
              href="https://github.com/kilicbaran/twitter-job-search"
              target="_blank"
              rel="noopener noreferrer">Source code</a
            >
          </div>
        </div>
      </section>
    </div>

    <h2 class="max-w-screen-md mx-auto mt-16 text-3xl tracking-inter text-left">
      Contributions to Other Projects
    </h2>
    <section
      class="max-w-screen-md mx-auto bg-white dark:bg-gray-800 rounded-2xl mt-4 mb-4 shadow-xl p-4 lg:p-8 "
    >
      <h3>Pull Requests</h3>
      <p>
        <a
          class="text-blue-600 hover:underline visited:text-purple-600"
          href="https://github.com/hyperledger/fabric-samples/pull/463"
          target="_blank"
          rel="noopener noreferrer">ERC-1155 Chaincode</a
        >
        •
        <a
          class="text-blue-600 hover:underline visited:text-purple-600"
          href="https://github.com/hyperledger/fabric-samples/pull/424"
          target="_blank"
          rel="noopener noreferrer">Bugfix for ERC-20 Chaincode</a
        >
      </p>

      <h3 class="mt-4">Issues</h3>
      <p>
        <a
          class="text-blue-600 hover:underline visited:text-purple-600"
          href="https://github.com/hyperledger-labs/minifabric/issues/163"
          target="_blank"
          rel="noopener noreferrer">Minifab restart bug</a
        >
        •
        <a
          class="text-blue-600 hover:underline visited:text-purple-600"
          href="https://github.com/ConsenSys/abi-decoder/issues/56"
          target="_blank"
          rel="noopener noreferrer">Abi-decoder error</a
        >
        •
        <a
          class="text-blue-600 hover:underline visited:text-purple-600"
          href="https://youtrack.jetbrains.com/issue/CPP-25293"
          target="_blank"
          rel="noopener noreferrer">Clion inspection bug</a
        >
      </p>
    </section>
  </div>
</Layout>
