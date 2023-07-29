"use client";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { PostType } from "@/common/types/post";

export default function Header() {
  const pathname = usePathname();
  const isPost = pathname.includes("/post/");
  const post: PostType = useAppSelector((state) => state.post);

  return (
    <header className="bg-[url('https://source.unsplash.com/random/?code,software,computer,javascript,programming,server,devops')] w-full h-[29rem] xl:h-[33rem] bg-no-repeat bg-cover bg-[50%] bg-blend-darken relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      {isPost && !!post.author && (
        <div className="absolute top-20 left-2/4 px-4 mx-auto w-full max-w-screen-xl -translate-x-2/4 xl:top-2/4 xl:-translate-y-2/4 xl:px-0">
          <span className="block mb-2 text-gray-300">
            Published by{" "}
            <a
              href={post.authorURL}
              className="font-semibold text-white underline"
            >
              {post.author}
            </a>
          </span>
          <h1 className="mb-2 max-w-4xl text-2xl font-extrabold leading-4 text-white sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <p className="text-xl font-normal text-gray-300">{post.context}</p>
        </div>
      )}
    </header>
  );
}
