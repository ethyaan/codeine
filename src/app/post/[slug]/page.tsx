import { getPost } from "@/utils/post";
import ClientPost from "./clientPost";
import { PostType } from "@/common/types/post";

export default function Post(props: any) {
  const slug = props.params.slug;
  const post: PostType = getPost(slug);

  return <ClientPost post={post}>Hello</ClientPost>;
}
