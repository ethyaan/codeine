"use client";
import Markdown from "markdown-to-jsx";
import { useAppSelector } from "@/redux/hooks";
import { PostType } from "@/common/types/post";
import { Sharing } from "@/components/sharing";

export default function Home() {
  const posts: PostType[] = useAppSelector((state) => state.posts);

  return (
    <>
      <article className="xl:w-[52rem] lg:w-[52rem] md-w-auto w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:pr-4">
        {posts &&
          posts.length > 0 &&
          posts.map(
            ({ title, author, authorURL, date, excerpt, url }, index) => {
              return (
                <div
                  className="w-full pb-8 mb-16 border-b border-dashed border-emerald-700"
                  key={`post-${index}`}
                >
                  <a href={url} className="text-green-500 hover:underline">
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-green-500">
                      {title}
                    </h1>
                  </a>
                  <div className="flex sm:flex-row flex-col justify-between xl:items-center mb-2 pb-2 border-b border-solid border-emerald-500">
                    <div className="flex justify-center items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 xl:mb-0">
                      <span>
                        By{" "}
                        <a
                          href={authorURL}
                          target="_blank"
                          className="text-gray-900 dark:text-white hover:underline no-underline font-semibold"
                        >
                          {author}
                        </a>
                      </span>
                      <span className="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full"></span>
                      <span>
                        <time className="font-normal text-gray-500 dark:text-gray-400">
                          {date}
                        </time>
                      </span>
                    </div>
                    <div
                      className="flex justify-center"
                      aria-label="Share social media"
                    >
                      <div className="not-format">
                        <Sharing postURL={url} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Markdown>{excerpt}</Markdown>
                  </div>
                  <div>
                    <a href={url}>Read More...</a>
                  </div>
                </div>
              );
            }
          )}
      </article>
    </>
  );
}
