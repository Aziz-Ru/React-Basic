// eslint-disable-next-line react/prop-types
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { GiBoxingRing } from "react-icons/gi";
import { HiHome } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import ReactSVG from "../assets/react.svg";
const Navbar = ({ title = `Job Seeker's` }) => {
  const LinkStyle =
    "text-white hover:bg-gray-900 hover:white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center">
          {/* this is logo and title section */}
          <a href="" className="flex flex-shrink-0 items-center mr-4">
            <img src={ReactSVG} alt="React SVG" />
            <span className="text-2xl hidden md:block text-white font-bold ">
              {title}
            </span>
          </a>

          <div className="flex justify-center flex-col flex-1 md:flex-row ">
            {/* This search section */}
            <div className="md:flex md:justify-center md:items-center mx-8">
              <div className="flex items-center space-x-1 rounded-md h-10 bg-indigo-50 px-4 py-2">
                <input
                  className=" bg-transparent shrink h-8 rounded-md w-full outline-none"
                  type="text"
                  name="search"
                  placeholder="Search Something"
                />
                <div className="border border-indigo-200 h-8"></div>
                <button>
                  <FaSearch />
                </button>
              </div>
            </div>
            {/* this navigation links */}
            <div className="mx-4 ">
              <div className="flex justify-around">
                <a href="" className={LinkStyle}>
                  <center>
                    <HiHome />
                  </center>
                  <span className="text-sm hidden md:block">Home</span>
                </a>
                <a href="" className={LinkStyle}>
                  <center>
                    <FaUserFriends />
                  </center>
                  <span className="text-sm hidden md:block">Friends</span>
                </a>
                <a href="" className={LinkStyle}>
                  <center>
                    <GiBoxingRing />
                  </center>
                  <span className="text-sm hidden md:block">Jobs</span>
                </a>
                <a href="" className={LinkStyle}>
                  <center>
                    <IoNotifications />
                  </center>
                  <span className="text-sm hidden md:block">Notification</span>
                </a>
                <a href="" className={LinkStyle}>
                  <center>
                    <MdAccountCircle />
                    <span className="text-sm hidden md:block">Account</span>
                  </center>
                </a>
              </div>

              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {/* <div className="border-2 absolute top-20">
              <div className="">
                <div className=" bg-indigo-200 h-52 ">
                  <h1>Hello world</h1>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
