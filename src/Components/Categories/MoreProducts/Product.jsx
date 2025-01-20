const Product=({data})=>{
    const {title,price,rating,image,description}=data;

   

    return(
        <div className="my-6 mx-auto  shadow-lg hover:shadow-2xl hover:scale-110 cursor-pointer  ">
            <div className="relative w-[400px]  ">
                <img className="w-[390px] h-[400px]" src={image} alt="" />
                <button className="bg-gray-400 rounded-lg p-1 px-3 text-[0.9rem] font-bold text-white absolute top-[244px]">{rating.rate}⭐️ </button>
               <div className="ml-2 my-2">
               <h1 className="text-lg my-1 font-semibold font-sans h-[85px]">{title.slice(0,60)}</h1>
                <h1 className="text-sm my-1 text-gray-600 h-[80px]">
                    { description.slice(0,115)}........
                    </h1>
                
                <h1 className="text-[1rem]  font-bold my-2">₹ {price} <span className="line-through text-gray-500"> 12000</span></h1>
                <div className="flex w-9/12 "> 
                <div className=""> <button className=" mr-6 bg-blue-600 rounded-lg  p-1 text-white">Show More</button></div>
                <div className="">   <button className="bg-gray-500 rounded-lg p-1 text-white">Add to Cart</button></div>
                </div>
               
               </div>
               
            </div>

            <h1></h1>
        </div>
    )
}

export default Product;