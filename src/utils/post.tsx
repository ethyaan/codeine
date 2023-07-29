import fs from "fs";
import matter from "gray-matter";
import { PostType } from "@/common/types/post";

const folder = "posts/";

const extractAndFormatPost = (fileContents: any, slug: string) => {
  const {
    data: { title, date, context, author, authorURL },
    content,
  } = matter(fileContents);

  let excerpt = extractExcerpt(content);

  return {
    author,
    authorURL,
    title,
    date,
    context,
    slug,
    content,
    excerpt,
  };
};

/**
 * extract excerpt from content
 * @param content
 * @returns
 */
const extractExcerpt = (content: string): string => {
  let excerpt = "";
  let paragraphs = [];
  if (content.includes("--excerpt--")) {
    excerpt = content.split("--excerpt--")[0];
    paragraphs = excerpt.split("\n").filter((e) => e !== "");
  } else {
    paragraphs = content
      .split("\n")
      .filter((e) => e !== "")
      .slice(0, 3);
  }
  paragraphs[0] = `<div className="lead">${paragraphs[0]}</div>`;
  return paragraphs.join("<br />").replace("<br />", "");
};

const getPosts = (count: number = 10): PostType[] => {
  const files = fs.readdirSync(folder);
  const markdownPosts = files
    .filter((file) => file.endsWith(".md"))
    .slice(0, count);

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    return extractAndFormatPost(fileContents, fileName.replace(".md", ""));
  });

  return posts;
};

export default getPosts;

export const getPost = (slug: string) => {
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return extractAndFormatPost(content, slug);
};
