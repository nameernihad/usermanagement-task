import axios from "axios";
import  { useEffect, useState } from "react";
import UserProfileModal from "./userModal";
import Loading from "./Loading";

const UserTable = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState([]);
  const [userDetails, setuserDetails] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    axios
      .get(`${baseUrl}/users`)
      .then((response) => {
            setUserData(response.data);
          setIsLoading(false)
          
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClick = (id) => {
    setuserDetails(userData.find((user) => user.id === id));
    setIsOpen(true);
  };

  return (  
    <section className="  py-1 bg-slate-200">
      <div className="w-full  xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-slate-100 w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-t-2 border-spacing-x-2">   
            <div className="flex flex-wrap items-center">
              <div className="flex-grow flex-1 relative w-full flex justify-center items-center px-4 max-w-full ">
                <h3 className="font-semibold text-base text-2xl text-gray-500 text-white-700">
                  User Details
                </h3>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent   w-full border">
              <thead>
                <tr>
                  <th className="px-6 bg-white-50 text-white-500 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Name
                  </th>
                  <th className="px-6 bg-white-50 text-white-500 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    UserName
                  </th>
                  <th className="px-6 bg-white-50 text-white-500 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    E-mail
                  </th>
                  <th className="px-6 bg-white-50 text-white-500 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Phone
                  </th>
                  <th className="px-6 bg-white-50 text-white-500 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Website
                  </th>
                  <th className="px-6 bg-white-50 text-white-500 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Details
                  </th>
                </tr>
              </thead>

              {isLoading ? ( // Conditional rendering of loading spinner
                            <Loading />
                        ) : (
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white-700">
                      {user.name}
                    </td>
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.username}
                    </td>
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.email}
                    </td>
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.phone}
                    </td>
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.website}
                    </td>
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button
                        onClick={() => handleClick(user.id)}
                        className="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
                        )}
            </table>
          </div>
    
          <div className="flex justify-center">
            {userData.length > usersPerPage && (
              <ul className="flex pl-0 rounded list-none flex-wrap">
                {[...Array(Math.ceil(userData.length / usersPerPage)).keys()].map((number) => (
                  <li
                    key={number}
                    className="relative block py-2 px-1 leading-tight  text-white-700  cursor-pointer"
                  >
                    <button
                      onClick={() => paginate(number + 1)}
                      className="bg-slate-300 hover:bg-gray-400 text-white  py-2 px-4 border-b-4 border-slate-400 hover:border-gray-500 rounded"
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <UserProfileModal user={userDetails} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </section>
  );
};



export default UserTable;
