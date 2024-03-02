import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My App</div>
        <ul className="flex">
          <li className="mr-6">
            <Link to={'/'} className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to={"/userlist"} className="text-white hover:text-gray-300">UserList</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
