import Markdown from "markdown-to-jsx";
import { getPost } from "@/utils/post";
import ClientPost from "./clientPost";
import { PostType } from "@/common/types/post";
import { Sharing } from "@/components/sharing";

export default function Post(props: any) {
  const slug = props.params.slug;
  const post: PostType = getPost(slug);
  const postURL = `https://codeine.blog/post/${slug}`;

  return (
    <ClientPost post={post}>
      <article className="xl:w-[52rem] lg:w-[52rem] md-w-auto w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:pr-4">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row justify-between xl:items-center mb-2 pb-2 border-b border-solid border-emerald-500">
            <div className="flex space-x-3 mb-2 xl:mb-0"></div>
            <aside aria-label="Share social media">
              <div className="not-format">
                <Sharing postURL={postURL} />
              </div>
            </aside>
          </div>

          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </ClientPost>
  );
}
