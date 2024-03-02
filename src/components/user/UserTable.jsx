import axios from "axios";
import React, { useEffect, useState } from "react";
import UserProfileModal from "./userModal";

const UserTable = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState([]);
  const [userDetails, setuserDetails] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/users`)
      .then((response) => {
        setUserData(response.data);
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
    setuserDetails(userData.filter((user)=>user.id==id))
    setIsOpen(true);
  };


  

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          {/* Table Header */}
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  User Details
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-amber-500 text-white active:bg-amber-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    UserName
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    E-mail
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Phone
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Details
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
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
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            {userData.length > usersPerPage && (
              <ul className="flex pl-0 rounded list-none flex-wrap">
                {[
                  ...Array(Math.ceil(userData.length / usersPerPage)).keys(),
                ].map((number) => (
                  <li
                    key={number}
                    className="relative block py-2 px-3 leading-tight  text-blueGray-700  cursor-pointer"
                  >
                    <button
                      onClick={() => paginate(number + 1)}
                      className="bg-gray-400 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
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

      {/* Footer */}
      {/* <footer className="relative pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank" rel="noopener noreferrer"> Creative Tim</a>.
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      {isOpen && (
        <UserProfileModal
          user={userDetails}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </section>
  );
};

export default UserTable;
