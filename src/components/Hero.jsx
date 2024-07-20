import { heroBackground, robot } from "../assets";
import Section from "./Section";
import Heading from "./Heading";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import { profile } from "../assets";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"  id="about"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2.875rem] md:mb-20 lg:mb-[10.25rem] mt-[-2rem] lg:mt-15">
          <h1 className="h1 text-[1.5rem] lg:text-[4rem]">SIJIN SAJI JOHN</h1>
          <h1 className="h1 lg:mb-6 mt-[-1rem] text-[1.5rem] lg:text-[4rem] lg:mt-[1rem]">
            FRONTEND DEVELOPER
          </h1>
          <p className="body-1 max-w-4xl mx-auto mb-6 text-n-2 lg:mb-8">
            Passionate about crafting responsive and visually stunning web
            applications to life with clean, efficient, and modern code.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-6xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] rounded-t-[0.9rem]" />

              <div className="rounded-b-[0.9rem] overflow-hidden">
                <p className="text-center text-xl mt-4">Explore</p>
                <Heading
                  className="md:max-w-md lg:max-w-2xl text-center"
                  title="About Me"
                />
                <div className="about mt-[-1.5rem] md:mt-[-3rem] md:mx-20 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 md:mb-16">
                  <img
                    src={profile}
                    alt="profile"
                    className="rounded-lg size-44 md:size-72"
                  />
                  <p className="text-justify text-sm md:text-base mx-8">
                    I am a passionate Frontend Developer proficient in HTML,
                    CSS, JavaScript, Sass, Tailwind CSS, and React. With a focus
                    on creating intuitive and visually appealing web
                    applications, I excel in transforming design concepts into
                    responsive and user-friendly interfaces. Driven by a
                    commitment to clean and efficient coding practices, I
                    leverage my expertise in Tailwind CSS to deliver sleek and
                    optimized designs. <br />
                    <br /> I actively contribute to the tech community through
                    engaging posts on LinkedIn, where I share insights and humor
                    to foster connections and discussions. As a dedicated
                    professional, I am enthusiastic about continuous learning
                    and seek opportunities to further develop my skills in
                    frontend development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-[34%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[170%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
