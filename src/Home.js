import React from "react";

import Homeswiper from "./Components/Homeswiper";
import Featuredmovies from "./Components/Featuredmovies";
import Movierecommendation from "./Components/Movierecommendation";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Homeswiper />
      <Featuredmovies />
      <Movierecommendation />
      <Footer />
    </>
  );
}
