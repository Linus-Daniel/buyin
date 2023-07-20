import Image from "next/image";
import React from "react";
import { useState, } from "react";
import image from "@/app/assets/images/NicePng_bank-png_2237554.png";
import {
  FaArrowLeft,
  FaHeart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

function ProductView() {
  const [amount, setAmount] = useState(0);
  return (
    <main>
      <div className="container font-poppins  bg-gray-200 h-screen">
        <section className="image flex-col px-5 py-4 flex justify-center ">
          <header className="flex justify-between px-3">
            <FaArrowLeft className="shadow-sm text-5xl rounded-sm bg-white text-slate-500 p-2" />
            {/* <FaCartPlus className="shadow-sm text-5xl rounded-sm bg-white text-slate-500 p-2" /> */}
          </header>
          <Image src={image} alt="image" className="w-[80%]" />
        </section>
        <section className="Details bg-white px-3 pt-10 h-full rounded-t-3xl ">
          <div className="flex items-center justify-between px-5">
            <section>
              <h3 className="font-bold text-lg">power bank</h3>
              <div className="flex items-center">
                <p className="font-semibold text-md text-red-500">$500</p>
                <span className="[text-decoration:line-through;] m-1 text-xs text-gray-400 ">
                  900
                </span>
              </div>
            </section>
            <div className="favorite">
              <FaHeart
                size={40}
                className="rounded-lg bg-red-100 text-gray-400 p-2"
              />
            </div>
          </div>
          <section className="description text-slate-500 my-6 p-4">
            <p>
              Intex power Bank with four charge LED, Three charging USB port. This power bank last for at most 15hrs with steady charging of three mobile phones simultaneously

            </p>
              <p>40000Mah</p>
            <div className="colors flex w-[35%] justify-around">
              <div className="h-7 w-7 rounded-full bg-gray-400 border-[2px] border-gray-200"></div >
              <div className="h-7 w-7 rounded-full bg-red-400 border-[3px] border-solid border-red-500 "></div>
              <div className="h-7 w-7 rounded-full bg-blue-400 border-[4px]"></div>
            </div>
          </section>
        </section>
        <div className=" fixed h-[8%] bg-gray-300 w-full justify-between bottom-0 p-1 items-center flex">
          <div className="flex px-2 w-[30%] justify-between">
            <FaMinus onClick={() => setAmount((prev) => prev - 1)} />{" "}
            <p>{amount}</p>
            <FaPlus onClick={() => setAmount((prev) => prev + 1)} />
          </div>
          <div className="flex w-[70%] justify-around items-center">
            <section className="Buy Now bg-green-500 text-semibold text-white p-2 rounded-lg">
              Buy Now
            </section>
            <section className="addToCart font-semibold text-white bg-red-500 p-2 rounded-lg ">
              {" "}
              Add to cart{" "}
            </section>
          </div>
        </div>
        
      </div>
    
    </main>
  
  );
}

export default ProductView;
