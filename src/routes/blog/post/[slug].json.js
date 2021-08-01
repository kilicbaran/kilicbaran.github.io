import fs from 'fs';

export async function get({ params }) {
    const { slug } = params;

    const metadata = JSON.parse(fs.readFileSync(`src/routes/blog/post/${slug}.json`, 'utf8'));
    const body = JSON.stringify({ metadata });

    return {
        headers: {
            'content-type': 'application/json'
        },
        body
    }
}