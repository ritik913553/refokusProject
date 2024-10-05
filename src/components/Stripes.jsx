import React from "react";
import Stripe from "./Stripe";
function Stripes(){
    var data = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",number:11},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",number:11}
    ]
    return(
        <div className="flex items-center ">
            {data.map((elem,index)=>{
                return <Stripe key={index} val={elem} />
            })}
        </div>
    )
}
export default Stripes;