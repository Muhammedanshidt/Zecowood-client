import React from 'react';
import Text from "../assets/Text PNG.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../constant/animationVariants';
import { Helmet } from 'react-helmet-async';
import { Link } from 'lucide-react';
function Landing() {
    return (
        <>
        <Helmet>
            <title>Home</title>
            <meta name='description' content='home and langing page of zeco' meta/>
            <link rel='canonical' href='/' link/>
      </Helmet>
        <div>
            <div className=' flex justify-center'>
                <motion.div
                variants={fadeIn("up",0.5,100)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className='text-secondary text-3xl md:text-8xl font-neogrotesque sticky top-30'>
                    <p> Innovate Better</p>
                    <p className="ml-2">With <img src={Text} alt='logo' height='auto' width='auto' className='h-4 md:h-12 inline-block ml-2' /></p>
                </motion.div>
            </div>
        </div>
        </>
    );
}

export default Landing;
