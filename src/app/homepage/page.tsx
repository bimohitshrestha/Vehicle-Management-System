"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../component/navbar/page";
import Service from "../component/service/Service";
import { FaClock } from "react-icons/fa6";
import Footer from "../component/Footer/Footer";
import ServiceRequestModal from "../component/modal/ServiceRequestModal";
import CustomerSupport from "../component/customer-support/CustomerSupport";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MotoServe - Motorcycle Service at Your Doorstep</title>
        <meta
          name="description"
          content="Book motorcycle service and repair at your doorstep"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <header className="relative w-full h-screen">
            <img
              src="https://fleetgo.com/wp-content/uploads/2022/11/Vehicle-Management-System-1024x683.webp"
              alt="Vehicle Management System"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70"></div>

            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-center leading-tight">
                Vehicle Management{" "}
                <span className="text-blue-400">Simplified</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-2xl text-center">
                Streamline your fleet operations with our comprehensive
                management solution
              </p>

              <div className="flex items-center">
                <button
                  onClick={openModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all cursor-pointer"
                >
                  Send Service Request
                </button>
              </div>
            </div>
          </header>
          <ServiceRequestModal
            isModalOpen={isModalOpen}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            closeModal={closeModal}
          />
        </div>

        <Service />
        {/* <CustomerSupport /> */}
        <Footer />
      </main>
    </div>
  );
}
