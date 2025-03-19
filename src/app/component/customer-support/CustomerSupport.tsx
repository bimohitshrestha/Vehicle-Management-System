import * as React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const CustomerSupport = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="absolute bottom-20 right-6 w-80 bg-white rounded-lg shadow-lg p-6 z-10 border border-gray-200"
          style={{ zIndex: 1000 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="mb-4 text-gray-600">
            If you need assistance, feel free to reach out through the methods
            below.
          </p>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Image
                src="/path-to-phone-icon.svg"
                alt="Phone"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>
            <div className="flex items-center mb-2">
              <Image
                src="/path-to-email-icon.svg"
                alt="Email"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-gray-700">support@example.com</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xl font-medium text-blue-900">Social Media</p>
            <div className="flex items-center mt-2 space-x-4">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61559957870032"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white transition hover:bg-blue-600"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://wa.me/9779849623247"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white transition hover:bg-green-600"
              >
                <span className="sr-only">WhatsApp</span>
                <BsWhatsapp className="text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/bookvenuenepal/"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F52559] text-white transition hover:bg-[#F52575]"
              >
                <span className="sr-only">Instagram</span>
                <BsInstagram className="text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/91116558/admin/feed/posts/"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white transition hover:bg-blue-800"
              >
                <span className="sr-only">LinkedIn</span>
                <LiaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <Image src="/cross.svg" alt="Close menu" width={20} height={20} />
          </button>
        </div>
      )}

      <button
        type="button"
        className="z-50 fixed bottom-6 right-6 shadow-2xl bg-blue-400 h-16 w-16 rounded-full flex items-center justify-center transition-all hover:bg-blue-500"
        onClick={handleClick}
        aria-controls={isMenuOpen ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? "true" : undefined}
      >
        <Image
          src={isMenuOpen ? "/cross.svg" : "/support.svg"}
          alt="Customer Support"
          height={30}
          width={30}
          className="transition-all"
        />
      </button>
    </>
  );
};

export default CustomerSupport;
