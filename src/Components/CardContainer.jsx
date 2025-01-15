import axios from "axios";
import MyCard from "./MyCard";
import { useEffect, useState } from "react";

const CardContainer=()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products?limit=6")
    .then((response)=>{
        setData(response.data)
    })
    },[]);


    
    return(
        <div className="mt-40 flex flex-wrap ">

            {
                data.map((item,index)=>(<MyCard key={index} data={item}/>))
            }
            
        </div>
    )
}

export default CardContainer;