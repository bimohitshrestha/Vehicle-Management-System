import React from "react";
import { BiBarChart, BiCalendar, BiChart, BiShield } from "react-icons/bi";
import { BsArrowRight, BsCarFrontFill } from "react-icons/bs";
import { FaGauge } from "react-icons/fa6";
import Navbar from "../component/navbar/page";

const About = () => {
  const features = [
    {
      icon: <BsCarFrontFill />,
      title: "Fleet Management",
      description:
        "Real-time tracking and management of your entire vehicle fleet",
    },
    {
      icon: <BiCalendar />,
      title: "Maintenance Scheduling",
      description:
        "Automated service reminders and maintenance history tracking",
    },
    {
      icon: <FaGauge />,
      title: "Fuel Monitoring",
      description:
        "Detailed fuel consumption analytics and optimization suggestions",
    },
    {
      icon: <BiShield />,
      title: "Driver Safety",
      description: "Advanced driver behavior monitoring and safety reports",
    },
    {
      icon: <BiChart />,
      title: "Analytics Dashboard",
      description: "Customizable reports and real-time performance metrics",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-blue-600 tracking-tight mb-4">
                About <span className="text-blue-800">Us</span>
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
                Transforming vehicle management for businesses of all sizes with
                intelligent, data-driven solutions.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Request Demo
                  </a>
                </div>
                <div className="ml-3 rounded-md shadow">
                  <a
                    href="#learn"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
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
              <div className="bg-blue-100 h-64 rounded-lg flex items-center justify-center">
                <BsCarFrontFill size={120} className="text-blue-500" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <div className="mt-6 text-lg text-gray-600 space-y-4">
              <p>
                we're dedicated to revolutionizing how businesses manage their
                vehicle fleets through innovative technology and actionable
                insights.
              </p>
              <p>
                Our mission is to provide an intuitive, efficient, and scalable
                solution that reduces operational costs, improves vehicle
                longevity, and enhances driver safety.
              </p>
              <p>
                We believe that smart fleet management isn't just about tracking
                vehicles—it's about empowering businesses to make data-driven
                decisions that impact their bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Comprehensive solutions designed for your fleet management needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our platform combines simplicity with powerful capabilities
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-opacity-80">
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-800">
                      <BsArrowRight size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">
                      Easy to Use
                    </h4>
                    <p className="mt-1 text-blue-100">
                      Intuitive interface designed for users of all technical
                      abilities
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-800">
                      <BsArrowRight size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">
                      Data Security
                    </h4>
                    <p className="mt-1 text-blue-100">
                      Enterprise-grade security protocols protecting your fleet
                      data
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-800">
                      <BsArrowRight size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">
                      Cost Reduction
                    </h4>
                    <p className="mt-1 text-blue-100">
                      Proven to reduce operational costs by up to 30%
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 md:p-12">
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                      <BsArrowRight size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      24/7 Support
                    </h4>
                    <p className="mt-1 text-gray-600">
                      Dedicated customer success team ready to assist you
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                      <BsArrowRight size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Scalable Solution
                    </h4>
                    <p className="mt-1 text-gray-600">
                      Grows with your business from 5 to 5,000+ vehicles
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                      <BsArrowRight size={18} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Regular Updates
                    </h4>
                    <p className="mt-1 text-gray-600">
                      Continuous improvements based on customer feedback
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
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
      </div>
    </div>
  );
};

export default About;
