import fs from 'fs';

export async function get() {
    const extension = ".json";
    let posts = fs.readdirSync('src/routes/blog/post')
        .filter(fileName => fileName.endsWith(extension))
        .map(fileName => {
            const file = fs.readFileSync(`src/routes/blog/post/${fileName}`, 'utf8');
            const metadata = JSON.parse(file);

            return {
                metadata,
                slug: fileName.slice(0, -extension.length) + "/"
            };
        });

    // Sort by date
    posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

    const num_of_posts = 10;
    const last_posts = posts.slice(0, num_of_posts);

    const rss_posts = last_posts.map(({ metadata, slug }) => {
        return `<item>
        <title>${metadata.title}</title>
        <description>${metadata.summary}</description>
        <pubDate>${new Date(metadata.date).toUTCString()}</pubDate>
        <link>https://kilicbaran.github.io/blog/post/${slug}</link>
        <guid>https://kilicbaran.github.io/blog/post/${slug}</guid>
    </item>`;
    });

    const body = `<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Baran Kılıç's Blog</title>
    <link>https://kilicbaran.github.io/blog</link>
    <description>My notes, interests, achievements, future, and past</description>
    <language>en-us</language>
    <copyright>Copyright 2021-${new Date().getFullYear()} Baran Kılıç</copyright>
    <managingEditor>baran.kilic@boun.edu.tr (Baran Kılıç)</managingEditor>
    <webMaster>baran.kilic@boun.edu.tr (Baran Kılıç)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://kilicbaran.github.io/blog/feed.xml" rel="self" type="application/rss+xml" />
    ${rss_posts.join("\n")}
  </channel>
</rss>`;

    return {
        body
    };
}