import { useEffect, useState } from "react";
import cart from "../../../assets/cart.png"
import CartProduct from "./CartProduct";
import axios from "axios";
import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import NoDataFound from "../../Shimmer/NoDataFound"
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const CartC=()=>{

    const [data,setData]=useState(null);
    const useSelect=useSelector((store)=>store.user.user);
    const navigate=useNavigate();


    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        const response=await axios.get(`http://localhost:3000/users/${useSelect.id}`);
        setData(response.data.cart);
        console.log(response.data.cart);
        // window.scrollTo(0,0);
    }
    if(data==null){
        return <ContainerShimmer/>
    }

    console.log(data);

    let totalQ=data.reduce((previousValue,currentValue)=>(previousValue+(currentValue.quantity)),0);


    return (
        <div className="my-40">
            <h1 className="flex gap-5 items-center text-2xl font-bold text-gray-600 justify-center mb-10">Cart <img src={cart} className="w-12"/></h1>
            {
                data.map((item,index)=>(<CartProduct data={item} key={index} getData={getData}/>))
            }

            {
                (totalQ>0) ? <Subtotal data={data} getData={getData}/> : <NoDataFound/>
            }
   
        </div>
    )
}
export default CartC;