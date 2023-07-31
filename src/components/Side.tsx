"use client";
import { useAppSelector } from "@/redux/hooks";
import { PostType } from "@/common/types/post";
import Image from "next/image";
import { shallowEqual } from "react-redux";

export default function Side() {
  const posts: PostType[] = useAppSelector((state) => state.posts.slice(0, 3), {
    equalityFn: shallowEqual,
  });
  return (
    <aside aria-labelledby="sidebar-label">
      <div className="xl:w-[21rem] max-w-xs sticky top-16">
        <h3 id="sidebar-label" className="sr-only">
          Sidebar
        </h3>
        <div className="mb-8 border-b border-solid border-emerald-500">
          <h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase">
            Why?
          </h4>
          <p className="mb-4 text-sm font-light	 text-green-800 dark:text-green-600">
            Knowledge sharing is the currency of growth, and teamwork is the
            engine that drives it. When we come together, sharing our expertise
            and supporting one another, we pave the way for innovation and
            success.
          </p>
        </div>
        <div className="mb-12">
          <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">
            Latest Posts
          </h4>
          {posts &&
            posts.length > 0 &&
            posts.map(({ title, context, slug, image }, index) => {
              return (
                <div
                  className="mb-6 flex items-center"
                  key={`side-post-${index}`}
                >
                  <a href={`post/${slug}`} className="shrink-0">
                    <Image
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                      className="mr-4 max-w-full w-[6rem] h-[6rem] rounded-lg"
                      alt="Image 1"
                      width={0}
                      height={0}
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg	font-bold leading-5 dark:text-white text-gray-900">
                      {title}
                    </h5>
                    <p className="mb-2 font-light	text-sm	 text-gray-500 dark:text-gray-400">
                      {context}
                    </p>
                    <a
                      href={`post/${slug}`}
                      className="inline-flex items-center font-medium underline"
                    >
                      Continue to read
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
        {/* <div>
          <a
            href="#"
            className="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-700"
          >
            <Link />
          </a>
          <p className="mb-2 text-sm font-light	 text-gray-500 dark:text-gray-400">
            Some Text
          </p>
        </div> */}
      </div>
    </aside>
  );
}
