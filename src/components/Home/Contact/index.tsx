"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fqj9ved", // <-- Replace with your EmailJS service ID
        "template_zkldpj6", // <-- Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "4pQjO0mcoGzcUF6-9" // <-- Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section className="bg-simple-bg py-20 relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10">
      <div className="container mx-auto px-4 relative z-10 lg:max-w-screen-md">
        <h3 className="text-center text-white text-3xl lg:text-5xl font-semibold mb-6">
          Let’s Talk
        </h3>
        <p className="text-center text-white/40 text-lg font-normal mb-12">
          Have questions, feedback, or partnership ideas? We’d love to hear from
          you.
        </p>

        {sent ? (
          <p className="text-center text-green-400 text-lg font-medium">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-6 shadow-2xl"
          >
            <div>
              <label className="block text-white mb-2 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2 text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
