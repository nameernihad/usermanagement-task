import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-center  bg-[#201658]  border-b-slate-900 border-b-4">
      <div className="">
        <div className="mx-auto flex items-center w-full h-screen  py-32 sm:py-48 lg:py-56  bg-opacity-50">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center flex   w-full">
          <div className="flex flex-col gap-y-10 items-center justify-center w-full sm:w-1/2">
  <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">
    Welcome to Professional networking platform
  </h1>
  <p className="w-full sm:w-1/2 text-slate-400">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo praesentium ratione odio, temporibus eum accusantium cumque fugit natus optio iste quaerat. Odit ut quo nam incidunt laboriosam velit odio.
  </p>
  <Link to={"/userList"}>
    <button
      type="button"
      className="px-10 focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm py-3 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Get started
    </button>
  </Link>
</div>

            <div className="w-1/2 hidden sm:block">
  <img src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Free-Image.png" alt="" />
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
