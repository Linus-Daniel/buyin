"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import ProductCard from "./pages/components/productCard";
import Main from "./pages/main";
import { HiHeart, HiHome, HiMenuAlt1, HiSearch, HiUser } from "react-icons/hi";
import { useRouter } from "next/navigation";
import ProductView from "./pages/productView";

import Header from "./pages/components/header";
export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="bg-orange-900 z-20 sticky top-0  bg-blue-400 w-full">
        <Header />
      </div>
      <section className="relative">
        <Main />
        <ProductView />
      </section>

      <section className="fixed flex items-center w-[100vw] justify-evenly px-1 h-[9vh] text-3xl bottom-0 left-0 right-0 bg-gray-400 rounded-t-lg text-white">
        <HiHome onClick={() => router.push("@/app/pages/login")} />
        <HiSearch />
        <HiHeart />
        <HiUser />
      </section>
      
    </main>
  );
}
