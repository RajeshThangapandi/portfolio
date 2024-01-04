import { motion } from "framer-motion";

import { styles } from "../styles";
import { CharacterCanvas, ComputersCanvas } from "./canvas";
import { downArrow } from "../assets";

const Hero = ({ scrollValue }) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-quinary-text' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`} >
            Hi, I'm <span className='text-quinary-text'>Rajesh</span>
          </h1>
          
          <p className={`${styles.heroSubText}`}>
            I develop Web app, user <br className='sm:block hidden' />
            Interfaces and Cloud Applications
          </p>
        </div>
      </div>

      <div className="fixed  h-screen w-1/2 right-0 hidden sm:hidden lg:block z-3">
        <ComputersCanvas scrollValue={scrollValue} /> 
        {/* <CharacterCanvas/> */}
        {/* {alert("This is an alert message!")} */}
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div  className='w-[42px] h-[64px] rounded-3xl border-8 border-secondary flex justify-center items-center '>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-5 h-5 bg-short-down-arrow bg-cover'
              
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
