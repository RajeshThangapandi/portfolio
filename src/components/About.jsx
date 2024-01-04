import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[200px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // className='w-full yellow-orange-gradient p-[3px] rounded-[20px] shadow-card'
      className='bg-transparent'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='backdrop-blur-sm bg-black/30 rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-tertiary text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary-text text-[17px] max-w-3xl leading-[30px]'
      >
       As a seasoned Full Stack Developer with over [6 Months] of hands-on experience, I bring a comprehensive skill set in both front-end and back-end technologies. Proficient in languages such as JavaScript,and Java, 
       I have successfully designed, developed, and deployed scalable web applications. 
       My expertise extends to utilizing modern frameworks like React and Angular for dynamic user interfaces, 
       while also implementing robust server-side solutions using Node.js and Springboot
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
