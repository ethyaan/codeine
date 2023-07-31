import { Facebook } from "./icons/facebook";
import { Link } from "./icons/link";
import { Reddit } from "./icons/reddit";
import { Twitter } from "./icons/twitter";

export default function ButtonIcon({ icon, tooltip, onClick }: any) {
  const iconComponentMap: any = {
    facebook: Facebook,
    link: Link,
    reddit: Reddit,
    twitter: Twitter,
  };
  const IconComponent = iconComponentMap[icon];
  return (
    <>
      <button
        className="group relative inline-flex items-center p-2 mx-0.5 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        onClick={onClick}
      >
        <IconComponent />
        <div className="group-hover:opacity-100 transition-opacity font-medium text-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 flex flex-col items-center">
          <span className="py-2 px-3 text-sm bg-gray-900 dark:bg-gray-700 rounded-lg shadow-sm mx-auto whitespace-pre">
            {tooltip}
          </span>
          <span className="h-0 w-0 border-x-4 border-x-transparent border-t-[8px] border-t-gray-900 dark:border-t-gray-700"></span>
        </div>
      </button>
    </>
  );
}
