import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? Reach out — our team is here to help you ride better, faster, and further.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="flex flex-col md:flex-row justify-center items-start gap-12 px-6 pb-24 container mx-auto">
        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-6 text-left">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black outline-black outline-2 text-white font-semibold rounded-md hover:bg-gray-900 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="md:w-1/3 text-left space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            Visit our shop or reach us online for any inquiries, support, or partnership opportunities.
          </p>

          <div className="text-gray-800 space-y-2">
            <p><strong>Address:</strong> 123 RideZone Ave, Metro City</p>
            <p><strong>Email:</strong> support@ridezone.com</p>
            <p><strong>Phone:</strong> +63 912 345 6789</p>
          </div>
        </div>
      </section>
    </div>
  );
}
