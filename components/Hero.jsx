"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-black text-white relative z-10 mt-0 h-[606px] sm:h-[650px] md:h-[606px] py-[96px] sm:py-[80px] px-[20px] sm:px-[16px] md:px-[56px]">
        {/* Left Content */}
        <div className="flex-1 w-full leading-none md:w-[1102px] sm:h-[600px] w-[343px] md:h-[285px] sm:h-[328px] text-center md:text-left mx-auto md:mx-0">
          <h5 className="mt-4 text-[16px] text-left sm:text-[18px] md:text-[20px] text-[#FEFAEE] font-bold">
            👋 HEY, I AM ERICA
          </h5>

          <h1
            className="text-[56px] md:text-[95px] leading-none font-medium text-left mt-2 break-words max-w-full"
            style={{
              background:
                "linear-gradient(151.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
          </h1>

          <div className="mt-6 flex sm:w-full gap-4 justify-center md:justify-start">
            <Link
              href="#portfolio"
              className="border border-[#FAF7F0] text-[#FAF7F0] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#FAF7F0] hover:text-black transition"
            >
              MY WORKS
            </Link>
            <Link
              href="#contact"
              className="bg-[#FAF7F0] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
            >
              LET'S TALK
            </Link>
          </div>
        </div>
      </section>


      {/* Gradient Section */}
      <section
        className="w-full py-20 sm:py-32 flex items-center justify-center relative z-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(342.27deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #171717 76.83%)",
        }}
      >
        {/* Fade effect */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Center Image */}
        <img
          src="/images/LogoWrapper.png"
          alt="Centered Image"
          className="w-64 sm:w-[32rem] md:w-[48rem] max-w-full h-auto object-contain relative z-20"
        />
      </section>
    </>
  );
};

export default Hero;
