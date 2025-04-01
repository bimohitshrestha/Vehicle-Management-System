import Image from "next/image";
import React, { useState } from "react";
import { BiCalendar, BiCheckCircle } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import TextHeader from "../common/headerText/TextHeader";


const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <BiCalendar size={28} />,
      number: 1,
      title: "Book Online",
      description:
        "Schedule a service appointment through our easy-to-use booking system.",
      detailedDescription:
        "Choose your preferred date and time, select the service package that suits your needs, and provide your location details.",
      benefits: [
        "24/7 availability",
        "Instant confirmation",
        "Flexible rescheduling",
      ],
      color: "bg-indigo-600",
    },
    {
      icon: <BsTools size={28} />,
      number: 2,
      title: "We Come To You",
      description: "Our expert technicians arrive at your location.",
      detailedDescription:
        "Our mobile service vans are fully equipped with professional-grade tools and genuine parts to handle any repair or maintenance needs.",
      benefits: [
        "No drop-off required",
        "GPS tracking of technician",
        "Precise arrival windows",
      ],
      color: "bg-teal-600",
    },
    {
      icon: <BiCheckCircle size={28} />,
      number: 3,
      title: "Service Completed",
      description:
        "Your bike is serviced professionally with a detailed service report.",
      detailedDescription:
        "After thorough inspection and service, our technicians will walk you through all work performed and provide maintenance recommendations.",
      benefits: [
        "Digital service report",
        "90-day service guarantee",
        "Follow-up support",
      ],
      color: "bg-amber-600",
    },
  ];

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="bg-custom-gradient text-transparent text-4xl bg-clip-text font-bold">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the convenience of our mobile bike service in just three
            simple steps. Professional service delivered right to your doorstep.
          </p>
        </div> */}

        <TextHeader title="How It Works" description="Experience the convenience of our mobile bike service in just three simple steps. Professional service delivered right to your doorstep" />

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`rounded-xl shadow-lg transition-all duration-300 ${
                  activeStep === index
                    ? `bg-white border-l-4 border-[#CB9173]`
                    : "bg-white opacity-70"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="p-6 flex items-center cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center mr-4 flex-shrink-0`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {activeStep === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 mb-4">
                      {step.detailedDescription}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800">Benefits:</h4>
                      <ul className="mt-2 space-y-2 text-gray-700">
                        {step.benefits.map((benefit, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span
                              className={`w-2 h-2 rounded-full mr-2 ${step.color}`}
                            ></span>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {activeStep === 0 && (
                <div className="bg-indigo-50 p-8 h-full">
                  <div className="relative h-64 lg:h-96 w-full bg-indigo-100 rounded-lg overflow-hidden">
                    <Image
                      src="/onlineform.png"
                      alt="online form"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute bottom-0 left-0 right-0 mt-2 bg-gradient-to-t from-indigo-400/50 to-transparent p-1">
                      <p className="text-green-700 font-semibold text-xl">
                        Book in under 2 minutes
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                    <p className="text-indigo-600 font-medium">
                      Simple 3-step booking process
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                      <span>Select service</span>
                      <span>
                        <FaArrowRightLong />
                      </span>
                      <span>Choose time</span>
                      <span>
                        <FaArrowRightLong />
                      </span>
                      <span>Confirm</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="bg-teal-50 p-8 h-full">
                  <div className="relative h-64 lg:h-96 w-full bg-teal-100 rounded-lg overflow-hidden">
                    <Image
                      src="/tools.png"
                      alt="Mobile technician arriving"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-600/80 to-transparent p-4">
                      <p className="bg-clip-text text-transparent bg-gradient-to-r from-black to-teal-700 font-semibold text-xl">
                        Expert technicians at your doorstep
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                    <p className="text-teal-600 font-medium">
                      Fully equipped service vans
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm text-gray-600">
                      <div className="flex flex-col items-center">
                        <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mb-1">
                          <BsTools size={16} className="text-teal-600" />
                        </span>
                        <span>Tools</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mb-1">
                          <BsTools size={16} className="text-teal-600" />
                        </span>
                        <span>Parts</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mb-1">
                          <BsTools size={16} className="text-teal-600" />
                        </span>
                        <span>Expertise</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep == 2 && (
                <div className="bg-amber-50 p-8 h-full">
                  <div className="relative h-64 lg:h-96 w-full bg-amber-100 rounded-lg overflow-hidden">
                    <Image
                      src="/completion.jpg"
                      alt="service complete"
                      width={2000}
                      height={1000}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from amber-600/80 to-transparent p-4">
                      <p className="text-blue-600 font-semibold text-xl mr-4">
                        Professional Service Completed
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-4 roundedddd-lg shadow-md">
                    <p className="text-amber-600 font-medium">
                      Comprehensive Service Report
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      <span>All work backed by our 60-day guarantee</span>
                    </div>
                  </div>
                </div>
               
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
