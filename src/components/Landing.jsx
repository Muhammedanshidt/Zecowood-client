import React from 'react';
import Text from "../assets/Text PNG.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../constant/animationVariants';
function Landing() {
    return (
        <div>
            <div className='w-full flex justify-center'>
                <motion.div
                variants={fadeIn("up",0.5,150)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className='text-secondary text-3xl md:text-8xl font-neogrotesque'>
                    <h1> Innovate Better</h1>
                    <h1 className="ml-2">With <img src={Text} className='h-4 md:h-12 inline-block ml-2' /></h1>
                </motion.div>
            </div>
        </div>
    );
}

export default Landing;
