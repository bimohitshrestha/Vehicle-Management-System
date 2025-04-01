"use client";

import { useState } from "react";
import Service from "../component/service/Service";
import ServiceRequestModal from "../component/modal/ServiceRequestModal";
import { motion, useScroll } from "framer-motion";
import CountUp from "../component/Countup/CountUp";

// const data = [
//   {
//     number: "25k",
//     title: "Vehicles Managed",
//   },
//   {
//     number: "98%",
//     title: "Customer Satisfaction",
//   },
//   {
//     number: "24/7",
//     title: "Support Available",
//   },
// ];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleModel: "",
    vehicleName: "",
    serviceType: "",
    vehicleType: "",
    address: "",
    requestType: "dropoff",
    location: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    closeModal();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      vehicleModel: "",
      vehicleName: "",
      serviceType: "",
      vehicleType: "",
      address: "",
      requestType: "dropoff",
      location: "",
    });
  };

  return (
    <>
      <main>
        <section className="relative h-screen flex items-center justify-center bg-gradient-home">
          <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center text-white">
            <div className="max-w-4xl text-center">
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight text-black">
                Vehicle Management{" "}
                <span className="text-secondary">Simplified</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
                Streamline your fleet operations with our comprehensive
                management solution.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
                <button
                  onClick={openModal}
                  className="btn-gradient hover:scale-105 transition-transform duration-200"
                >
                  Send Service Request
                </button>

                <button className=" border-2  text-secondary py-4 px-8 rounded-lg font-semibold text-lg cursor-pointer hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center  gap-20 mt-24 w-full max-w-4xl z-1">
              <div className=" ">
                <div className="flex items-center text-5xl font-bold text-secondary mb-2">
                  <CountUp start={0} end={25} duration={2000} />
                  K+
                </div>
                <div className="text-black text-lg">Vehicle Managed</div>
              </div>

              <div className="">
                <div className="flex text-5xl font-bold text-secondary mb-2">
                  <CountUp start={0} end={98} duration={2000} />%
                </div>
                <div className="text-black text-lg">Customer Satisfaction</div>
              </div>
              <div className="">
                <div className="flex text-5xl font-bold text-secondary mb-2">
                  <CountUp start={0} end={24} suffix={"/7"} duration={2000} />
                </div>
                <div className="text-black text-lg">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        <Service />
      </main>

      <ServiceRequestModal
        isModalOpen={isModalOpen}
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
      />
    </>
  );
}
