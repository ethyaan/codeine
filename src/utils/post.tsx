import fs from "fs";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

const getPosts = (count: number = 10): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files
    .filter((file) => file.endsWith(".md"))
    .slice(0, count);

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPosts;
