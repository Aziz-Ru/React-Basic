const CardButton = () => {
  return (
    <div className="p-6 max-w-sm h-fit border border-gray-200 shadow-md rounded-lg bg-white  hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 ">
      <a href="" className="mb-2 text-2xl ">
        <h5 className="mb-2 text-2xl font-sans tracking-tight font-bold text-gray-900 dark:text-white">
          Trending News
        </h5>
      </a>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        adipisci, et odio nisi blanditiis modi corporis consectetur sapiente
        nobis tenetur
      </p>
      <a
        href=""
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default CardButton;
