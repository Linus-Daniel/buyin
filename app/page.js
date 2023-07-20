"use client";
import Main from "./main/page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./pages/components/header";
import Search from "./search/page";
import Favourite from "./favourite/page";
import User from "./user/page";
import ProductView from "./pages/components/productView";
import React from "react";
import {routerTrigger } from "./routes/Routes";

export default function Home() {
  return (
      <Router>
    <div>
        <main className="font-poppins">
          <div className="bg-orange-300 z-20 sticky top-0 w-full">
            <Header />
          </div>
          <Routes>
            <Route element=<Main /> path="/"></Route>
            <Route element=<Search /> path="/search"></Route>
            <Route element=<Favourite /> path="/favourite"></Route>
            <Route element=<User /> path="/user"></Route>
            <Route element=<ProductView /> path="/productview" ></Route>
          </Routes>

          <section className="fixed flex items-center w-[100vw] justify-evenly px-1 h-[9vh] text-3xl bottom-0 left-0 right-0 bg-gray-400 rounded-t-lg text-white">
            {routerTrigger.map((triger) => (
              <Link className="cursor-pointer" key={triger.Destination} to={triger.Destination}>
                {triger.icon}
              </Link>
            ))}
            
          </section>
        </main>
    </div>
      </Router>
  );
}
