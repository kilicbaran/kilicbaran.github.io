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
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const rss_posts = posts.map(({ metadata, slug }) => {
        return `<item>
        <title>${metadata.title}</title>
        <description>${metadata.summary}</description>
        <pubDate>${new Date(metadata.date).toUTCString()}</pubDate>
        <link>https://kilicbaran.github.io/blog/${slug}</link>
        <guid>https://kilicbaran.github.io/blog/${slug}</guid>
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