import Image from "next/image";
import React from "react";
import { BiBarChart } from "react-icons/bi";

import { RiMotorbikeLine } from "react-icons/ri";

const About = () => {
  // const features = [
  //   {
  //     icon: <BsCarFrontFill />,
  //     title: "Fleet Management",
  //     description:
  //       "Real-time tracking and management of your entire vehicle fleet",
  //   },
  //   {
  //     icon: <BiCalendar />,
  //     title: "Maintenance Scheduling",
  //     description:
  //       "Automated service reminders and maintenance history tracking",
  //   },
  //   {
  //     icon: <FaGauge />,
  //     title: "Fuel Monitoring",
  //     description:
  //       "Detailed fuel consumption analytics and optimization suggestions",
  //   },
  //   {
  //     icon: <BiShield />,
  //     title: "Driver Safety",
  //     description: "Advanced driver behavior monitoring and safety reports",
  //   },
  //   {
  //     icon: <BiChart />,
  //     title: "Analytics Dashboard",
  //     description: "Customizable reports and real-time performance metrics",
  //   },
  // ];

  const leadership = [
    {
      name: "lorem",
      position: "CEO",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ut iste sint ipsam consectetur magni explicab",
      imageUrl: "/bike1.png",
    },
    {
      name: "lorem",
      position: "CEO",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ut iste sint ipsam consectetur magni explicab",
      imageUrl: "/bike2.png",
    },
    {
      name: "lorem",
      position: "CEO",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ut iste sint ipsam consectetur magni explicab",
      imageUrl: "/bike3.png",
    },
  ];

  return (
    <div className="">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20">
            <div className="text-center">
              <h1 className="bg-custom-gradient text-transparent text-4xl bg-clip-text font-bold mb-4 uppercase">
                About Us
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
                Transforming vehicle management for businesses of all sizes with
                intelligent, data-driven solutions.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="#demo"
                  className="flex items-center px-4 py-2 bg-secondary   text-white font-medium  rounded-lg transition duration-300 cursor-pointer"
                >
                  Request Demo
                </a>

                <div className="ml-3 rounded-md shadow">
                  <a
                    href="#learn"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black  bg-white hover:bg-[#CB9173]/50 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative mb-10 lg:mb-0">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-xl">
              <div className="bg-[#CB9173]/50 h-80 rounded-lg flex items-center justify-center">
                <RiMotorbikeLine size={120} className="text-custom-secondary" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <div className="mt-6 text-lg text-gray-600 space-y-4">
              <p>
                We&apos;re dedicated to revolutionizing how businesses manage
                their vehicle fleets through innovative technology and
                actionable insights.
              </p>
              <p>
                Our mission is to provide an intuitive, efficient, and scalable
                solution that reduces operational costs, improves vehicle
                longevity, and enhances driver safety.
              </p>
              <p>
                We believe that smart fleet management isn&apos;t just about
                tracking vehicles—it&apos;s about empowering businesses to make
                data-driven decisions that impact their bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              From humble beginnings to industry whiteleadership, our journey
              has been shaped by our commitment to innovation and excellence.
            </p>
            <div className="mt-8 text-lg text-gray-600 space-y-4">
              <p>
                Founded in 2025, we started with a single mission: to simplify
                fleet management for businesses. Over the years, we have grown
                into an industry leader, continuously refining our products and
                services to meet the evolving needs of our clients.
              </p>
              <p>
                Our journey is one of resilience, passion, and a constant drive
                to push boundaries. We are excited for what the future holds and
                the continued opportunity to serve our customers with
                cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  Innovation
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  We embrace change and continually strive for innovation in our
                  solutions.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-medium text-gray-900">Integrity</h3>
                <p className="mt-2 text-base text-gray-600">
                  We operate with transparency, honesty, and the highest ethical
                  standards.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  Customer Focus
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Our customers are at the heart of everything we do, and we are
                  committed to delivering value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    {/* <img
                      src={leader.imageUrl}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    /> */}
                    <Image
                      src={leader.imageUrl}
                      alt={leader.name}
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {leader.position}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to get started?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-100">
                  Join hundreds of businesses already improving their fleet
                  operations. Our team is ready to help you transform your
                  vehicle management.
                </p>
                <div className="mt-8 flex md:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                    >
                      Contact Sales
                    </a>
                  </div>
                  <div className="ml-3 inline-flex rounded-md shadow">
                    <a
                      href="#free-trial"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
                    >
                      Start Free Trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full w-full flex items-center justify-center bg-blue-700 p-8">
                <BiBarChart size={180} className="text-white opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
