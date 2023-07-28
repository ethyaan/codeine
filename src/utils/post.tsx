import fs from "fs";
import matter from "gray-matter";
import { PostType } from "@/common/interface/post";

const getPosts = (count: number = 10): PostType[] => {
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
      context: (length: number) => {
        return ``;
      },
    };
  });

  return posts;
};

export default getPosts;
