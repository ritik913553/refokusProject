import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work(){

    const [images,setImages]=useState([
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d407eef769166de4e917_Kablamo%20-%2016%209%20(A)-p-1080.webp",top :"50%" , left:"50%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cddd783017a5e17454_Umlaut%20-%2016%209%20(A)-p-1080.webp",top :"56%" , left:"44%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A)-p-1080.webp",top :"45%" , left:"56%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A)-p-1080.webp",top :"60%" , left:"53%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A)-p-1080.webp",top :"43%" , left:"40%" ,isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A)-p-1080.webp",top :"65%" , left:"55%" ,isActive:false} 
    ]);


    const { scrollY ,scrollYProgress,scrollX,scrollXProgress} = useScroll();  //scrollyprogress mein 0 se 1 tk values hoti hai jb page purascroll ho jayega to 1
    
    scrollYProgress.on("change",(data)=>{

        function imagesShow(arr){
            setImages((prev)=>(
                prev.map((item,index)=>(
                    arr.indexOf(index) ===  -1 ? {...item,isActive:false} : {...item,isActive:true}               ))
            ))
        }

        switch(Math.floor(data*100)) {
            case 0:
                // console.log("0");
                imagesShow([]);
                break;
            case 1:
                // console.log("1");
                imagesShow([0]);
                break;
            case 2:
                // console.log("12");
                imagesShow([0,1]);
                break;
            case 3:
                // console.log("123");
                imagesShow([0,1,2]);
                break;
            case 4:
                // console.log("1234");
                imagesShow([0,1,2,3]);
                break;
            case 5:
                imagesShow([0,1,2,3,4]);
                break;
            case 6:
                imagesShow([0,1,2,3,4,5]);
                break;
        }
    });



    // useMotionValueEvent(scrollYProgress, "change", (latest) => { //scrolly hai ki y axis mein kitna scroll ho rha hai,
    //     // console.log("Page scroll: ", latest)  //scrolly jb b change hoga jb tb uska value concole pr print hoga ,yaha hum scrolly ke certain value pr isactive ki value true false accordingly krenge
    //     showNHideImages(Math.floor(latest*100));
    // })

    return (
       <div className="w-full mt-8 ">
            <div className="relative max-w-screen-lg mx-auto text-center">
                <h1 className="font-['satoshi'] text-[30vw] leading-none font-medium traking-tight select-none">work</h1>
                <div className="absolute top-0 w-full h-full ">
                    {images.map((elem,index) =>(
                        elem.isActive && (<img key={index} className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] " src={elem.url} style={{top: elem.top,left:elem.left}} alt="" />)
                    ) )}
                </div>
            </div>
       </div>
    )
}

export default Work;



// The arr.indexOf(index) in JavaScript is a method that searches for a specified element (in this case, the variable index) in the array arr.
// If the element is found, it returns the first index at which the element is found in the array.
// If the element is not found, it returns -1.