"use client";
import { useState } from "react";
import { FaFacebook, FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail, MdCheck } from "react-icons/md";
import InputField from "@/app/component/Field/InputField";
import SelectField from "@/app/component/Field/SelectField";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <CiLocationOn size={28} className="text-blue-600" />,
      title: "Address",
      content: ["123 Business Avenue", "Kathmandu, Nepal"],
      bgColor: "bg-blue-50",
    },
    {
      icon: <FaPhone className="text-green-600" size={28} />,
      title: "Phone",
      content: ["+977 987-654-3210", "Sun-Fri, 10am-5pm NPT"],
      bgColor: "bg-green-50",
    },
    {
      icon: <MdEmail className="text-rose-500" size={24} />,
      title: "Email",
      content: ["support@vehicle.com", "We respond within 24 hours"],
      bgColor: "bg-rose-50",
    },
  ];

  const socialLinks = [
    {
      icon: <BsTwitterX size={20} />,
      color: "bg-black",
      url: "#",
    },
    {
      icon: <FaLinkedin size={20} />,
      color: "bg-blue-700 hover:bg-blue-800",
      url: "#",
    },
    {
      icon: <FaFacebook size={20} />,
      color: "bg-blue-600 hover:bg-blue-700",
      url: "#",
    },
    {
      icon: <FaInstagram size={20} />,
      color: "bg-pink-600 hover:bg-pink-700",
      url: "#",
    },
    {
      icon: <FaGithub size={20} />,
      color: "bg-teal-600 hover:bg-teal-700",
      url: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white ">
      <main className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6 ">Connect With Us</h2>

              <div className="space-y-6 mb-10">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${method.bgColor} p-2 rounded-full`}>
                      {method.icon}
                    </div>
                    <div className="">
                      <h3 className="text-lg font-medium mb-1">
                        {method.title}
                      </h3>
                      {method.content.map((line, index) => (
                        <div key={index} className="text-white/80">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/20">
                <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} text-white p-2.5 rounded-full transition-all duration-300`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-center">
                  <div className="mx-auto bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <MdCheck size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : error ? (
                <div
                  className="bg-red-50 border border-red-200 rounded-lg text-red-700 p-4 mb-6"
                  role="alert"
                >
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <InputField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <InputField
                      label="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <InputField
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      placeholder="Enter Your Number"
                    />
                  </div>
                  <div>
                    <SelectField
                      label="Select a Reason"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      options={[
                        "General Inquiry",
                        "Technical Support",
                        "Billing Question",
                        "Feature Request",
                        "Partnership Opportunity",
                      ]}
                      required
                    />
                  </div>
                </div>

                <div>
                  <InputField
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    type="textarea"
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className={`inline-flex items-center px-6 py-3 bg-blue-600 border border-transparent rounded-lg font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition cursor-pointer ${
                      loading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <p className="text-sm text-gray-500">
                    We respect your privacy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
