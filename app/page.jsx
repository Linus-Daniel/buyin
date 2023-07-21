"use client";
import Header from "./pages/components/header";
import Search from "./search/page";
import Favourite from "./favourite/page";
import User from "./user/page";
import ProductView from "./pages/components/productView";
import React from "react";
import { routerTrigger } from "./routes/Routes";
import ProductCard from "./pages/components/productCard";
import Main from "./layouts/Main";
import MainPage from "./main/page";

export default function Page() {

  return (
    <Main>
        <MainPage />
    </Main>
  );
}
