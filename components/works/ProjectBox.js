"use client"
import {motion } from "framer-motion"
const ProjectBox = ({children , left }) => {
return (
    <motion.div
    initial={{
        x:left
    }}
    whileInView ={{
        x:0,
        
    }}
    transition={{
        duration:0.4,
        delay:0.4
    }}
    className='w-screen  md:w-[30%] h-fit  border border-white rounded-md bg-green-400' 
    > 
    
    {children}

    </motion.div>
)
}

export default ProjectBox
