import { useState } from "react";
import aziz from "../assets/aziz.png";
const Profile = () => {
  const [IsVisiable, setIsVisiable] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisiable((prev) => !prev)}
        className="relative inline-block m-4"
      >
        <img src={aziz} alt="" className="w-10 h-10 rounded-full" />
        <span className="bg-green-600 w-3.5 h-3.5 absolute bottom-0 left-7 rounded-full"></span>
      </button>

      {IsVisiable && (
        <div className=" bg-white gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute z-10">
          <div className="relative">
            <button
              className="absolute right-0 dark:text-white py-2 px-3"
              onClick={() => setIsVisiable(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <span>Abdul Aziz</span>
          </div>
          <div className="font-medium truncate dark:text-white px-4">
            Abdulaziz@gmail.com
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Setting
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
