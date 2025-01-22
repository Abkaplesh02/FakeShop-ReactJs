import { fetchData } from "../../../utils/fetchData";
import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import DeletePic from "../../../assets/delete.png"


const WishProduct=()=>{
    const data=fetchData();
    if(data==null){
        return <ContainerShimmer/>
    }
    const {id,title,category,image,description,price,rating}=data[13];
    
    return (
        <>
        
        <div className="flex  border-2 border-gray-200 w-11/12 mx-auto gap-20 p-4 shadow-lg hover:shadow-2xl mb-6">
            <div className="w-[230px] flex items-center">
                <img src={image} className="w-full h-[210px]"/>
            </div>

            <div className="w-9/12">
                <div className="font-sans font-bold text-lg text-blue-700 my-2">{title.slice(0,120)}</div>
                <div className="font-sans font-semibold text-sm text-gray-700 my-2">{category}</div>
                <div className="border-b  border-gray-300 pb-4 mb-4 my-6"> <button className="bg-gray-300 rounded-lg p-1 px-3 text-[0.9rem] font-bold ">{rating.rate}⭐️ | {rating.count}</button></div>
                <div className="text-[1rem]  font-bold my-2">₹ {price} <span className="line-through text-gray-500"> 12000</span> </div>
                <div className="flex gap-16 items-center my-8"><div className="">   <button className="bg-gray-600 text-lg rounded-lg p-2 px-36 text-white hover:bg-blue-600 ">Add to Cart</button></div>
                <div className="cursor-pointer"><img src={DeletePic} className="w-12"/></div></div>
            </div>

        </div>
        </>
    )
}

export default WishProduct;