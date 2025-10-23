import { useState } from "react";
import HomePageBG from "../assets/images/homepage_bg.jpg";
import AboutImage from "../assets/images/about.jpg";
import Feature1 from "../assets/images/g3.jpg";
import Feature2 from "../assets/images/prod4.jpg";
import Feature3 from "../assets/images/prod3.jpg";
import Gallery1 from "../assets/images/gallery1.jpg";
import Gallery2 from "../assets/images/gallery2.jpg";
import Gallery3 from "../assets/images/gallery3.jpg";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col pt-15 min-h-screen w-full bg-white text-black">
            {/* Hero Section */}
            <section
                className="relative flex flex-col items-center justify-center text-center bg-center bg-cover"
                style={{ backgroundImage: `url(${HomePageBG})` }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                {/* Add min-h to prevent overlap */}
                <div className="z-10 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-24 sm:py-32">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4">
                        Redefine <span className="text-gray-400">Your Ride</span>
                    </h2>
                    <p className="text-md sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-xl">
                        Precision-engineered bicycles and performance gear. Designed for riders who value speed, simplicity, and style.
                    </p>
                    <a href="#" className="inline-block px-8 py-3 rounded-full font-semibold tracking-wide bg-transparent text-gray-800 border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300" > Explore Bikes </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 sm:py-24 bg-gray-50 w-full">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src={AboutImage} alt="About Us" className="rounded-xl shadow-lg w-full" />
                    </div>
                    <div className="md:w-1/2 space-y-4 sm:space-y-6">
                        <h3 className="text-3xl sm:text-4xl font-bold">About Our Bikes</h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Our bicycles are built with precision engineering and top-quality materials, ensuring every ride is smooth, fast, and safe. Join thousands of riders who trust our brand for performance and style.
                        </p>
                        <a
                            href="#"
                            className="inline-block border-2 border-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-24 w-full">
                <div className="max-w-6xl mx-auto px-6 text-center space-y-8 sm:space-y-12">
                    <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold">Why Choose Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 sm:space-y-4">
                            <img src={Feature1} alt="Feature 1" className="w-full h-40 object-cover rounded-md" />
                            <h4 className="text-lg sm:text-xl font-semibold">High Performance</h4>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Our bikes are designed for speed and endurance, perfect for professional riders.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 sm:space-y-4">
                            <img src={Feature2} alt="Feature 2" className="w-full h-40 object-cover rounded-md" />
                            <h4 className="text-lg sm:text-xl font-semibold">Stylish Design</h4>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Sleek, modern designs that turn heads while providing top-notch functionality.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 sm:space-y-4">
                            <img src={Feature3} alt="Feature 3" className="w-full h-40 object-cover rounded-md" />
                            <h4 className="text-lg sm:text-xl font-semibold">Durable & Reliable</h4>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Built to last, our bikes handle all terrains and weather conditions with ease.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 sm:py-24 bg-gray-50 w-full">
                <div className="max-w-6xl mx-auto px-6 text-center space-y-8 sm:space-y-12">
                    <h3 className="text-3xl sm:text-4xl font-bold">Our Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        <img src={Gallery1} alt="Gallery 1" className="rounded-xl object-cover h-64 w-full" />
                        <img src={Gallery2} alt="Gallery 2" className="rounded-xl object-cover h-64 w-full" />
                        <img src={Gallery3} alt="Gallery 3" className="rounded-xl object-cover h-64 w-full" />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-24 bg-black text-white text-center w-full">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Ride?</h3>
                <p className="text-sm sm:text-lg mb-4 sm:mb-6">
                    Discover your perfect bike today. Join our community of passionate riders.
                </p>
                <button className="inline-block bg-white text-black px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
                    Shop Now
                </button>
            </section>
        </div>
    );
}
