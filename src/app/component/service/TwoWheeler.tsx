import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCarBattery } from "react-icons/fa6";
import { GiAutoRepair, GiScooter, GiTyre } from "react-icons/gi";
import { MdOutlineElectricBike } from "react-icons/md";
import { PiPaintBrushFill } from "react-icons/pi";
import { RiMotorbikeFill } from "react-icons/ri";
import { TbMotorbike } from "react-icons/tb";
import InputField from "../Field/InputField";
import { motion } from "framer-motion";
import ButtonText from "../common/button/ButtonText";

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
  {
    name: "Bike Batteries",
    icon: <FaCarBattery className="text-black text-3xl" />,
  },
  {
    name: "Dent & paint",
    icon: <PiPaintBrushFill className="text-rose-500 text-3xl" />,
  },
  {
    name: "Tyres at home",
    icon: <GiTyre className="text-black text-3xl" />,
  },
  {
    name: "Engine Repair",
    icon: <GiAutoRepair className="text-red-500 text-3xl" />,
  },
];

const TwoWheeler = () => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      alert("Book Now is Clicked");
    },
  });

  return (
    <>
      <motion.div
        className="flex flex-row gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="overflow-hidden mb-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-center font-semibold text-black">
            We Service All Two-Wheeler Types
          </h3>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {bikeTypes.map((bike, index) => (
                <motion.div
                  className="flex flex-col items-center  p-4 rounded-lg cursor-pointer shadow-lg"
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                  whileHover={{
                    scale: 1,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="text-4xl mb-2">{bike.icon}</span>
                  <p className="font-medium text-gray-700 text-center">
                    {bike.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center p-6 gap-4 rounded-2xl shadow-lg overflow-hidden mb-16 w-full lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h5 className="text-black font-semibold text-2xl">
              Bike Service At Your Place
            </h5>
            <p className="text-gray-500 text-sm mb-4">
              Bike service at your place at just Rs.99
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4"
            >
              <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <InputField
                  name="phoneNumber"
                  type="number"
                  value={formik.values.phoneNumber}
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
              </motion.div>

              <div className="w-full">
                <ButtonText name="Book Now" onClick={formik.handleSubmit} />
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TwoWheeler;
