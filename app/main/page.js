"use client";
import React from "react";
import ProductCard from "../pages/components/productCard";
import { categories, data } from "../pages/components/datas";

function Main() {
  return (
    <main>
        <section className="text-gray-400 flex text-3xl justify-evenly overflow-x-scroll">
          {categories.map((item) => (
            <div
              key={Math.random()}
              className=" hover:bg-orange-400 flex  transition-all ease-in-out duration-1000 my-1  flex-col justify-center items-center p-2 rounded-md hover:text-white"
            >
              {item.icon}
              <p className="text-xs">{item.name}</p>
            </div>
          ))}
        </section>
        <div className="font-poppins justify-center p-0 flex flex-wrap">
          {data.map((product) => (
            <div key={Math.random()}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      
    </main>
  );
}

export default Main;
