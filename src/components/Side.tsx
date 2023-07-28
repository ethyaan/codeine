// import { Link } from "@/components/icons/link";
// import getPosts from "@/utils/post";
// const posts = getPosts();
// console.log("_DEBUG_ =>", posts.length);

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
            Latest Posts
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
