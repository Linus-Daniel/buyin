"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <main className=" overflow-hidden w-[40vw] flex flex-wrap cursor-pointer object-contain bg-black/10 gap-3 h-[fit-content] mx-2 my-1 px-3 rounded-lg py-3">
     
        <Link to={"/productview"}>
          <Image
            src={product.image}
            alt="product image"
            className="W-full "
            onClick={() => { console.log(view)}}
          />
        </Link>

        <div className="flex justify-between items-center w-full">
          <section>
            <span className="text-red-400 flex items-center">
              <FaTag color="gray" className="mx-1" />
              <p>{product.price}</p>
            </span>
            <p className="w-full">{product.name}</p>
          </section>
          <FaHeart
            className={`text-gray-400 text-xl ${
              favorite ? "text-red-600" : ""
            }`}
            onClick={() => {
              setFavorite((prev) => !prev);
            }}
          />
        </div>
    </main>
  );
}

export default ProductCard;
