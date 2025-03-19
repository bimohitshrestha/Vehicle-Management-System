import React, { useState } from "react";
import { FaInfoCircle, FaMapMarkedAlt, FaTools } from "react-icons/fa";
import { FaCalendarCheck, FaCheck, FaHeadset } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  image: string;
}

const TwoWheelerService = () => {
  const [selectedFeature, setSelectedFeature] = useState<ServiceFeature | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("services");

  const serviceFeatures: ServiceFeature[] = [
    {
      id: "regular-service",
      title: "Regular Maintenance",
      description:
        "Comprehensive service packages to keep your bike running smoothly",
      icon: <FaTools className="text-blue-600 text-3xl" />,
      benefits: [
        "Engine oil replacement",
        "Air filter cleaning",
        "Chain lubrication & adjustment",
        "Brake inspection & tuning",
        "Overall performance check",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: "emergency",
      title: "Emergency Assistance",
      description: "24/7 roadside assistance for unexpected breakdowns",
      icon: <FaHeadset className="text-blue-600 text-3xl" />,
      benefits: [
        "Available 24/7",
        "Quick response time",
        "On-the-spot repairs",
        "Towing service if needed",
        "Nationwide coverage",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: "tracking",
      title: "Service Tracking",
      description: "Real-time updates on your bike's service status",
      icon: <FaMapMarkedAlt className="text-blue-600 text-3xl" />,
      benefits: [
        "Real-time service status",
        "Mechanic location tracking",
        "Estimated completion time",
        "Service history records",
        "Digital service reports",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: "scheduling",
      title: "Smart Scheduling",
      description:
        "Book services at your convenience with our easy scheduling system",
      icon: <FaCalendarCheck className="text-blue-600 text-3xl" />,
      benefits: [
        "Online booking system",
        "Flexible time slots",
        "Reminders & notifications",
        "Reschedule with ease",
        "Priority booking options",
      ],
      image: "/api/placeholder/400/300",
    },
  ];

  const handleFeatureClick = (feature: ServiceFeature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
          Premium Two-Wheeler Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Expert maintenance and repair services tailored for all types of
          motorcycles and scooters
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {serviceFeatures.map((feature) => (
          <div
            key={feature.id}
            onClick={() => handleFeatureClick(feature)}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center mb-4 text-black">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold ">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {feature.benefits.slice(0, 3).map((benefit, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {benefit}
                  </span>
                ))}
                {feature.benefits.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    +{feature.benefits.length - 3} more
                  </span>
                )}
              </div>
            </div>
            <div className="bg-gray-50 p-4 flex justify-between items-center group-hover:bg-blue-50 transition-colors duration-300">
              <span className="text-blue-600 font-medium">View Details</span>
              <FaInfoCircle className="text-blue-600" />
            </div>
          </div>
        ))}
      </div>
      {selectedFeature && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
            <div className="bg-blue-600 p-4 flex justify-between items-center">
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
                      <li key={idx} className="flex items-start text-black">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TwoWheelerService;
