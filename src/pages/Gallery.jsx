import React from "react";

import GalleryImg1 from "../assets/images/g3.jpg";
import GalleryImg2 from "../assets/images/g2.jpg";
import GalleryImg3 from "../assets/images/g4.jpg";

export default function Gallery() {
    return (
        <div className="w-full h-screen overflow-y-scroll overflow-x-scroll snap-y snap-mandatory scrollbar-hide">
            {/* Image 1 */}
            <section
                className="h-full flex items-center justify-center snap-start relative"
                style={{
                    backgroundImage: `url(${GalleryImg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <h1 className="relative p-10 z-10 text-white text-5xl md:text-6xl font-bold tracking-tight">
                    Precision in Every Frame
                </h1>
            </section>
            {/* Image 3 */}
            <section
                className="h-screen w-full flex items-center justify-center snap-start relative"
                style={{
                    backgroundImage: `url(${GalleryImg3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <h1 className="relative p-10 z-10 text-white text-5xl md:text-6xl font-bold tracking-tight">
                    Comfort Meets Performance
                </h1>
            </section>

            {/* Image 2 */}
            <section
                className="h-screen w-full flex items-center justify-center snap-start relative"
                style={{
                    backgroundImage: `url(${GalleryImg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <h1 className="relative p-10 z-10 text-white text-5xl md:text-6xl font-bold tracking-tight">
                    Designed for the Ride
                </h1>
            </section>


        </div>
    );
}
