/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
      <div className="ml-2 mt-2 h-3">
    <img src={process.env.PUBLIC_URL + '/logoPoste.png'} alt="Custom Icon" className={`h-20 w-35`} />
      </div>
      </div>
    <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
     {/* Nav item */}
      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
     {/* Free Horizon Card */}
      <div className="flex justify-center"></div>
     {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
