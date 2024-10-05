import React from "react";
function Stripe({val}){
    return (
        <div className="mt-10 w-[16.66%] px-10 py-5 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-600 flex justify-between items-center">
            <img className="h-[20px]" src={val.url} alt="" />
            <span className="font-semibold">{val.number}</span>
        </div>
    )
}
export default Stripe;