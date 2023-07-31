"use client";
import Markdown from "markdown-to-jsx";
import ButtonIcon from "@/components/ButtonIcon";
import { useAppSelector } from "@/redux/hooks";
import { PostType } from "@/common/types/post";

export default function Home() {
  const posts: PostType[] = useAppSelector((state) => state.posts);

  return (
    <>
      <article className="xl:w-[52rem] lg:w-[52rem] md-w-auto w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:pr-4">
        {posts &&
          posts.length > 0 &&
          posts.map(
            ({ title, author, authorURL, date, excerpt, slug }, index) => {
              return (
                <div
                  className="w-full pb-8 mb-16 border-b border-dashed border-emerald-700"
                  key={`post-${index}`}
                >
                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {title}
                  </h1>
                  <div className="flex flex-col xl:flex-row justify-between xl:items-center mb-2 pb-2 border-b border-solid border-emerald-500">
                    <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 xl:mb-0">
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
                    <aside aria-label="Share social media">
                      <div className="not-format">
                        <ButtonIcon
                          icon="facebook"
                          tooltip="Share on Facebook"
                        />
                        <ButtonIcon icon="twitter" tooltip="Share on Twitter" />
                        <ButtonIcon icon="reddit" tooltip="Post on Reddit" />
                        <ButtonIcon icon="link" tooltip="Copy URL" />
                      </div>
                    </aside>
                  </div>
                  <div>
                    <Markdown>{excerpt}</Markdown>
                  </div>
                  <div>
                    <a className="" href={`/post/${slug}`}>
                      Read More...
                    </a>
                  </div>
                </div>
              );
            }
          )}
      </article>
    </>
  );
}
