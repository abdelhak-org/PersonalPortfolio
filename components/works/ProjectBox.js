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
    className='w-screen  md:max-w-[1080px] h-auto  border border-gray-300 overflow-hidden  rounded-md p-8  ' 
    > 
    
    {children}

    </motion.div>
)
}

export default ProjectBox
