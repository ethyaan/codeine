export default function Navbar() {
  return (
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
            className="text-gray-800 dark:text-gray-100 no-underline hover:no-underline font-extrabold text-xl"
            href="/"
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
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
