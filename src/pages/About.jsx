import { useState } from "react";
import WorkshopImage from "../assets/images/g3.jpg"; // Replace with your own image

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-black">

      {/* About Section */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 place-items-center">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded with a passion for performance and simplicity, RideZone empowers every rider — from city commuters to trail explorers. 
            Our bicycles are precision-engineered for style, speed, and reliability.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every frame we create is a commitment to quality. We believe in the craft, the feel of the ride, and in gear that pushes boundaries.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end w-full">
          <img
            src={WorkshopImage}
            alt="Bicycle Workshop"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-black text-white py-24 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
            “We don’t just build bicycles — we build experiences that redefine the ride.”
          </h3>
          <p className="text-gray-400 text-lg">
            Every curve, weld, and detail reflects our pursuit of excellence.
          </p>
        </div>
      </section>

    </div>
  );
}
