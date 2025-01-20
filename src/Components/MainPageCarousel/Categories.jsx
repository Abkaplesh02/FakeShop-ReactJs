import MyPic from "../../assets/Mens.png"
import MyPic1 from "../../assets/Women.png"
import MyPic2 from "../../assets/kidsP.png"
import MyPic3 from "../../assets/HomeDecor.png"
import MyPic4 from "../../assets/kidsP.png"


const Categories=()=>{
    const cart=["MEN","WOMEN","KIDS","HOME & LIVING","BEAUTY"]
    const Pics=[MyPic,MyPic1,MyPic2,MyPic3,MyPic4];
    return(
        <> 
        <div className="mt-40 w-full">
            
        <h1 className="flex justify-center mb-16 text-[2rem] font-sans text-gray-700">
            Categories
        </h1>
        <div className="flex justify-center">

            {
                cart.map((item,index)=>( 
                    <div className="rounded-full w-[180px] flex justify-center items-center flex-col hover:scale-125 cursor-pointer mx-8">
            <img className="rounded-full my-6 " src={Pics[index]} key={index}/>
            <h1 className="text-sm font-bold font-sans text-gray-700">{item}</h1>
           </div>
                ))
            }

        </div>
        </div>

        </>
    )
}

export default Categories;