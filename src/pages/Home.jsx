import React from "react";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import VideosSection from "../components/VideosSection";
import BodyComponent from "./BodyComponent";
import BodyComponent2 from "./BodyComponent2";
import BodyComponent3 from "./BodyComponent3";
import Companys from "./Companys";
import { SignUp } from "./SignUp";

const Home = () => {
  return (
    <div>
      <Navbar />

      <BodyComponent />

      <Companys />
      <VideosSection />
      <BodyComponent2 />
      <BodyComponent3
        value={
          "https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png"
        }
      />

      <VideosSection />

      <Carousal />
      <Footer />
    </div>
  );
};

export default Home;
