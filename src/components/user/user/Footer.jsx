const Footer = () => {
    return (
      <footer className=" w-screen fixed bg-gray-800  text-white ">
        <div className="container mx-auto py-5 flex justify-between items-center px-4">
          <p className="text-sm">© 2024 Nameer Nihad. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  