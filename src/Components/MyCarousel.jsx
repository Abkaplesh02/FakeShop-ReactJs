import { useState } from "react"
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


    const handleBack=()=>{
        setCurrent(current=>current-1);
        console.log(current);
        if(current<0){
            setCurrent(items.length-1);
        }
        console.log("afer updateing" + current)
    }

    const handleForw=()=>{
        setCurrent(current=>current+1);
        if(current==items.length-1){
            setCurrent(0)
        }
        console.log(current)
    }

    const [current,setCurrent]=useState(0);

    setTimeout(()=>{

    })
    return(
        <div className="w-[60vw]  my-10 mx-auto ">
          <img src={items[current]}  className="w-full relative" />
           <button onClick={handleBack}><img src={Left} className="absolute top-[820px] w-10"/></button>
           <button onClick={handleForw}><img src={Right}  className="absolute top-[820px] left-[1430px] w-10"/></button>

        </div>
    )
}

export default MyCarousel;