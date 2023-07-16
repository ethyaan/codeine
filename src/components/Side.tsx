export default function Side() {
  return (
    <aside aria-labelledby="sidebar-label">
      <div className="xl:w-[21rem] max-w-xs sticky top-6">
        <h3 id="sidebar-label" className="sr-only">
          Sidebar
        </h3>
        <div className="mb-8 border-b border-solid border-emerald-500">
          <h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase">
            Why?
          </h4>
          <p className="mb-4 text-sm font-light	 text-gray-500 dark:text-gray-400">
            Knowledge sharing is the currency of growth, and teamwork is the
            engine that drives it. When we come together, sharing our expertise
            and supporting one another, we pave the way for innovation and
            success.
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
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <p className="mb-2 text-sm font-light	 text-gray-500 dark:text-gray-400">
            Students and Teachers, save up to 60% on Flowbite Creative Cloud.
          </p>
          <p className="text-xs font-light text-gray-400 uppercase dark:text-gray-500">
            Ads placeholder
          </p>
        </div>
      </div>
    </aside>
  );
}
