import MyPic from "../../assets/kid.jpg"
const Categories=()=>{
    const cart=["MEN","WOMEN","KIDS","HOME & LIVING","BEAUTY"]
    return(
        <> 
        <div className="mt-40 w-full">
            
        <h1 className="flex justify-center mb-16 text-[2rem] font-sans text-gray-700">
            Categories
        </h1>
        <div className="flex justify-evenly">

            {
                cart.map((item,index)=>( 
                    <div className="rounded-full w-[180px] flex justify-center items-center flex-col hover:scale-125 cursor-pointer">
            <img className="rounded-full my-6 " src={MyPic} key={index}/>
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