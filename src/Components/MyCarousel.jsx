import { useEffect, useState } from "react"
import MyPic1 from "../assets/1.png"
import MyPic2 from "../assets/2.png"
import MyPic3 from "../assets/3.png"
import MyPic4 from "../assets/4.png"
import MyPic5 from "../assets/5.png"
import MyPic6 from "../assets/6.png"
import Left from "../assets/left.png"
import Right from "../assets/right.png"


const items=[MyPic6,MyPic2,MyPic3,MyPic4,MyPic5,MyPic1];
const MyCarousel=()=>{


    const [current,setCurrent]=useState(0);
    const handleBack=()=>{

        if(current==0){
            setCurrent(items.length-1);
        }
        else{
            setCurrent(current-1);
        }
    }

    const handleForw=()=>{
        
        if(current==items.length-1){
            setCurrent(0)
        }else{
            setCurrent(current+1);
        }
        console.log(current)
    }


    useEffect(()=>{

        const interval=setTimeout(()=>{
            setCurrent(current=>current+1);
            if(current==items.length-1){
                setCurrent(0)
            }
        },10000)


        return()=>{
            clearTimeout(interval);
        }
    })
    return(
        <div className="">
          <img src={items[current]}  className=" relative rounded-3xl shadow-black shadow-2xl" />
           <button onClick={handleBack}><img src={Left} className="absolute top-[900px] w-10"/></button>
           <button onClick={handleForw}><img src={Right}  className="absolute top-[900px] left-[1760px] w-12"/></button>

        </div>
    )
}

export default MyCarousel;