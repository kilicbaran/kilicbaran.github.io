import fs from 'fs';

export async function get({ params }) {
    const { slug } = params;

    const metadata = JSON.parse(fs.readFileSync(`src/posts/${slug}.json`, 'utf8'));
    const post = fs.readFileSync(`src/posts/${slug}.svelte`, 'utf8');
    const body = JSON.stringify({ metadata, post });

    return {
        headers: {
            'content-type': 'application/json'
        },
        body
    }
}