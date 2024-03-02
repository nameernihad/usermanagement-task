import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-center   " style={{backgroundImage: 'url("https://wallpapercave.com/wp/wp7728220.jpg")'}}>
        <div className='bg-slate-300 bg-opacity-50' >
      <div className="mx-auto max-w-2xl  py-32 sm:py-48 lg:py-56  bg-opacity-50">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to Professional networking platform
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/userList"}
              className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
