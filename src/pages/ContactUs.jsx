// pages/ContactUs.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [storedMessages, setStoredMessages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("contactMessages");
    if (saved) {
      setStoredMessages(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMsg = { ...form, time: new Date().toISOString() };

    const updated = [newMsg, ...storedMessages];
    localStorage.setItem("contactMessages", JSON.stringify(updated));
    setStoredMessages(updated);

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#1c1e26] text-white min-h-screen py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form area */}
            <div className="flex-1 max-w-lg bg-gray-800 p-10 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Contact Us
              </h2>
              {submitted && (
                <p className="text-green-400 text-center mb-4">
                  Terima kasih! Pesanmu telah disimpan.
                </p>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:outline-none transition"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:outline-none transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:outline-none transition"
                    placeholder="Your message..."
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 transition text-white py-3 rounded-md font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Daftar pesan */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6">Pesan yang disimpan</h3>
              {storedMessages.length === 0 ? (
                <p className="text-gray-400">Belum ada pesan.</p>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {storedMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800 p-6 rounded-lg border border-gray-600"
                    >
                      <p className="mb-1">
                        <strong>Nama:</strong> {msg.name}
                      </p>
                      <p className="mb-1">
                        <strong>Email:</strong> {msg.email}
                      </p>
                      <p className="mb-1">
                        <strong>Pesan:</strong> {msg.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-3">
                        {new Date(msg.time).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
