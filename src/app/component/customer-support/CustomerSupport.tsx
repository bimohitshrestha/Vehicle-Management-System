import * as React from "react";
import { CiLocationOn } from "react-icons/ci";

import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { LuMessageSquareMore } from "react-icons/lu";

const customerService = {
  description:
    "Have questions? Our support team is available 24/7 to assist you with any inquiries or concerns.",
  phone: {
    title: "+977 9876543210",
  },
  email: {
    title: "support@vehicle.com",
  },
  location: {
    title: "Kathmandu,Nepal",
  },
  socialMedia: {
    facebook: "",
    whatsapp: "",
    instagram: "",
  },
};

const CustomerSupport = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [activeTab, setActiveTab] = React.useState("contact");

  const toggleSupport = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSupport}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-indigo-600 text-white rounded-full p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
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
          className="fixed bottom-28 right-6 z-40 bg-white rounded-lg shadow-2xl w-96 overflow-hidden transition-all"
          style={{
            animation: "slideIn 0.3s ease-out forwards",
          }}
        >
          <div className="bg-gray-50 px-4 pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Need Help?</h2>
            <p className="text-sm text-gray-600 mb-4">
              {customerService.description}
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
                <a
                  href={`tel:${customerService.phone.title}`}
                  className="block"
                >
                  <div className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-100">
                    <div className="bg-green-500 text-white p-3 rounded-md">
                      <FaPhone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">
                        Call Us
                      </p>
                      <p className="text-gray-700">
                        {customerService.phone.title}
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${customerService.email.title}`}
                  className="block"
                >
                  <div className="flex items-center p-3 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors border border-rose-100">
                    <div className="bg-rose-500 text-white p-3 rounded-md">
                      <FaEnvelope className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">
                        Email Us
                      </p>
                      <p className="text-gray-700">
                        {customerService.email.title}
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${customerService.location.title}`}
                  className="block"
                >
                  <div className="flex items-center p-3 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors border border-teal-100">
                    <div className="bg-teal-500 text-white p-3 rounded-md">
                      <CiLocationOn className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">
                        Location
                      </p>
                      <p className="text-gray-700 ">
                        {customerService.location.title}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {activeTab === "social" && (
              <div>
                <p className="text-center text-gray-700 mb-4">
                  Connect with us on social media
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <a href="" className="flex flex-col items-center">
                    <div className="bg-blue-600 text-white p-3 rounded-lg mb-2 hover:shadow-md transition-all">
                      <FaFacebook className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-gray-600">Facebook</span>
                  </a>
                  <a href="" className="flex flex-col items-center">
                    <div className="bg-green-500 text-white p-3 rounded-lg mb-2 hover:shadow-md transition-all">
                      <FaWhatsapp className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-gray-600">WhatsApp</span>
                  </a>
                  <a href="" className="flex flex-col items-center">
                    <div className="bg-pink-600 text-white p-3 rounded-lg mb-2 hover:shadow-md transition-all">
                      <FaInstagram className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-gray-600">Instagram</span>
                  </a>
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
