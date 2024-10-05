import React from "react";
import Button from "./Button";
function Navbar(){
    return(
       <div className="max-w-screen-lg mx-auto py-6 bg-zinc-900 flex items-center justify-between border-b-[1px] border-zinc-700" >
        <div className="nleft flex items-center">
            <img src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg" alt="" />
            <div className="Links flex gap-14 ml-20" >
                {["Home","Work","Culture","","News"].map((elem,index) => (
                    <a className="font-regular text-sm flex items-center gap-1" href="#" key={elem}>
                        {elem.length === 0 ? (<span key={index} className="w-[2px] h-7 bg-zinc-700 "></span>) : null}
                        {index === 1? (<span key={index} style={{boxShadow:"0 0 0.25em #00FF19"}} className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></span>) : null}
                        {elem}
                    </a>  ))}
            </div>
        </div>
        <Button />
       </div>
    )
}

export default Navbar;