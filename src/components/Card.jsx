import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width,start,para,hover=false}){
    
    return(
        <motion.div whileHover={{backgroundColor: hover ? "#7443ff":null,padding:"25px"}} className={` bg-zinc-700 p-5 rounded-xl  ${width} min-h-[23rem] flex flex-col justify-between`}>
            <div className="w-full">
                <div className="w-full flex items-center justify-between">
                    <h3>One heading</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className="text-3xl font-medium mt-3">Whatever Heading</h1>
            </div>
            <div className="down w-full ">
                {
                    start && (
                        <>
                            <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a project</h1>
                            <button className="mt-5 py-1 px-5 rounded-full border-[1px] border-zinc-50">Contact us</button>
                        </>
                    ) 
                }
                {para && (
                    <p className="text-sm text-zinc-500 font-medium">Lorem ipsum dolor sit amet consectetur.</p>
                )}
            </div>
        </motion.div>
    )
}
export default Card;