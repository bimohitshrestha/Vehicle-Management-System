// import React from "react";
// import { BiTimeFive } from "react-icons/bi";
// import { BsShieldCheck } from "react-icons/bs";
// import { FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
// import { FaChartLine, FaClock, FaUserClock } from "react-icons/fa6";

// const ChooseUs = () => {
//   const additionalFeatures = [
//     {
//       icon: <BiTimeFive size={24} />,
//       title: "Time-Saving",
//       description: "Save up to 3 hours compared to traditional shop visits",
//     },
//     {
//       icon: <BsShieldCheck size={24} />,
//       title: "Guaranteed Quality",
//       description: "All services backed by our satisfaction guarantee",
//     },
//     {
//       icon: <FaUserClock size={24} />,
//       title: "Expert Technicians",
//       description: "Certified professionals with 5+ years experience",
//     },
//     {
//       icon: <FaPhoneAlt size={24} />,
//       title: "Customer Support",
//       description: "Available 7 days a week for any questions",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-white rounded-xl p-8 shadow-md">
//         <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
//           Why Choose Our Service
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {additionalFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
//             >
//               <div className="flex items-start">
//                 <div className="text-indigo-600 mr-4">{feature.icon}</div>
//                 <div>
//                   <h4 className="font-bold text-gray-800 mb-1">
//                     {feature.title}
//                   </h4>
//                   <p className="text-sm text-gray-600">{feature.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-12 text-center">
//         <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-bold rounded-full hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1">
//           Book Your Service Now
//         </button>
//         <p className="mt-4 text-gray-600">
//           No obligations, cancel or reschedule anytime
//         </p>
//       </div>
//     </>
//   );
// };

import React, { useState } from "react";
import {
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaPhoneAlt,
  FaUserClock,
  FaRegLightbulb,
} from "react-icons/fa";

const ChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    {
      icon: <FaClock size={32} />,
      title: "Time-Saving Efficiency",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem veritatis labore minus. Magni molestias doloremque vel exercitationem, quae nemo sequi nulla quod fugiat quis odio excepturi, consequatur facilis sit.",
      color: "from-orange-400 to-amber-600",
      bgPattern: "bg-gradient-to-br from-amber-50 to-orange-100",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Premium Quality Guarantee",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem veritatis labore minus. Magni molestias doloremque vel exercitationem, quae nemo sequi nulla quod fugiat quis odio excepturi, consequatur facilis sit.",
      color: "from-emerald-400 to-teal-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-100",
    },
    {
      icon: <FaUserClock size={32} />,
      title: "Certified Expert Technicians",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem veritatis labore minus. Magni molestias doloremque vel exercitationem, quae nemo sequi nulla quod fugiat quis odio excepturi, consequatur facilis sit.",
      color: "from-blue-400 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100",
    },
    {
      icon: <FaPhoneAlt size={32} />,
      title: "24/7 Premium Support",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem veritatis labore minus. Magni molestias doloremque vel exercitationem, quae nemo sequi nulla quod fugiat quis odio excepturi, consequatur facilis sit.",
      color: "from-purple-400 to-violet-600",
      bgPattern: "bg-gradient-to-br from-purple-50 to-violet-100",
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Transparent Pricing Model",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem veritatis labore minus. Magni molestias doloremque vel exercitationem, quae nemo sequi nulla quod fugiat quis odio excepturi, consequatur facilis sit.",
      color: "from-rose-400 to-pink-600",
      bgPattern: "bg-gradient-to-br from-rose-50 to-pink-100",
    },

    {
      icon: <FaRegLightbulb size={32} />,
      title: "Innovative Solutions",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem veritatis labore minus. Magni molestias doloremque vel exercitationem, quae nemo sequi nulla quod fugiat quis odio excepturi, consequatur facilis sit.",
      color: "from-cyan-400 to-sky-600",
      bgPattern: "bg-gradient-to-br from-cyan-50 to-sky-100",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-10 relative overflow-hidden mb-16">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-indigo-600 to-violet-600 inline-block text-transparent bg-clip-text">
            The Premium Experience
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover why our clients consistently choose our services for their
            needs, and what sets us apart from the competition.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? `bg-gradient-to-r ${benefit.color} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {benefit.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`${benefits[activeIndex].bgPattern} p-8 rounded-2xl shadow-xl border border-white`}
          >
            <div
              className={`inline-flex bg-gradient-to-r ${benefits[activeIndex].color} p-4 rounded-xl shadow-lg text-white mb-6`}
            >
              {benefits[activeIndex].icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              {benefits[activeIndex].title}
            </h3>
            <p className="text-gray-700">{benefits[activeIndex].description}</p>
            <div className="mt-8">
              <button
                className={`px-6 py-3 rounded-lg bg-gradient-to-r ${benefits[activeIndex].color} text-white font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1`}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl mb-6 overflow-hidden shadow-inner">
              <div
                className={`w-full h-full flex items-center justify-center ${benefits[activeIndex].bgPattern}`}
              >
                <div
                  className={`text-6xl bg-gradient-to-r ${benefits[activeIndex].color} text-transparent bg-clip-text opacity-80`}
                >
                  {benefits[activeIndex].icon}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-black">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-nold mr-3">
                  {" "}
                  100%
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${benefits[activeIndex].color} w-full`}
                    ></div>
                  </div>
                </div>
                <span className="ml-3 text-sm font-medium">Satisfaction</span>
              </div>

              <div className="flex items-center text-black">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold mr-3">
                  5+
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${benefits[activeIndex].color} w-full`}
                    ></div>
                  </div>
                </div>
                <span className="ml-3 text-sm font-medium">
                  Years Expertise
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold mr-3">
                  24/7
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${benefits[activeIndex].color} w-full`}
                    ></div>
                  </div>
                </div>
                <span className="ml-3 text-sm font-medium text-black">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            Experience Premium Service Today
          </button>
          <p className="mt-4 text-gray-500 font-medium">
            Join thousands of satisfied customers who&apos;ve elevated their
            experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
