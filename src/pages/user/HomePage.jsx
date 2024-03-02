//import React from 'react'

import { Suspense } from "react";
import About from "../../components/user/About";
import Home from "../../components/user/Home";
import UserCard from "../../components/user/UserCard";
import Loading from "../../components/user/Loading";

const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Home />
        <About />
        <UserCard />
      </div>
    </>
  );
};

export default HomePage;
