import React from 'react';
import Panda from "../assets/panda.jpg";
import { motion } from 'framer-motion';
import { fadeIn } from '../constant/animationVariants';

function AboutUs() {
    return (
        <div className="flex flex-col justify-center items-center bg-accent2 text-secondary h-screen">
            
            <motion.div
                variants={fadeIn("down", 0.5, 80)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-center mb-10"
            >
                <h1 className="text-6xl font-bold text-primary">About us</h1>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center">
               
                <motion.div
                    variants={fadeIn("right", 0.5, 40)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="h-80"
                >
                    <img src={Panda} className="h-full object-contain rounded-full" />
                </motion.div>

                {/* Description Section  */}
                <motion.div
                    variants={fadeIn("left", 0.5, 80)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="max-w-3xl px-6 md:px-24 font-neogrotesque font-semibold text-lg md:text-2xl text-center md:text-left"
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus est magni consequuntur tempora maxime ullam. Enim possimus, veniam in inventore sed illo dolorum numquam reprehenderit aperiam quaerat ipsa libero!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutUs;
