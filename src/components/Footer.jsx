import Reactq from "react";
function Footer(){
    return (
       <div className="w-full">
        <div className="max-w-screen-lg  mx-auto py-10 flex gap-28">
            <div className="basis-1/2">
                <h1 className="text-[10rem] font-semibold leading-none tracking-tight">refokus.</h1>
                <div className="flex gap-12 mt-10">
                    {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((item,index)=> <a key={index} className="text-xs text-zinc-400" >{item}</a> )}
                </div>
            </div>
            <div className="basis-1/2 flex gap-4">
                <div className="basis-1/3">
                    <h4 className="mb-10 text-zinc-500">socials</h4>
                    {["instagram","twitter (X?)","Linkedin"].map((item,index)=> <a key={index} className="block mt-2 capitalize text-zinc-600" >{item} </a>)}
                </div>
                <div className="basis-1/3">
                    <h4 className="mb-10 text-zinc-500">socials</h4>
                    {["instagram","twitter (X?)","Linkedin"].map((item,index)=> <a key={index} className="block mt-2 capitalize text-zinc-600" >{item} </a>)}
                </div>
                <div className="basis-1/2 flex flex-col items-end">
                    <p className="text-right mt-10 text-xs">Refokus is a pioneering digital agency driven by design and empowered by technology </p>
                    <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6653351b3ab3236cb452f2f3_Frame%2048097733.svg" className="w-32 mt-6" alt="" />
                </div>
            </div>
        </div>
       </div>
    )
}
export default Footer;