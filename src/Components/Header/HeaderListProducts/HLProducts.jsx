import { useLocation, useParams } from "react-router-dom";
import { fetchData } from "../../../utils/fetchData";
import Product from "../../Categories/MoreProducts/Product";
import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import { useEffect, useState } from "react";

const HLProducts=()=>{
    const data=fetchData();
    const {id}=useParams();
    // const category=id.toLowerCase();
    const [header,setHeader]=useState("Products");
    const location=useLocation();
    const category=location.state.category;
    const datts=location.state.data;
    console.log(category)
    console.log(datts)


    
    if(data==null){
        return <ContainerShimmer/>
    }

    let filteredData=data.filter((item)=>item.title.includes(category));
    console.log("After " + filteredData);

    

    if(filteredData.length===0){
        filteredData=data.filter((item)=>item.category.includes(datts));
        console.log("After after " + filteredData)
    }

    return (
        
        <div> 
             <h1 className="text-2xl text-black">{header}</h1>
       <div className="mt-[160px] flex flex-wrap">
       
        {
            filteredData.map((item,index)=>(<Product data={item} key={index}/>))
        }
       </div>
        </div>
    )
}

export default HLProducts;