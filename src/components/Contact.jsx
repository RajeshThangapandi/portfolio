import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas, EarthCanvas } from "./canvas";
import { contacts } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
 

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] backdrop-blur-sm bg-opacity-10 bg-black  p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

       
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {contacts.map((contact) => (
          <div className='w-10 h-10 sm:h-24 sm:w-24' key={contact.name}>
            <a href={contact.url} target="_blank">
            <BallCanvas icon={contact.icon} />
            </a>
          </div>
          ))}
        </div>
        <p className={styles.sectionSubText}>rajesh.thangapandim@gmail.com</p>
        <p className={styles.sectionSubText}>+91 9626899770</p>
        
        
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas className="z-2"/>
      </motion.div>
      
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
