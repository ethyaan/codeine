"use client";
import ButtonIcon from "@/components/ButtonIcon";
import { useAppSelector } from "@/redux/hooks";
import { PostType } from "@/common/interface/post";

export default function Home() {
  const posts: PostType[] = useAppSelector((state) => state.posts);

  console.log("page =>", posts);
  return (
    <>
      <article className="xl:w-[52rem] lg:w-[52rem] md-w-auto w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:pr-4">
        {posts &&
          posts.length > 0 &&
          posts.map(({ title, date }, index) => {
            return (
              <div className="w-full" key={`post-${index}`}>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {title}
                </h1>
                <div className="flex flex-col xl:flex-row justify-between xl:items-center mb-2 pb-2 border-b border-solid border-emerald-500">
                  <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 xl:mb-0">
                    <span>
                      By{" "}
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:underline no-underline font-semibold"
                      >
                        Jese Leos
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
                      <ButtonIcon icon="facebook" tooltip="Share on Facebook" />
                      <ButtonIcon icon="twitter" tooltip="Share on Twitter" />
                      <ButtonIcon icon="reddit" tooltip="Post on Reddit" />
                      <ButtonIcon icon="link" tooltip="Copy URL" />
                    </div>
                  </aside>
                </div>
                <p className="lead">
                  Flowbite is an open-source library of UI components built with
                  the utility-first classes from Tailwind CSS. It also includes
                  interactive elements such as dropdowns, modals, datepickers.
                </p>
                <p>
                  Before going digital, you might benefit from scribbling down
                  some ideas in a sketchbook. This way, you can think things
                  through before committing to an actual design project.
                </p>
                <p>
                  But then I found a{" "}
                  <a href="https://flowbite.com">
                    component library based on Tailwind CSS called Flowbite
                  </a>
                  . It comes with the most commonly used UI components, such as
                  buttons, navigation bars, cards, form elements, and more which
                  are conveniently built with the utility classes from Tailwind
                  CSS.
                </p>
              </div>
            );
          })}
      </article>
    </>
  );
}
