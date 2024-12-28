import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ajay.jpg";
import { motion } from "framer-motion"


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start ">
                        <motion.h1 initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }} className="pb-16 txt-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Ajay chakravarthi
                        </motion.h1>
                        <motion.span initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }} class=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Backend Developer
                        </motion.span>
                        <motion.p initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }} className="my-4 max-w-xl font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:8xl">
                    <div className="flex justify-center">
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} 
                        >
                        <img className="rounded-full" src={profilePic} alt="ajay" />
                    </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;