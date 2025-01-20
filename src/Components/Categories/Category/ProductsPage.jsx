import { useState } from "react";
import { fetchData } from "../../../utils/fetchData";
import DataLoading from "../../ErrorContent/DataLoading";
import Product from "../MoreProducts/Product";

const ProductPage=()=>{

    const data=fetchData();
    const [userHeading,setUserHeading]=useState("Similar Products");

    if(data==null){
        return <DataLoading/>;
    }


    return (
        <div className=" mt-14 border-2 border-gray-300 mx-2">
            <div className="flex justify-center text-xl text-gray-600 font-bold font-sans my-16">{userHeading}</div>
            <div className="flex flex-wrap ">

                {
                    data.map((item,index)=>(
                        <Product data={item} index={index}/>
                    ))
                }
            
            
            </div>

            
        </div>
    )
}
export default ProductPage;