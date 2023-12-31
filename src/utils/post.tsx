import fs from "fs";
import matter from "gray-matter";
import { PostType } from "@/common/types/post";

const folder = "public/posts/";

const hostURL = process.env["NEXT_PUBLIC_HOSTURL"];
const imagesHostURL = process.env["NEXT_PUBLIC_IMAGE_HOSTURL"];

const extractAndFormatPost = (fileContents: any, slug: string): PostType => {
  const {
    data: { title, date, context, author, authorURL, image },
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
    url: `${hostURL}/post/${slug}`,
    content: content.replace("--excerpt--", ""),
    excerpt,
    image: `${imagesHostURL}${image}`,
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

const getSlug = (fileName: string): string => {
  return fileName.split("-").slice(1).join("-");
};

const getNumber = (fileName: string): number => {
  return parseInt(fileName.split("-")[0]);
};

const getPosts = (count: number = 10): PostType[] => {
  const files = fs.readdirSync(folder);
  const markdownPosts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      return {
        name: file,
        slug: getSlug(file).replace(".md", ""),
        number: getNumber(file),
      };
    })
    .sort((a: any, b: any) => b.number - a.number)
    .slice(0, count);

  // Get gray-matter data from each file.
  const posts = markdownPosts.map(({ name }) => {
    const fileContents = fs.readFileSync(
      `${process.cwd()}/${folder}${name}`,
      "utf8"
    );
    return extractAndFormatPost(fileContents, name.replace(".md", ""));
  });

  return posts;
};

export default getPosts;

/**
 * memozied getPost
 */
export const getPost = (() => {
  const posts: any = {};
  return (slug: string): PostType => {
    if (posts[slug]) {
      return posts[slug];
    } else {
      const file = `${process.cwd()}/${folder}${slug}.md`;
      const content = fs.readFileSync(file, "utf8");
      posts[slug] = extractAndFormatPost(content, slug);
      return posts[slug];
    }
  };
})();
