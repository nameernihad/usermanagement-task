import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className=" bg-gray-700 p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My App</div>
        <div className="hidden sm:flex">
          <ul className="flex">
            <li className="mr-6">
              <Link to={'/'} className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to={"/userlist"} className="text-white hover:text-gray-300">UserList</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="text-white hover:text-gray-300">
            ☰
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="sm:hidden">
          <ul className="flex flex-col">
            <li className="my-2">
              <Link to={'/'} className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li className="my-2">
              <Link to={"/userlist"} className="text-white hover:text-gray-300">UserList</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
