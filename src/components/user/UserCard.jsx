import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SkeletonLoader = () => (
  <div className="max-w-80 w-full rounded overflow-hidden shadow-lg bg-white animate-pulse">
    <div className="h-40 flex justify-center items-center bg-gray-300">
      <div className="flex justify-center items-center text-3xl font-semibold text-white rounded-full w-20 h-20 bg-gray-400"></div>
    </div>
    <div className="px-6 py-4 flex flex-col bg-gray-200 justify-center items-center">
      <div className="font-bold text-xl mb-2">User Details</div>
      <div className="text-gray-700 flex flex-col  justify-center text-center items-center">
        <p>
          <strong>Name:</strong> 
        </p>
        <p>
          <strong>Username:</strong> 
        </p>
        <p>
          <strong>Email:</strong> 
        </p>
        <p>
          <strong>Phone:</strong> 
        </p>
        <p>
          <strong>Website:</strong> 
        </p>
        <p>
          <strong>Company:</strong> 
        </p>
        <p>
          <strong>Address:</strong> 
        </p>
      </div>
    </div>
  </div>
);

const UserCard = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/users`)
      .then((response) => {
          setUserData(response.data.filter((item, index) => index <= 3));
          setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);


  return (
    <>
      <div className="w-screen  p-5">
        <div className="w-full  flex justify-end">
          <Link to={"/userList"}>
            <button className="px-10 focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm py-3 me-2 mb-2 dark:focus:ring-yellow-900">
              View All
            </button>
          </Link>
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : userData.map((user) => (
                <motion.div
                  className="max-w-72 w-full rounded overflow-hidden shadow-lg bg-white"
                  key={user.id}
                  whileHover={{ scale: 1.05 }} // Add scale-up animation on hover
                >
                  <div className="h-40  flex justify-center items-center bg-slate-400">
                    <div className="flex justify-center items-center text-3xl font-semibold text-white rounded-full w-20 h-20 bg-amber-800">
                      {user?.email[0]}
                    </div>
                  </div>
                  <div className="px-3 py-4 flex flex-col bg-slate-700 justify-center items-center">
                    {/* <div className="font-bold text-xl mb-2">User Details</div> */}
                    <div className="text-slate-200 flex flex-col  justify-center text-center items-start">
                      <p>
                        <strong>Name:</strong> {user?.name}
                      </p>
                      <p>
                        <strong>Username:</strong> {user?.username}
                      </p>
                      <p>
                        <strong>Email:</strong> {user?.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {user?.phone}
                      </p>
                      <p>
                        <strong>Website:</strong> {user?.website}
                      </p>
                      <p>
                        <strong>Company:</strong> {user?.company?.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </>
  );
};

export default UserCard;
