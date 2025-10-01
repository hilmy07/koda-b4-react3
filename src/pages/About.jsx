import React from "react";
import {
  FaBars,
  FaBookOpen,
  FaTv,
  FaMobileAlt,
  FaDatabase,
  FaCube,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const services = [
  {
    icon: <FaBars className="text-pink-500 text-3xl" />,
    title: "Business Strategy",
    desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FaBookOpen className="text-pink-500 text-3xl" />,
    title: "App Development",
    desc: "We'll handle everything from app development process until it's time to make your project live.",
  },
  {
    icon: <FaTv className="text-pink-500 text-3xl" />,
    title: "Business Strategy",
    desc: "We'll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.",
  },
  {
    icon: <FaMobileAlt className="text-pink-500 text-3xl" />,
    title: "Mobile App",
    desc: "Using our expertise in mobile app development to create beautiful pixel-perfect designs.",
  },
  {
    icon: <FaDatabase className="text-pink-500 text-3xl" />,
    title: "SEO Optimisation",
    desc: "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!",
  },
  {
    icon: <FaCube className="text-pink-500 text-3xl" />,
    title: "UX Consulting",
    desc: "A UX consultant is responsible for many of the same tasks as a UX designer, but typically.",
  },
];

function About() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1c1e26] min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-pink-500 uppercase tracking-wide font-semibold mb-2">
            Features
          </h2>
          <h1 className="text-4xl font-bold text-white mb-12">What I Do</h1>

          {/* Grid Services */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#242731] p-6 rounded-xl shadow-lg text-left hover:shadow-xl transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
