import aziz from "../assets/aziz.png";

const ProfileHover = () => {
  return (
    <div className="relative inline-block m-4 group">
      <img src={aziz} alt="" className="w-10 h-10 rounded-full " />
      <span className="bg-green-600 w-3.5 h-3.5 absolute bottom-0 left-7 rounded-full"></span>
      <div className=" absolute z-10 bg-white gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 hidden group-hover:block">
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
    </div>
  );
};

export default ProfileHover;
