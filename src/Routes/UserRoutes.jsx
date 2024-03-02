// import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import UserList from "../pages/user/UserList";
import NavBar from "../components/user/NavBar";
import UserTableWithSuspense from "../components/user/UserTable";
import Footer from "../components/user/Footer";


const UserRoutes = () => {
  return (
    <>
    {/* <div className="w-screen"> */}
    <NavBar/>

    {/* </div> */}
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/userList' element={<UserTableWithSuspense/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default UserRoutes