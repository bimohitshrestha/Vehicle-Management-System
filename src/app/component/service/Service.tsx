import React from "react";
import { FaMotorcycle } from "react-icons/fa";


import ChooseUs from "./ChooseUs";
import TwoWheelerService from "./TwoWheelerService";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import Benefits from "./Benefits";
import CustomerSupport from "../customer-support/CustomerSupport";
import Latestpost from "../latest-post/Latestpost";
import {motion,useScroll} from "framer-motion";

import TwoWheeler from "./TwoWheeler";

const Service = () => {
  const {scrollYProgress} = useScroll();
  return (
    <> 

    <motion.div id="scroll-indicator" style={{scaleX:scrollYProgress,position:"fixed",top:0,left:0,right:0,height:4,originX:0,zIndex:900,backgroundColor:"#ff0088"}}/>
    <div className="min-h-screen bg-gradient-to-r from-[#F9F3F0] to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <TwoWheelerService />
        <TwoWheeler />


        <HowItWorks />

        <ChooseUs />

        <Benefits />

        <Testimonial />
        {/* <Telematics /> */}
        <Latestpost />
        <CustomerSupport />

        <div className="bg-[#CB9173]/90 rounded-xl overflow-hidden text-black">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to get your bike serviced?
              </h2>
              <p className="text-amber-100 mb-6">
                Schedule a service appointment today and experience hassle-free
                maintenance.
              </p>
              <button className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-amber-50 transition duration-300">
                Book Now
              </button>
            </div>
            <div className="md:w-1/3 bg-[#F9F3F0] flex items-center justify-center p-8">
              <FaMotorcycle className="text-black text-6xl opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Service;
