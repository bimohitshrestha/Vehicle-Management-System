import React, { useState } from "react";
import { FaInfoCircle, FaMapMarkedAlt, FaTools } from "react-icons/fa";
import { FaCalendarCheck, FaCheck, FaHeadset } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

import { motion } from "framer-motion";
import ButtonText from "../common/button/ButtonText";
import TextHeader from "../common/headerText/TextHeader";


interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

const TwoWheelerService = () => {
  const [selectedFeature, setSelectedFeature] = useState<ServiceFeature | null>(
    null
  );

  const serviceFeatures: ServiceFeature[] = [
    {
      id: "regular-service",
      title: "Regular Maintenance",
      description:
        "Comprehensive service packages to keep your bike running smoothly",
      icon: <FaTools className="text-white text-3xl" />,
      benefits: [
        "Engine oil replacement",
        "Air filter cleaning",
        "Chain lubrication & adjustment",
        "Brake inspection & tuning",
        "Overall performance check",
      ],
    },
    {
      id: "emergency",
      title: "Emergency Assistance",
      description: "24/7 roadside assistance for unexpected breakdowns",
      icon: <FaHeadset className="text-white text-3xl" />,
      benefits: [
        "Available 24/7",
        "Quick response time",
        "On-the-spot repairs",
        "Towing service if needed",
        "Nationwide coverage",
      ],
    },
    {
      id: "tracking",
      title: "Service Tracking",
      description: "Real-time updates on your bike's service status",
      icon: <FaMapMarkedAlt className="text-white text-3xl" />,
      benefits: [
        "Real-time service status",
        "Mechanic location tracking",
        "Estimated completion time",
        "Service history records",
        "Digital service reports",
      ],
    },
    {
      id: "scheduling",
      title: "Smart Scheduling",
      description:
        "Book services at your convenience with our easy scheduling system",
      icon: <FaCalendarCheck className="text-white text-3xl" />,
      benefits: [
        "Online booking system",
        "Flexible time slots",
        "Reminders & notifications",
        "Reschedule with ease",
        "Priority booking options",
      ],
    },
  ];

  const handleFeatureClick = (feature: ServiceFeature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };
  
  const handleButtonClick = () => {
    console.log("clicked button");
  };

  return (
    <>
      <motion.div
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <TextHeader
          title="Premium Two-Wheeler Services"
          description="Expert Maintenance and repair services tailored for all types of motorcycles and scooters"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              onClick={() => handleFeatureClick(feature)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group t flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: index * 0.3 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4 text-black">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {feature.benefits.slice(0, 3).map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-secondary text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                  {feature.benefits.length > 3 && (
                    <span className="bg-gray-100 text-secondary text-xs font-medium px-3 py-1 rounded-full">
                      +{feature.benefits.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div className="bg-gray-50 p-4 flex justify-between items-center group-hover:bg-blue-50 transition-colors duration-300 mt-auto">
                <span className="text-black font-medium">View Details</span>
                <FaInfoCircle className="text-black" />
              </div>
            </motion.div>
          ))}
        </div>

        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 120, damping: 25 },
              }}
            >
              <div className="bg-primary p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  {selectedFeature.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-blue-200 cursor-pointer"
                >
                  <ImCross />
                </button>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="text-black">{selectedFeature.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="font-bold text-lg mb-3 text-black">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedFeature.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start text-black"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { delay: idx * 0.1, duration: 0.3 },
                          }}
                        >
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                  <ButtonText name="Book This Service" onClick={handleButtonClick} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default TwoWheelerService;
