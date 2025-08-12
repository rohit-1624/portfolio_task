"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-[#FEFAEE] text-black py-20 px-6 md:px-20 flex flex-col-reverse  md:flex-row items-center gap-12 md:gap-[128px]">
      
      <div className="relative flex-shrink-0 order-2 md:order-1">
        
        <div
          className="absolute -left-8 bottom-[-20px] w-[80%] h-[50%] rounded-full blur-3xl opacity-170 z-0"
          style={{
            background:
              "linear-gradient(135deg, #FCD68B 0%, #F9784C 50%, #9C356D 100%)",
          }}
        ></div>

        <div className="overflow-hidden rounded-[999px] relative z-10">
          <Image
            src="/images/user.png"
            alt="About Me"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex-1 max-w-xl order-2 md:order-1 z-10">
        <h5 className="text-[#F9784C] text-sm font-bold uppercase tracking-widest">
          About
        </h5>
        <h2 className="text-3xl md:text-4xl uppercase font-bold leading-tight mt-2">
          Crafting Unique Brand Experiences Since 2014
        </h2>
        <p className="mt-4 text-gray-500 text-base leading-relaxed">
          With a Visual Arts degree, my journey began in graphic design,
          crafting logos and marketing materials. Video editing followed, where
          meticulous attention to detail set my work apart, and I ventured into
          3D modeling for immersive experiences.
        </p>
        <button className="mt-6 border border-gray-500 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition">
          Schedule a Call
        </button>
      </div>
    </section>
  );
};

export default About;
