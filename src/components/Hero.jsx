import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import { pfp } from "../constants";

const Hero = () => {
  const el = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I'm a full-stack dev",
        "I'm A Tech Freak",
        "GuyWhoEnjoysCoffee.jsx",
        `<ButLovesCodingEvenMore />`,
      ],
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
      loopCount: Infinity,
      contentType: null,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 h-screen max-w-7xl mx-auto flex sm:flex-row flex-col-reverse items-center justify-center gap-20 pt-20">
        <div>
          <div className="flex gap-3 select-none">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>
            <div className="lg:w-[32rem]">
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
                Hi, I'm <br />
                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Alexis Murer
                </span>
              </h1>
              <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100 max-w-lg">
                <span ref={el} />
              </p>
            </div>
          </div>
          <div className="flex">
            <a
              href="#about"
              className="w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
            >
              <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
                <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
              </div>
              <p>Scroll Down</p>
            </a>
          </div>
        </div>
        <Tilt>
          <div className="bg-gradient">
            <div className="animated-circle shadow-card">
              <img className="avatar" src={pfp} />
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
