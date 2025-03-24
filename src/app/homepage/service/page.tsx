"use client";
import Head from "next/head";

import {
  FaWrench,
  FaTachometerAlt,
  FaGasPump,
  FaChartLine,
  FaShieldAlt,
  FaRoad,
} from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const featuresData = [
  {
    title: "Real-Time Tracking",
    description:
      "Track your fleet with precision GPS monitoring, geofencing, and route optimization. Get instant alerts for unauthorized usage or route deviations.",
    icon: <FaTachometerAlt className="text-4xl text-white" />,
    color: "from-blue-400 to-indigo-600",
    extraInfo: "Precise location tracking with 99.9% accuracy",
    benefits: [
      "Reduce unauthorized vehicle use by up to 92%",
      "Optimize routes to save up to 15% on fuel costs",
      "Respond to emergencies with real-time location data",
    ],
  },
  {
    title: "Maintenance Scheduling",
    description:
      "Automated service reminders, digital inspection checklists, and maintenance history tracking to maximize vehicle lifespan and minimize downtime.",
    icon: <FaWrench className="text-4xl text-white" />,
    color: "from-purple-500 to-pink-600",
    extraInfo: "Extend vehicle lifespan by up to 40%",
    benefits: [
      "Reduce maintenance costs by up to 23%",
      "Prevent costly breakdowns with predictive analytics",
      "Maintain comprehensive service records for compliance",
    ],
  },
  {
    title: "Fuel Consumption Monitoring",
    description:
      "Analyze usage patterns, identify fuel theft, and optimize routes to reduce consumption by up to 20%. Track fuel expenses across your entire fleet.",
    icon: <FaGasPump className="text-4xl text-white" />,
    color: "from-green-500 to-teal-600",
    extraInfo: "Average 20% reduction in fuel expenses",
    benefits: [
      "Detect fuel theft with anomaly detection algorithms",
      "Compare fuel efficiency across vehicle models",
      "Forecast fuel budgets with advanced analytics",
    ],
  },
  {
    title: "Performance Analytics",
    description:
      "Comprehensive dashboards with customizable KPIs to measure driver behavior, vehicle efficiency, and operational costs. Make data-driven decisions.",
    icon: <FaChartLine className="text-4xl text-white" />,
    color: "from-orange-500 to-red-600",
    extraInfo: "Custom reports tailored to your business needs",
    benefits: [
      "Identify top-performing drivers and vehicles",
      "Uncover hidden cost savings opportunities",
      "Export reports for stakeholder presentations",
    ],
  },
  {
    title: "Driver Safety",
    description:
      "Monitor harsh braking, rapid acceleration, and speeding events to improve safety and reduce accidents. Lower insurance premiums through better practices.",
    icon: <FaShieldAlt className="text-4xl text-white" />,
    color: "from-red-500 to-rose-600",
    extraInfo: "Reduce accident rates by up to 35%",
    benefits: [
      "Decrease insurance premiums with safety data",
      "Implement targeted driver training programs",
      "Receive real-time alerts for dangerous driving patterns",
    ],
  },
  {
    title: "Trip Management",
    description:
      "Plan, assign, and track trips while automatically recording mileage for regulatory compliance and billing. Streamline dispatching operations.",
    icon: <FaRoad className="text-4xl text-white" />,
    color: "from-cyan-500 to-blue-600",
    extraInfo: "Automate trip records for tax compliance",
    benefits: [
      "Dispatch the nearest vehicle to service calls",
      "Track business vs. personal mileage automatically",
      "Generate client billing based on actual trip data",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>VehicleSync Pro - Fleet Management Services</title>
        <meta
          name="description"
          content="Manage your vehicle fleet efficiently with our comprehensive Vehicle Management System"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-indigo-700 py-1 px-4 rounded-full text-sm font-semibold inline-block mb-4 uppercase">
              powerful features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Smart Tools for Modern Fleet Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive fleet management solution provides everything
              you need to optimize operations, reduce expenses, and keep your
              vehicles running at peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 relative transition-all duration-500 ease-out hover:shadow-xl hover:scale-105"
              >
                <div className="relative p-8 z-10 transition-all duration-500 ease-out">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center bg-opacity-10 group-hover:opacity-0 transition-opacity duration-500 ease-out bg-gradient-to-r ${feature.color} text-indigo-600`}
                    >
                      {feature.icon}
                    </div>
                    <div className="transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-3 ">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-500 ease-out group-hover:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 transition-colors duration-500 ease-out group-hover:text-white group-hover:text-opacity-90">
                        {feature.description}
                      </p>
                    </div>

                    <div className="absolute top-0 left-0 right-0 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="font-medium text-indigo-700 mb-4 ">
                        {feature.extraInfo}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">
                              <IoMdCheckmark size={20} />
                            </span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Trusted By Many
              </h2>
              <p className="text-lg text-gray-600">
                Join thousandsof companies who trust our platform to manage
                their fleets
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "1000+", label: "Vehicles Tracked" },
                { value: "98%", label: "Customer Retention" },
                { value: "30%", label: "Average Cost Reduction" },
                { value: "24/7", label: "Customer Support" },
              ].map((data, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {data.value}
                  </div>
                  <div className="text-gray-600">{data.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your Fleet?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get started today with a personalized demo. Our team will show you
              how our platform can address your specific fleet management
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
                Schedule Demo
              </button>
              <button className="bg-transparent border-2 border-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300">
                View Pricing
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-12 mt-20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sales Inquiries
                </h3>
                <p className="text-indigo-600">sales@vehiclesyncpro.com</p>
                <p className="text-gray-600">1-800-FLEET-PRO</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Support
                </h3>
                <p className="text-indigo-600">support@vehiclesyncpro.com</p>
                <p className="text-gray-600">Available 24/7</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Headquarters
                </h3>
                <p className="text-gray-700">Kathmandu</p>
                <p className="text-gray-600">123, Baneshwor </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
