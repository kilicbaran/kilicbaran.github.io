<script context="module">
    import { base } from "$app/paths";

    export async function load({ fetch }) {
        const slug = "my-knex-models";

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
        One of my most favorite toys was <a
            href="http://www.knex.co.uk/"
            target="_blank"
            rel="noopener noreferrer">K'NEX</a
        > when I was a kid. K'NEX is a Lego-like toy, but instead of putting the
        pieces on top of others, you can connect the pieces of K'NEX in many different
        directions. It's also reusable. You can assemble and disassemble many different
        models. In my opinion, K'NEX is an underrated toy despite being superior.
    </p>

    <p>
        I want to share two K'NEX models designed by me in this blog post. One
        is a Formula 1 car model, and the other is an off-road car model.
    </p>

    <figure>
        <picture>
            <img
                class="mx-auto max-w-full sm:max-w-screen-sm"
                src="/images/knex-f1.webp"
                alt="my knex formula 1 car model"
                loading="lazy"
            />
        </picture>
        <figcaption>
            My K'NEX Formula 1 car model. Photograph: Baran Kılıç 2008
        </figcaption>
    </figure>

    <p>
        Istanbul Park, which is Turkey's longest race track, is opened in 2005.
        Around that time, I was interested in Formula 1 and watched the races on
        TV. Later, I had to prepare for high school entrance exam and lost
        interest in Formula 1. The shape and aerodynamics of Formula 1 cars have
        always amazed me. I wanted to create a Formula 1 car model with K'NEX,
        which resulted in the model above.
    </p>

    <p>
        My second model is also a car. My favorite feature of this vehicle is
        that you can steer its wheels. Since the car wheel spins, you can play
        with it just like a regular toy.
    </p>

    <figure>
        <picture>
            <img
                class="mx-auto max-w-full sm:max-w-screen-sm"
                src="/images/knex-off-road.webp"
                alt="my knex off-road car model"
                loading="lazy"
            />
        </picture>
        <figcaption>
            My K'NEX off-road car model. Photograph: Baran Kılıç
        </figcaption>
    </figure>
</BlogLayout>
