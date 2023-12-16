import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center"
      >
        <p className={styles.sectionSubText}>My tools</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map((technology, index) => (
          <div className="w-15 h-15" key={technology.name}>
            <Tilt className="w-full">
              <motion.div
                variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-full shadow-card"
              >
                <div
                  options={{ max: 45, scale: 1, speed: 450 }}
                  className="bg-tertiary py-5 px-5 rounded-full flex justify-evenly items-center flex-col"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
