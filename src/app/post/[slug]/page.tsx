import Markdown from "markdown-to-jsx";
import { getPost } from "@/utils/post";
import ClientPost from "./clientPost";
import { PostType } from "@/common/types/post";

export default function Post(props: any) {
  const slug = props.params.slug;
  const post: PostType = getPost(slug);

  return (
    <ClientPost post={post}>
      <article className="xl:w-[52rem] lg:w-[52rem] md-w-auto w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:pr-4">
        <div className="w-full">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </ClientPost>
  );
}
