import React, { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";

import { GiScooter } from "react-icons/gi";

import { MdOutlineElectricBike } from "react-icons/md";
import { RiEBike2Line, RiMotorbikeFill } from "react-icons/ri";
import { TbMotorbike } from "react-icons/tb";
import ChooseUs from "./ChooseUs";
import TwoWheelerService from "./TwoWheelerService";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import Benefits from "./Benefits";
import CustomerSupport from "../customer-support/CustomerSupport";

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  image: string;
}

const Service = () => {
  const bikeTypes = [
    {
      name: "Sport Bikes",
      icon: <TbMotorbike className="text-red-500 text-3xl" />,
    },

    {
      name: "Scooters",
      icon: <GiScooter className="text-blue-500 text-3xl" />,
    },
    {
      name: "Electric Bikes",
      icon: <MdOutlineElectricBike className="text-red-500 text-3xl" />,
    },
    {
      name: "Off-road Bikes",
      icon: <RiMotorbikeFill className="text-green-500 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <TwoWheelerService />

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="bg-blue-600 py-4">
            <h3 className="text-xl font-semibold text-white text-center">
              We Service All Two-Wheeler Types
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {bikeTypes.map((bike, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-lg transition duration-300 cursor-pointer"
                >
                  <span className="text-4xl mb-2">{bike.icon}</span>
                  <p className="font-medium text-gray-700 text-center">
                    {bike.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <HowItWorks />

        <ChooseUs />

        <Benefits />

        <Testimonial />

        <div className="bg-blue-600 rounded-xl overflow-hidden text-black">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-">
                Ready to get your bike serviced?
              </h2>
              <p className="text-blue-100 mb-6">
                Schedule a service appointment today and experience hassle-free
                maintenance.
              </p>
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
                Book Now
              </button>
            </div>
            <div className="md:w-1/3 bg-blue-700 flex items-center justify-center p-8">
              <FaMotorcycle className="text-white text-6xl opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
