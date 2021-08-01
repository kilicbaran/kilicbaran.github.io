<script context="module">
    import { base } from "$app/paths";

    export async function load({ fetch }) {
        const slug = "dev-of-project-with-1m-annual-revenue-doesnt-use-git";

        const { metadata } = await fetch(`${base}/blog/post/${slug}.json`).then(
            (r) => r.json()
        );

        return {
            props: { metadata },
        };
    }
</script>

<script>
    import BlogLayout from "$lib/components/BlogLayout.svelte";

    export let metadata;
</script>

<BlogLayout {metadata}>
    <p>
        Recently, I had to edit some image files and found a website called
        Photopea. It is an image editor with a Photoshop-like user interface.
        What amazed me is the fact that this website opened very fast. It has
        been years since I last used Photoshop, so I do not know how fast it
        launches nowadays. However, the last time I used it, it took a very long
        time to open. Photopea makes it easy to edit a file quickly if you are
        in a rush.
    </p>

    <p>
        Later, I stumbled upon the <a
            href="https://news.ycombinator.com/item?id=26769141"
            target="_blank"
            rel="noopener noreferrer">news</a
        >
        that the developer, Ivan Kutskir, earned one million dollars in the last
        12 months. I think this is a great achievement considering this is a one-person
        project. I was curious about which technologies it used and did some research.
        The UI buttons around the image are DOM elements, and the image in the center
        is an HTML5 Canvas. I wanted to know whether he used any Javascript framework.
        <a
            href="https://www.reddit.com/r/photopea/comments/ertviz/developer_questions_for_ivan_kutskir_creator_of/"
            target="_blank"
            rel="noopener noreferrer"
        >
            In this Reddit comment,</a
        > he says that he creates the HTML elements using only Javascript. It looks
        like that he just wrote it in pure Javascript.
    </p>

    <p>
        One thing that attracted my attention in the same comment is that he
        doesn't use Git or any version control. I am not here to criticize
        anybody. Although it is pretty easy to use Git, he is free to use any
        tool he wants or not, whatever floats his boat. However, something
        crossed my mind when I first read it. Would one recruiter hire someone
        for any programming-related job if they said they don't use Git? I don't
        think so. Yet, this man creates a Photoshop clone single-handedly and
        earns one million dollars. It seems like silly job requirements are not
        the prerequisite for a successful project. I congratulate him for
        creating Photopea.
    </p>

    <p>
        P.S. Note that I do not claim that anyone who doesn't use Git can create
        such a project. By silly job requirement, I do not mean Git. Git is
        pretty standard software nowadays. I only mentioned Git as a means of
        conveying my idea.
    </p>

    <figure>
        <picture>
            <img
                class="mx-auto max-w-full sm:max-w-screen-sm"
                src="/images/silly-job-requirements.png"
                alt="Twitter post about the developer of a library being underqualified to apply for a job about his library"
                loading="lazy"
            />
        </picture>
        <figcaption>
            An example of a silly job requirement
            <a
                class="break-all"
                href="https://twitter.com/tiangolo/status/1281946592459853830"
                target="_blank"
                rel="noopener noreferrer"
                >https://twitter.com/tiangolo/status/1281946592459853830
            </a>
        </figcaption>
    </figure>
</BlogLayout>
