import React from "react";
import { motion } from "framer-motion";

interface TextHeaderInterface{
    title:string;
    description?:string;
    required?:boolean;
  
}

const TextHeader = ({title,description,required}:TextHeaderInterface)=>{

    return(
        <motion.div   className="text-center mb-12" 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8}}
        >
          <h2 className="bg-custom-gradient  text-4xl bg-clip-text font-bold">
            {title}
          </h2>

        {required && (

        <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
        )}
         

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
           {description}
          </p>
       
        </motion.div>
       
    )

}

export default TextHeader