"use client";
import { useState } from "react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F9F3F0] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className=" font-bold ml-2 text-xl">VehicleManager</span>
            </div>
          </div>

          <div className="flex items-center justify-center flex-1">
            <div className="hidden md:flex md:space-x-4 text-base font-medium ">
              <Link
                href="/homepage"
                className="px-3 py-2 rounded-md  text-black hover:text-[#CB9173] cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/homepage/about"
                className="  px-3 py-2 rounded-md text-black hover:text-[#CB9173] cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/homepage/service"
                className=" px-3 py-2 rounded-md text-black hover:text-[#CB9173] cursor-pointer"
              >
                Service
              </Link>
              <Link
                href="/homepage/contact-us"
                className="px-3 py-2 rounded-md text-black hover:text-[#CB9173] cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-3 relative">
              <div className="flex items-center">
                <button className="bg-blue-700 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    A
                  </div>
                </button>
                <span className="ml-2  text-sm hidden md:block">Admin</span>
              </div>
            </div>

            <div className="ml-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-[#8E443D] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <GiHamburgerMenu className="block h-6 w-6" />
                ) : (
                  <RxCross1 className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <Link
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium "
            >
              Dashboard
            </Link>
            <Link
              href="/homepage/about"
              className=" text-black hover:text-[#CB9173] block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/homepage/service"
              className="block px-3 py-2 text-black hover:text-[#CB9173]  rounded-md text-base font-medium"
            >
              Service
            </Link>

            <Link
              href="/homepage/contact-us"
              className="block px-3 py-2 text-black hover:text-[#CB9173]  rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
