import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Get Started"  }){ //title ki bydefault value get started hai
    return (
        <div className="max-w-40 cursor-pointer px-4 py-1 bg-zinc-100 text-black rounded-full flex items-center justify-between ">
            <span className="text-sm font-medium " >{title}</span>
            <BsArrowReturnRight />
        </div>
    )
}

export default Button;