"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import ProductCard from "./pages/components/productCard";
import Main from "./pages/main";
import { HiHeart, HiHome, HiMenuAlt1, HiSearch, HiUser } from "react-icons/hi";
import { useRouter } from "next/navigation";

import Header from "./pages/components/header";
export default function Home() {
  const router = useRouter();
  return (
    <main className="w-[100vw] h-[1000vh]">
      <div className="bg-orange-900 z-20 fixed w-full">
        <Header />
      </div>
      <section className="relative">
        <Main />
      </section>

      <section className="fixed flex items-center w-[100vw] justify-evenly px-2 h-[10vh] bottom-0 left-0 right-0 bg-slate-800 bg-opacity-70 rounded-t-lg text-white">
        <HiHome onClick={() => router.push("@/app/pages/login")} />
        <HiSearch />
        <HiHeart />
        <HiUser />
      </section>
    </main>
  );
}
