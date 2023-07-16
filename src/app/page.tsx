import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900">
        <nav
          id="header"
          className="fixed w-full z-30 top-0 bg-white/[0.6] dark:bg-black/[0.3] border-b border-solid border-emerald-700"
        >
          <div
            id="progress"
            className="h-1 z-40 top-0"
            style={{
              background:
                "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
            }}
          ></div>

          <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between mt-0 pb-1.5 pt-0.5">
            <div className="pl-4">
              <a
                className="text-gray-800 dark:text-gray-300 no-underline hover:no-underline font-extrabold text-xl"
                href="#"
              >
                Codeine
              </a>
            </div>

            <div className="flex-grow flex lg:items-center lg:w-auto mt-0 z-20 justify-end">
              <button
                id="theme-toggle"
                type="button"
                className="text-gray-600 dark:text-gray-300 hover:text-green-500 hover:dark:text-green-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2 w-9 h-9"
              >
                <svg
                  id="theme-toggle-dark-icon"
                  className="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <header className="bg-[url('https://source.unsplash.com/random/?code,software,developer,javascript,programmer')] w-full h-[29rem] xl:h-[33rem] bg-no-repeat bg-cover bg-[50%] bg-blend-darken relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="absolute top-20 left-2/4 px-4 mx-auto w-full max-w-screen-xl -translate-x-2/4 xl:top-2/4 xl:-translate-y-2/4 xl:px-0">
            <span className="block mb-2 text-gray-300">
              Published in{" "}
              <a href="#" className="font-semibold text-white underline">
                World News
              </a>
            </span>
            <h1 className="mb-2 max-w-4xl text-2xl font-extrabold leading-4 text-white sm:text-3xl lg:text-4xl">
              Flowbite Blocks Tutorial - Learn how to get started with custom
              sections using the Flowbite Blocks
            </h1>
            <p className="text-xl font-normal text-gray-300">
              Before going digital, you might scribbling down some ideas in a
              sketchbook.
            </p>
          </div>
        </header>
        <div className="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-7xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
          <article className="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Best practices for successful prototypes
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
                  <time
                    className="font-normal text-gray-500 dark:text-gray-400"
                    pubdate="true"
                    dateTime="2022-03-08"
                    title="August 3rd, 2022"
                  >
                    August 3, 2022, 2:20am EDT
                  </time>
                </span>
              </div>
              <aside aria-label="Share social media">
                <div className="not-format">
                  <button
                    data-tooltip-target="tooltip-facebook"
                    className="inline-flex items-center p-2 mx-0.5 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_13676_82298)">
                        <path d="M18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.4921 3.29115 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93742 3.51562 10.9932 3.51562C11.9776 3.51562 13.0078 3.69141 13.0078 3.69141V5.90625H11.873C10.755 5.90625 10.4062 6.60006 10.4062 7.3125V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4921 18 9Z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_13676_82298">
                          <rect width="18" height="18" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    id="tooltip-facebook"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium	 text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity	 duration-300 tooltip dark:bg-gray-700"
                  >
                    Share on Facebook
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-twitter"
                    className="inline-flex items-center p-2 mx-0.5 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100	 focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.66064 16.3131C12.4531 16.3131 16.1683 10.6856 16.1683 5.80539C16.1683 5.64555 16.1683 5.48643 16.1575 5.32803C16.8803 4.80525 17.5042 4.15794 18 3.41643C17.326 3.71523 16.611 3.9111 15.8789 3.99747C16.6499 3.53599 17.2269 2.81006 17.5025 1.95483C16.7776 2.38504 15.9845 2.6882 15.1574 2.85123C14.6006 2.25916 13.8642 1.86711 13.0621 1.73574C12.2601 1.60438 11.4371 1.74102 10.7205 2.12452C10.0039 2.50802 9.43367 3.11701 9.09806 3.85724C8.76245 4.59747 8.68016 5.42768 8.86392 6.21939C7.39567 6.14574 5.95932 5.76416 4.64809 5.09943C3.33686 4.4347 2.18007 3.50168 1.2528 2.36091C0.780546 3.17391 0.635904 4.13633 0.848325 5.05223C1.06075 5.96812 1.61426 6.76863 2.39616 7.29075C1.80842 7.27353 1.23349 7.11498 0.72 6.82851V6.87531C0.720233 7.72795 1.01539 8.55426 1.5554 9.21409C2.09542 9.87391 2.84705 10.3266 3.6828 10.4955C3.13911 10.6438 2.56866 10.6654 2.01528 10.5588C2.25136 11.2926 2.71082 11.9342 3.32943 12.394C3.94804 12.8539 4.69487 13.1089 5.46552 13.1235C4.69983 13.7253 3.82299 14.1703 2.88516 14.433C1.94733 14.6956 0.966911 14.7708 0 14.6542C1.68887 15.738 3.65394 16.3128 5.66064 16.3102"></path>
                    </svg>
                  </button>
                  <div
                    id="tooltip-twitter"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium	 text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Share on Twitter
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-reddit"
                    className="inline-flex items-center p-2 mx-0.5 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100	 focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_13676_82300)">
                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"></path>
                        <path
                          d="M15.0004 8.99997C15.0004 8.27365 14.411 7.68418 13.6846 7.68418C13.3267 7.68418 13.011 7.82102 12.7794 8.0526C11.8846 7.41049 10.6425 6.98944 9.27412 6.93681L9.87412 4.12628L11.8215 4.53681C11.8425 5.03155 12.2531 5.43155 12.7583 5.43155C13.2741 5.43155 13.6952 5.01049 13.6952 4.4947C13.6952 3.97891 13.2741 3.55786 12.7583 3.55786C12.3899 3.55786 12.0741 3.76839 11.9267 4.08418L9.7478 3.62102C9.68464 3.61049 9.62148 3.62102 9.56885 3.6526C9.51622 3.68418 9.48464 3.73681 9.46359 3.79997L8.80043 6.93681C7.40043 6.97891 6.1478 7.38944 5.24254 8.0526C5.01096 7.83155 4.68464 7.68418 4.33727 7.68418C3.61096 7.68418 3.02148 8.27365 3.02148 8.99997C3.02148 9.53681 3.33727 9.98944 3.80043 10.2C3.77938 10.3263 3.76885 10.4631 3.76885 10.6C3.76885 12.621 6.11622 14.2526 9.02149 14.2526C11.9267 14.2526 14.2741 12.621 14.2741 10.6C14.2741 10.4631 14.2636 10.3368 14.2425 10.2105C14.6741 9.99997 15.0004 9.53681 15.0004 8.99997ZM6.00043 9.93681C6.00043 9.42102 6.42148 8.99997 6.93727 8.99997C7.45306 8.99997 7.87412 9.42102 7.87412 9.93681C7.87412 10.4526 7.45306 10.8737 6.93727 10.8737C6.42148 10.8737 6.00043 10.4526 6.00043 9.93681ZM11.232 12.4105C10.5899 13.0526 9.36885 13.0947 9.01096 13.0947C8.65306 13.0947 7.42148 13.0421 6.7899 12.4105C6.69517 12.3158 6.69517 12.1579 6.7899 12.0631C6.88464 11.9684 7.04254 11.9684 7.13727 12.0631C7.53727 12.4631 8.40043 12.6105 9.02149 12.6105C9.64254 12.6105 10.4952 12.4631 10.9057 12.0631C11.0004 11.9684 11.1583 11.9684 11.2531 12.0631C11.3267 12.1684 11.3267 12.3158 11.232 12.4105ZM11.0636 10.8737C10.5478 10.8737 10.1267 10.4526 10.1267 9.93681C10.1267 9.42102 10.5478 8.99997 11.0636 8.99997C11.5794 8.99997 12.0004 9.42102 12.0004 9.93681C12.0004 10.4526 11.5794 10.8737 11.0636 10.8737Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_13676_82300">
                          <rect width="18" height="18"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    id="tooltip-reddit"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium	text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Post on Reddit
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-link"
                    className="inline-flex items-center p-2 text-sm mx-0.5 font-medium	text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100	focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="tooltip-link"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Share link
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-save"
                    className="inline-flex items-center p-2 mx-0.5 text-sm font-medium	text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100	 focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="tooltip-save"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Save this article
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
                  <button
                    id="dropdownMenuIconHorizontalButton"
                    data-dropdown-toggle="dropdownDotsHorizontal"
                    className="inline-flex items-center p-2 mx-0.5 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </button>

                  <div
                    id="dropdownDotsHorizontal"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
                        >
                          Add to collection
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100	dark:hover:bg-gray-600 dark:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
            <p className="lead">
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </p>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              But then I found a{" "}
              <a href="https://flowbite.com">
                component library based on Tailwind CSS called Flowbite
              </a>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </p>
          </article>
          <aside className="none xl:block" aria-labelledby="sidebar-label">
            <div className="xl:w-[336px] sticky top-6">
              <h3 id="sidebar-label" className="sr-only">
                Sidebar
              </h3>
              <div className="mb-8 border-b border-solid border-emerald-500">
                <h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase">
                  Why?
                </h4>
                <p className="mb-4 text-sm font-light	 text-gray-500 dark:text-gray-400">
                  Knowledge sharing is the currency of growth, and teamwork is
                  the engine that drives it. When we come together, sharing our
                  expertise and supporting one another, we pave the way for
                  innovation and success.
                </p>
              </div>
              <div className="mb-12">
                <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">
                  Latest news
                </h4>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                      className="mr-4 max-w-full w-[6rem] h-[6rem] rounded-lg"
                      alt="Image 1"
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg	font-bold leading-5 dark:text-white text-gray-900">
                      Our first office
                    </h5>
                    <p className="mb-2 font-light	 text-gray-500 dark:text-gray-400">
                      Over the past year, Volosoft has undergone changes.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium	 underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                    >
                      Read in 9 minutes
                    </a>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                      className="mr-4 max-w-full w-[6rem] h-[6rem] rounded-lg"
                      alt="Image 2"
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg	font-bold leading-5 dark:text-white text-gray-900">
                      Enterprise Design tips
                    </h5>
                    <p className="mb-2 font-light	 text-gray-500 dark:text-gray-400">
                      Over the past year, Volosoft has undergone changes.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                    >
                      Read in 14 minutes
                    </a>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                      className="mr-4 max-w-full w-[6rem] h-[6rem] rounded-lg"
                      alt="Image 3"
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg	 font-bold leading-5 dark:text-white text-gray-900">
                      Partnered up with Google
                    </h5>
                    <p className="mb-2 font-light	 text-gray-500 dark:text-gray-400">
                      Over the past year, Volosoft has undergone changes.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium	 underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                    >
                      Read in 9 minutes
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="mb-2 text-sm font-light	 text-gray-500 dark:text-gray-400">
                  Students and Teachers, save up to 60% on Flowbite Creative
                  Cloud.
                </p>
                <p className="text-xs font-light text-gray-400 uppercase dark:text-gray-500">
                  Ads placeholder
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-900 pt-8">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {`${new Date().getFullYear()} `}
              <a href="https://flowbite.com/" className="hover:underline">
                Codeine
              </a>
              . All Rights Reversed.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="https://github.com/ethyaan/codeine"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="https://t.me/Koodine"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  width={20}
                  height={20}
                >
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                </svg>
                <span className="sr-only">Telegram account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
