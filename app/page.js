"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import ProductCard from "./pages/components/productCard";
import Main from "./main";
import { HiHeart, HiHome, HiMenuAlt1, HiSearch, HiUser } from "react-icons/hi";
import { useRouter } from "next/navigation";
import ProductView from "./productView";

import Header from "./pages/components/header";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  return (
    <main className="font-poppins">
      {/* <div className="bg-orange-300 z-20 sticky top-0 w-full">
        <Header />
      </div>
      <section className="relative">
        <Main />
      </section>

      <section className="fixed flex items-center w-[100vw] justify-evenly px-1 h-[9vh] text-3xl bottom-0 left-0 right-0 bg-gray-400 rounded-t-lg text-white">
        <HiHome onClick={() => router.push("@/app/pages/login")} />
        <Link href={"/login"}>
        <HiSearch  />
        </Link>
        <HiHeart />
        <HiUser />
      </section> */}
      <ProductView />
      
    </main>
  );
}
