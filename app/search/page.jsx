"use client";
import React, { useState } from "react";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";
import { HiCamera, HiOutlineCamera } from "react-icons/hi";
import { categories, data } from "../pages/components/datas";
import ProductCard from "../pages/components/productCard";
import Main from "../layouts/Main";
function Search() {
  const [find, setFind] = useState("");
  const [search, setSearch] = useState(false);
  return (
    <Main>
      <div className="font-poppins">
        {/* {SEARCHING METHODS} */}
        <header className=" flex flex-col px-2 bg-white items-center mx-3 py-2 sticky top-16 z-20">
          <section className=" flex justify-between items-center mx-3 py-2 sticky top-10 z-20">
            <div className=" flex-1 bg-gray-200 flex justify-between mx-3 items-center p-2 rounded-lg">
              <button onClick={() => setSearch(true)}>
                <FaSearch className=" text-gray-600" />
              </button>
              {/* INPUT */}
              <input
                onChange={(e) => setFind(e.target.value)}
                placeholder="  search product"
                className=" outline-none px-4 flex-1 bg-[inherit] active:outline-none placeholder:text-slate-500 relative "
              />
              {/* VOICE */}
              <FaMicrophone className="" />
            </div>
            {/* IMAGE */}
            <button>
              <HiOutlineCamera className="text-3xl text-red-400 mr-2" />
            </button>
          </section>
          {/* {CARTEGORIES} */}
          <section>
            <div className=" sticky top-20 z-20 flex placeholder:  w-screen overflow-x-scroll scroll-m-0">
              {categories.map((option) => (
                <button
                  key={option.name}
                  className=" h-[4em] flex transition-all ease-in-out duration-700 hover:text-white hover:bg-red-400 w-[20%] mx-1 flex-col items-center bg-slate-200 py-1 justify-center px-1 rounded-lg cursor shrink-0"
                >
                  <div className="text-gray-400 text-2xl ">{option.icon}</div>{" "}
                  <p className="text-xs">{option.name}</p>
                </button>
              ))}
            </div>
          </section>
        </header>
        {/* SEARCH RESULTS */}
        <div>
          {search ? (
            <div>
              {find === "" ? (
                ""
              ) : (
                <p>
                  {" "}
                  Search results for <span>{find}</span>{" "}
                </p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        {/* {PRODUCT OFFERS} */}
        <div>
          <section>
            <p className="text-lg text-red-400 font-semibold l-2">
              Special offers for you
            </p>
            <div className="font-poppins justify-center p-0 flex flex-wrap">
              {data.map((product) => (
                <div key={Math.random()}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
          <section>
            <p className="text-lg text-red-400 font-semibold ml-2">
              New Products
            </p>
            <div className="font-poppins justify-center p-0 flex flex-wrap">
              {data.map((product) => (
                <div key={Math.random()}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
}

export default Search;
