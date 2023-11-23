"use client"

import {motion } from "framer-motion"
const ProjectBox = ({children  }) => { 
return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView ={{
        opacity:1
    }}
    transition={{
        type:"spring",
        duration:0.4,
        delay:0.4
    }}
    className='w-screen  md:h-60 h-auto  border-8 border-green-200  rounded-md hover:scale-125 ' 
    > 
    
    {children}

    </motion.div>
)
}

export default ProjectBox
