import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ajay.jpg";
import { motion } from "motion/react"


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start ">
                        <h1 className="pb-16 txt-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Ajay chakravarthi
                        </h1>
                        <span class=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Backend Developer
                        </span>
                        <p className="my-4 max-w-xl font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:8xl">
                    <div className="flex justify-center">
                        <img className="rounded-full" src={profilePic} alt="ajay" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;