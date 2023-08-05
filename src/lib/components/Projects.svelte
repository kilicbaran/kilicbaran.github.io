<script>
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';

	const BOUN_COURSE_PLANNER = 'boun-course-planner';
	const HONEYBADGERS = 'honeybadgers';
	const TWITTER_JOB_SEARCH = 'twitter-job-search';
	let project = 'boun-course-planner';
</script>

<section class="mb-20 p-4">
	<h2 class="mx-auto max-w-3xl text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
	<div
		class="mx-auto max-w-5xl flex md:justify-center items-center -space-x-12 overflow-y-auto h-[22rem]"
	>
		<label
			class="block shrink-0 z-30 hover:z-50 hover:-translate-y-1 duration-300 transform-gpu {project ===
			BOUN_COURSE_PLANNER
				? 'z-40'
				: ''}"
		>
			<input
				type="radio"
				bind:group={project}
				name="project"
				value={BOUN_COURSE_PLANNER}
				class="radio-hide"
			/>
			<img
				class="shadow-lg ring-1 ring-slate-50 rounded-brand object-cover object-left-top transition-[width,height] duration-300 ease-linear will-change-[width,height] transform-gpu {project ===
				BOUN_COURSE_PLANNER
					? 'mask-md'
					: 'mask-sm'}"
				src="/images/boun-course-planner.jpg"
				alt="Boun Course Planner website screenshot"
				height="640"
				width="640"
				on:mouseover={() => (project = BOUN_COURSE_PLANNER)}
				on:focus={() => (project = BOUN_COURSE_PLANNER)}
			/>
		</label>
		<label
			class="block shrink-0 z-20 hover:z-50 hover:-translate-y-1 duration-300 transform-gpu {project ===
			HONEYBADGERS
				? 'z-40'
				: ''}"
		>
			<input
				type="radio"
				bind:group={project}
				name="project"
				value={HONEYBADGERS}
				class="radio-hide"
			/>
			<img
				class="shadow-lg ring-1 ring-slate-50 rounded-brand object-cover object-left-top transition-[width,height] duration-300 ease-linear will-change-[width,height] transform-gpu {project ===
				HONEYBADGERS
					? 'mask-md'
					: 'mask-sm'}"
				src="/images/honeybadgers.jpg"
				alt="HoneyBadgers website screenshot"
				height="640"
				width="640"
				on:mouseover={() => (project = HONEYBADGERS)}
				on:focus={() => (project = HONEYBADGERS)}
			/>
		</label>
		<label
			class="block shrink-0 z-10 hover:z-50 hover:-translate-y-1 duration-300 transform-gpu {project ===
			TWITTER_JOB_SEARCH
				? 'z-40'
				: ''}"
		>
			<input
				type="radio"
				bind:group={project}
				name="project"
				value={TWITTER_JOB_SEARCH}
				class="radio-hide"
			/>
			<img
				class="shadow-lg ring-1 ring-slate-50 rounded-brand object-cover object-left-top transition-[width,height] duration-300 ease-linear will-change-[width,height] transform-gpu {project ===
				TWITTER_JOB_SEARCH
					? 'mask-md'
					: 'mask-sm'}"
				src="/images/twitter-job-search.jpg"
				alt="my twitter job search website screenshot"
				height="640"
				width="640"
				on:mouseover={() => (project = TWITTER_JOB_SEARCH)}
				on:focus={() => (project = TWITTER_JOB_SEARCH)}
			/>
		</label>
		<!-- TODO implement /projects page -->
		<!-- <a
			href="/projects"
			class="hover:z-50 hover:-translate-y-1 duration-300 transform-gpu rounded-brand shrink-0 font-medium text-xl text-[#850D0D]"
		>
			<div
				class="rounded-brand bg-[#ffeded] ring-1 ring-[#850D0D]/50 h-52 w-52 flex justify-center items-center"
			>
				Show more...
			</div>
		</a> -->
	</div>

	<div class="mx-auto max-w-3xl mt-4">
		<div class={project === BOUN_COURSE_PLANNER ? 'block' : 'hidden'}>
			<div class="font-medium text-lg text-indigo-600">Course schedule planner</div>
			<div class="text-2xl font-semibold mb-1">
				<a class="flex items-center" href="https://kilicbaran.github.io/boun-course-planner/"
					><span class="mr-3">Boun Course Planner</span><ArrowTopRightOnSquare /></a
				>
			</div>
			<p class="text-gray-800">
				A tool for Boğaziçi University used by thousands of students each semester. Although I like
				the old-school course schedule tables in the registration website, it is hard to create a
				schedule with it. So, I created this tool to make the course planning process seamless.
			</p>
		</div>

		<div class={project === HONEYBADGERS ? 'block' : 'hidden'}>
			<div class="font-medium text-lg text-indigo-600">Freelancer platform</div>
			<div class="text-2xl font-semibold mb-1">
				<a class="flex items-center" href="https://github.com/bounswe/bounswe2018group10"
					><span class="mr-3">HoneyBadgers</span><ArrowTopRightOnSquare /></a
				>
			</div>
			<p class="text-gray-800">
				A platform for freelancers and clients to do business. The frontend of this university
				project is designed and coded by me.
			</p>
		</div>

		<div class={project === TWITTER_JOB_SEARCH ? 'block' : 'hidden'}>
			<div class="font-medium text-lg text-indigo-600">Job Listing</div>
			<div class="text-2xl font-semibold mb-1">
				<a class="flex items-center" href="https://github.com/kilicbaran/twitter-job-search"
					><span class="mr-3">Find Me A Job Twitter!</span><ArrowTopRightOnSquare /></a
				>
			</div>
			<p class="text-gray-800">
				A web app that shows you job posting tweets about a particular skill/job.
			</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.rounded-brand {
		@apply rounded-[30%];
	}

	.mask-md {
		@apply h-60 w-60 sm:h-80 sm:w-80;
	}

	.mask-sm {
		@apply h-40 w-40 sm:h-64 sm:w-64;
	}

	.radio-hide {
		@apply invisible w-0 absolute;
	}
</style>
