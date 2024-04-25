import CardImage from "../card/CardImage";
import DefaultCard from "../card/DefaultCard";

const Grid = () => {
  return (
    <>
      <div className="bg-purple-500 p-4 m-4">
        {/* gap-4 grid-cols-1 md:grid-cols-3 md:gap-8 */}
        <ul className="grid grid-cols-4 grid-rows-4 gap-8 ">
          <li className=" col-span-3 bg-white rounded-md shadow-lg"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
          <li className=" col-span-2 bg-white rounded-md shadow-lg h-24"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
          <li className="col-span-3 bg-white rounded-md shadow-lg h-24"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
          <li className="col-span-3 bg-white rounded-md shadow-lg h-24"></li>
          <li className="bg-white rounded-md shadow-lg h-24"></li>
        </ul>
      </div>
      <div className="bg-pink-500 p-6 mx-auto max-w-3xl h-fit">
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-rows-2 gap-2">
          <li className="bg-white sm:row-span-2 rounded-md shadow-lg ">
            <CardImage />
          </li>
          <li className="bg-white  rounded-md shadow-lg">
            <DefaultCard />
          </li>
          <li className="bg-white sm:row-span-2 rounded-md shadow-lg">
            <CardImage />
          </li>
          <li className="bg-white  rounded-md shadow-lg">
            <DefaultCard />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Grid;
