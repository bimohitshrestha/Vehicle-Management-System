import Head from "next/head";
import { BiBarChart, BiMapPin, BiShield } from "react-icons/bi";
import { BsArrowRight, BsTools } from "react-icons/bs";
import { FaDollarSign, FaGauge } from "react-icons/fa6";

const Benefits = () => {
  const benefits = [
    {
      title: "Increased Efficiency",
      description:
        "Manage your fleet with ease, optimizing routes, tracking vehicles, and scheduling maintenance all in one place.",
      icon: <FaGauge className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Cost Savings",
      description:
        "Save on fuel costs, reduce maintenance expenses, and make data-driven decisions to optimize your fleet's performance.",
      icon: <FaDollarSign className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track your vehicles in real-time, ensuring safety, accountability, and timely deliveries.",
      icon: <BiMapPin className="w-12 h-12 text-red-600" />,
    },
    {
      title: "Enhanced Safety",
      description:
        "Monitor driver behavior, receive alerts for risky activities, and ensure compliance with safety regulations.",
      icon: <BiShield className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Easy Maintenance Scheduling",
      description:
        "Automate maintenance reminders to keep your fleet in top condition, reducing downtime and extending vehicle life.",
      icon: <BsTools className="w-12 h-12 text-orange-600" />,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Leverage detailed analytics to make smarter decisions about your fleet, improving overall productivity.",
      icon: <BiBarChart className="w-12 h-12 text-teal-600" />,
    },
  ];

  return (
    <div>
      <Head>
        <title>Benefits - Vehicle Management System</title>
        <meta
          name="description"
          content="The benefits of using our vehicle management system"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen mb-16">
        {/* <div className="w-full bg-blue-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">
              Transform Your Fleet Management
            </h1>
            <p className="text-xl max-w-2xl">
              Discover how our comprehensive vehicle management system can
              revolutionize your operations and boost your bottom line.
            </p>
          </div>
        </div> */}

        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Six Ways Our System Benefits You
          </h2>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } `}
              >
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-white p-6 rounded-full shadow-lg">
                    {benefit.icon}
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-medium flex items-center group"
                  >
                    Learn more
                    <BsArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Benefits;
