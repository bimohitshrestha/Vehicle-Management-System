import * as React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// const customerServiceData = {
//   description:
//     "Have questions? Our support team is available 24/7 to assist you with any inquiries or concerns.",
//   phone: "+977 9876543210",
//   email: "support@vehicle.com",
//   location: "Kathmandu, Nepal",
// };

const customerServiceData = [
  {
    icon: <FaPhone className="h-5 w-5" />,
    name: "Call Us",
    title: "+977 9800000000",
    link: "",
    bgColor: "bg-green-50",
    color: "bg-green-500",
  },
  {
    icon: <FaEnvelope className="h-5 w-5" />,
    name: "Email us",
    title: "support@vehicle.com",
    link: "",
    bgColor: "bg-rose-50",
    color: "bg-rose-500",
  },
  {
    icon: <IoLocation className="w-5 h-5" />,
    name: "Location",
    title: "Kathmandu,Nepal",
    link: "",
    bgColor: "bg-blue-30",
    color: "bg-blue-500",
  },
];

const socialMediaData = [
  {
    icon: <FaFacebook className="w-6 h-6" />,
    title: "Facebook",
    link: "https://www.facebook.com/",
    bgColor: "bg-blue-500",
    color: "text-blue-500",
  },
  {
    icon: <FaInstagram className="w-6 h-6" />,
    title: "Instagram",
    link: "https://www.instagram.com/",
    bgColor: "bg-rose-500",
    color: "text-rose-500",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/",
    bgColor: "bg-blue-700",
    color: "text-blue-700",
  },
  {
    icon: <BsTwitterX className="w-6 h-6" />,
    title: "Twitter",
    link: "https://www.twitter.com/",
    bgColor: "bg-black",
    color: "text-black",
  },
];

const CustomerSupport = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("contact");

  const toggleSupport = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSupport}
        className="fixed bottom-6 right-6 z-50 bg-custom-secondary text-black rounded-full p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
        aria-label={isOpen ? "Close support" : "Open support"}
      >
        {isOpen ? (
          <GiTireIronCross className="h-8 w-8" />
        ) : (
          <LuMessageSquareMore className="h-8 w-8" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed bottom-28 right-6 z-40 rounded-lg bg-gray-50 shadow-2xl w-96 overflow-hidden transition-all"
          style={{
            animation: "slideIn 0.3s ease-out forwards",
          }}
        >
          <div className="px-4 pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Need Help?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Have questions? Our support team is available 24/7 to assist you
              with any inquiries or concerns.
            </p>

            <div className="flex bg-gray-200 p-1 rounded-full mb-4">
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === "contact"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setActiveTab("social")}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === "social"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Social
              </button>
            </div>
          </div>

          <div className="p-4">
            {activeTab === "contact" && (
              <div className="space-y-4">
                {customerServiceData.map((value, index) => (
                  <a href={`tel:${value.link}`} className="block" key={index}>
                    <div
                      className={`flex items-center p-3 ${value.bgColor} rounded-lg transition-colors 
                        hover:bg-red-100`}
                    >
                      <div
                        className={`${value.color} text-white p-3 rounded-md`}
                      >
                        {/* <FaPhone className="h-5 w-5" /> */}
                        {value.icon}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-semibold text-gray-900">
                          {value.name}
                        </p>
                        <p className="text-gray-700">{value.title}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {activeTab === "social" && (
              <div>
                <p className="text-center text-gray-700 mb-4">
                  Connect with us on social media
                </p>
                <div className="flex items-center justify-center gap-7">
                  {socialMediaData.map((value, index) => (
                    <a
                      href={value.link}
                      target="_blank"
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`${value.bgColor} text-white p-2 rounded-lg mb-2 hover:shadow-md transition-all`}
                        title={value.title}
                      >
                        {value.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerSupport;
