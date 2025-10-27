import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("✅ Thanks! Your message has been recorded.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  const v = localStorage.getItem("pqc-dark");
  const bgColor = v === null ? "bg-white" : "bg-dark";

  return (
    <section className={`w-full py-20 px-6 ${bgColor} flex justify-center`}>
      <div className="w-full max-w-6xl bg-white grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
        {/* LEFT SIDE – Contact Info */}
        <div className="bg-blue-50 p-10 flex flex-col justify-center space-y-10">
          {/* Location */}
          <div className="flex items-center gap-6">
            <div className="bg-blue-600 p-5 rounded">
              <FiMapPin className="text-white text-3xl" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Our Location</h3>
              <p className="text-gray-600">123 Street, New York, USA</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-center gap-6">
            <div className="bg-rose-500 p-5 rounded">
              <FiPhone className="text-white text-3xl" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Call Us</h3>
              <p className="text-gray-600">+012 345 6789</p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-center gap-6">
            <div className="bg-yellow-400 p-5 rounded">
              <FiMail className="text-white text-3xl" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Email Us</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Message Form */}
        <div className="p-10">
          <p className="text-red-500 font-semibold text-sm tracking-wider">
            NEED HELP?
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            Send Us A Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border-b border-gray-300 focus:border-blue-600 outline-none py-2"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border-b border-gray-300 focus:border-blue-600 outline-none py-2"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border-b border-gray-300 focus:border-blue-600 outline-none py-2 w-full"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              className="border-b border-gray-300 focus:border-blue-600 outline-none py-2 w-full resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>

            {status && <p className="text-green-600 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
