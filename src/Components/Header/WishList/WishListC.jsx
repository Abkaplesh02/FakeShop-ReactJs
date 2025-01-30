import WishProduct from "./WishProduct";
import Wishlist from "../../../assets/paper.png"
import { useEffect, useState } from "react";
import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import axios from "axios";
import NoDataFound from "../../Shimmer/NoDataFound";

const WishListC=()=>{
    const [data,setData]=useState(null);

    const getData=async()=>{
        const response=await axios.get("http://localhost:3000/wishlist")
        setData(response.data);
        window.scrollTo(0,0);
    }

    useEffect(()=>{
        getData();
    },[])

    
    if(data==null){
        return <ContainerShimmer/>
    }

    let totalQ=data.reduce((previousValue,currentValue)=>(previousValue+(currentValue.quantity)),0);
    return (
        <div className="my-40">
            <h1 className="flex gap-5 items-center text-2xl font-bold text-gray-600 justify-center mb-10">WishList <img src={Wishlist} className="w-12"/></h1>
           {
            data.map((item,index)=><WishProduct key={index} data={item} getData={getData}/>)
           }

           {
            (totalQ<1) && <NoDataFound/>
           }

          
        </div>
    )
}
export default WishListC;