'use client';

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section className="bg-darkBlue-900 pt-24 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-white text-center text-4xl md:text-6xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-white text-opacity-70 text-center text-lg mb-20 max-w-2xl mx-auto">
          Our team is here to help you access capital and grow on your terms. Check out the resources below and
          reach out directly if you have any questions.
        </p>

        {/* Contact Form */}
        <div className="rounded-2xl border border-white/20 p-3 bg-white/10 max-w-xl mx-auto">
          <div className="rounded-2xl bg-darkBlue-900 w-full p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-8">
                <label className="block text-white text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 h-32 resize-none"
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}