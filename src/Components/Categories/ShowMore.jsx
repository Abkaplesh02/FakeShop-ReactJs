import { useEffect, useState } from "react";
import MyPic1 from "../../assets/mens.png"
import MyPic2 from "../../assets/wishlist.png"
import SimilarProducts from "./MoreProducts/SimilarProducts";
import Offer from "./Offer";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";
import DataLoading from "../ErrorContent/DataLoading";
import axios from "axios";
import { singleProduct } from "../../utils/constants";
const ShowMore=()=>{

    const [productData,setProductData]=useState(null);
    const {id}=useParams();

    useEffect(()=>{
     fetchData();   
    },[id])

    if(id==""){
        return <DataLoading/>
    }

    const fetchData=()=>{
        console.log(singleProduct+id)
        axios
    .get(`${singleProduct}${id}`)
    .then((response)=>{
        setProductData(response.data);
        console.log(response.data);
    })
    }

    if(productData==null){
        return <DataLoading/>
    }

    const {category,title,image,price,rating,description}=productData;

    console.log(productData)


    return(
        <div className="flex  m-4 mt-16">

            <div className="m-20">
                <div>
                <img src={image} className="w-[40vw]"/>
                </div>
                <Offer/>
                <SimilarProducts/>
            </div>
            <div className="my-20 ml-[-20px]">
                <h1 className="mb-2 font-sans text-[1.4rem] font-bold">{title}</h1>
                <h1 className="text-[1.1rem] mb-4 font-sans text-gray-500">{category}</h1>
                <div className="border-b  border-gray-300 pb-4 mb-4"> <button className="bg-gray-300 rounded-lg p-1 px-3 text-[0.9rem] font-bold ">{rating.rate}⭐️ | {rating.count}</button></div>
                <h1 className="font-bold mb-4 text-[1.2rem]">₹{price} <span className="text-gray-500"> MRP</span> <span className="line-through font-light text-gray-500">1699</span></h1>
                <h1 className="text-green-600 text-[1rem] font-bold mb-8">inclusive of all taxes</h1>
                <div className="flex pb-8 border-b-2 border-gray-200  ">
                    <button className="bg-blue-600 text-white p-2 px-20 mr-5 rounded-lg ">ADD TO BAG</button>
                <button className="flex items-center justify-evenly bg-white text-gray-500 border-2 mr-0 rounded-lg border-gray-400  p-2 px-20" ><img className="w-5 mr-2" src={MyPic2}/>WISHLIST</button>
                </div>
                <ProductDetails data={productData}/>
                
                
            </div>
            
            

        </div>
    )
}

export default ShowMore;