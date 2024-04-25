const Signup = () => {
  return (
    <div>
      <form action="">
        {/* start-1 bg-white duration-300 transform -translate-y-4 top-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 */}
        <div className="relative m-4">
          <input
            type="text"
            id="email"
            className="rounded-lg w-full bg-white peer border-y-2 border-gray-500 focus:outline-none focus:border-rose-600 h-10"
          />
          <label
            htmlFor="email"
            className="absolute left-0 peer-placeholder-shown:top-3 peer-focus:-top-3.5 "
          >
            Email
          </label>
        </div>
      </form>
    </div>
  );
};

export default Signup;
