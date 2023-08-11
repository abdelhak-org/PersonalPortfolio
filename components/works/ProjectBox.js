"use client"
import {motion } from "framer-motion"
const ProjectBox = ({children , left }) => {
return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView ={{
        opacity:1,
        
    }}
    transition={{
        type:"spring",
        duration:0.4,
        delay:0.4
    }}
    className='w-screen  md:w-[30%] h-auto  border border-white rounded-md ' 
    > 
    
    {children}

    </motion.div>
)
}

export default ProjectBox
