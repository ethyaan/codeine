import { getPost } from "@/utils/post";

export default function Post(props: any) {
  const slug = props.params.slug;
  const post = getPost(slug);
  return <>Hello</>;
}
