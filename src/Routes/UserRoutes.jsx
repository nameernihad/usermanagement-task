// import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import UserList from "../pages/user/UserList";
import NavBar from "../components/user/NavBar";
import Footer from "../components/user/Footer";
import PageNotFound from "../components/user/NotFound";



const UserRoutes = () => {
  return (
    <>
    <div className="bg-[#201658]">
    <NavBar/>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/userList' element={<UserList/>} />
        <Route path="*" element={<PageNotFound />} />

    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default UserRoutes