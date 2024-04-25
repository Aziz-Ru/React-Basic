const Transition = () => {
  return (
    <>
      <div className="bg-green-500 p-10 h-fit flex items-center justify-center ">
        <div className="px-4 box-content border-x-8 border-indigo-200 border-opacity-50 group space-y-4 w-80 mx-auto">
          <div className="h-16 bg-white opacity-25 rounded-lg shadow-xl transform group-hover:opacity-100 group-hover:translate-x-64 transition duration-100 delay-200"></div>
          <div className="h-16 bg-rose-600 opacity-25 rounded-lg shadow-xl transform group-hover:opacity-100 group-hover:translate-x-64 transition duration-500 delay-500"></div>
          <div className="h-16 bg-pink-500 opacity-25 rounded-lg shadow-xl transform group-hover:opacity-100 group-hover:translate-x-64 transition duration-700 delay-700 "></div>
          <div className="h-16 bg-indigo-500 opacity-25 rounded-lg shadow-xl transform group-hover:opacity-100 group-hover:translate-x-64 transition duration-1000 delay-1000"></div>
        </div>
      </div>

      <div className="bg-rose-500">
        <ul className="divide-y-2 divide-gray-400 my-6">
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
        </ul>

        <ul className="flex divide-x-2 divide-gray-400">
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
          <li className="p-6 space-y-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Transition;
