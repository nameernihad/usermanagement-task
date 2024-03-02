/* eslint-disable react/prop-types */
const UserProfileModal = ({ user, isOpen, setIsOpen }) => {
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        {isOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div onClick={toggleModal} className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
  
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white flex justify-center ">
                  <div className="max-w-full w-full rounded overflow-hidden shadow-lg bg-white" key={user.id}>
                    <div className="h-40 relative flex justify-center items-center bg-slate-200">
                      {/* Close Button */}
                      <button
                        onClick={toggleModal}
                        type="button"
                        className="absolute top-0 right-0 mt-4 mr-4 bg-transparent text-white rounded-full hover:bg-gray-300 p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      {/* User Avatar */}
                      <div className="flex justify-center items-center text-3xl font-semibold text-white rounded-full w-20 h-20 bg-amber-800">
                        {user?.email[0]}
                      </div>
                    </div>
                    {/* User Details */}
                    <div className="px-6 py-4 flex flex-col bg-slate-100 justify-center items-center">
                      <div className="font-bold text-xl mb-2">User Details</div>
                      <div className="text-gray-700 flex flex-col  justify-center text-center items-center">
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
                          <strong>Company:</strong> {user?.company?.name}
                        </p>
                        <p>
                          <strong>Address:</strong> {user?.address?.street},{" "}
                          {user?.address?.city}, {user?.address?.zipcode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default UserProfileModal;
  