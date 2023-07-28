import { Facebook } from "./icons/facebook";
import { Link } from "./icons/link";
import { Reddit } from "./icons/reddit";
import { Twitter } from "./icons/twitter";

export default function ButtonIcon({ icon, tooltip }: any) {
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
        data-tooltip-target={`tooltip-${icon}`}
        className="inline-flex items-center p-2 mx-0.5 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-2 dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
      >
        <IconComponent />
      </button>
      <div
        id={`tooltip-${icon}`}
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        {tooltip}
        <div className="tooltip-arrow" data-popper-arrow=""></div>
      </div>
    </>
  );
}
