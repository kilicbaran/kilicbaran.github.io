import fs from 'fs';

export async function get() {
    const extension = ".json";
    let posts = fs.readdirSync('src/posts')
        .filter(fileName => fileName.endsWith(extension))
        .map(fileName => {
            const file = fs.readFileSync(`src/posts/${fileName}`, 'utf8');
            const metadata = JSON.parse(file);
            
            return {
                metadata,
                slug: fileName.slice(0, -extension.length)
            };
        });
    posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

    const body = JSON.stringify(posts);

    return {
        headers: {
            'content-type': 'application/json'
        },
        body
    };
}