// import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import UserList from "../pages/user/UserList";
import NavBar from "../components/user/NavBar";


const UserRoutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/userList' element={<UserList/>} />
    </Routes>
    </>
  )
}

export default UserRoutes