import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import DeletePic from "../../../assets/delete.png";
import { useEffect, useState } from "react";
import plus from "../../../assets/plus.png"
import minus from "../../../assets/minus .png"
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../../../redux/cartSlice";

const CartProduct=({data,getData})=>{

    const [count,setCount]=useState(data.quantity);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const deleteNotify=()=>toast.success("Item deleted!",{ autoClose: 2000 });
    const useSelect=useSelector((store)=>store.user.user);
    const errorNotify=()=>toast.error("Some Error occured" , { autoClose: 2000 });


    const decreaseCount =()=>{
       setCount(count>1 ? count-1 : 1)
    }

    
    useEffect(()=>{
        setQuantity(count);
    },[count])

    const setQuantity=async(num)=>{
        try{

            const response =await axios.get(`http://localhost:3000/users/${useSelect.id}`,);
            const userData=response.data;
            const updatedCart=userData.cart.map((item)=>item.productId===data.productId ? {...item,quantity:num}:item);
            
            await axios.patch(`http://localhost:3000/users/${useSelect.id}`, {cart:updatedCart})
            getData();
            dispatch(updateCart({productId,num}))
        }
        catch(error){
            console.error(error);
            errorNotify();
        }
    }

    const handleDelete= async ()=>{
        try {
            const response = await axios.get(`http://localhost:3000/users/${useSelect.id}`);
            const userData=response.data;
            const updatedCart=userData.cart.filter((item)=>item.productId!==data.productId);
            await axios.patch(`http://localhost:3000/users/${useSelect.id}`,{cart:updatedCart});
            dispatch(removeFromCart({productId}));
            deleteNotify();
            getData();
        }
        catch(error){ 
            console.error(error);
            errorNotify();
        }
    
    }

    if(data==null){
        return <ContainerShimmer/>
    }
   
    const {id,title,category,image,description,price,rating,ratingC,productId , quantity}=data;
    
    return (

        <>
                <div className="flex  border-2 border-gray-200 w-11/12 mx-auto gap-20 p-4 shadow-lg hover:shadow-2xl mb-6">
                    <div className="w-[230px] flex items-center">
                        <img src={image} className="w-full h-[210px]"/>
                    </div>
        
                    <div className="w-9/12">
                        <div className="font-sans font-bold text-lg text-blue-700 my-2 cursor-pointer" onClick={()=>navigate(`/show-more/${productId}`)}>{title}</div>
                        <div className="font-sans font-semibold text-sm text-gray-700 my-2">{category}</div>
                        <div className="border-b  border-gray-300 pb-4 mb-4 my-6"> <button className="bg-gray-300 rounded-lg p-1 px-3 text-[0.9rem] font-bold ">{rating}⭐️ | {ratingC}</button></div>
                        <div className="text-[1.4rem]  font-bold my-6 flex gap-4 "><span><img src={minus} className="w-8" onClick={()=>decreaseCount()}/> </span>{quantity}<img src={plus} className="w-8" onClick={()=>setCount(count+1)}/></div>
                        <div className="text-[1rem]  font-bold my-2">₹ {(((price))*quantity).toFixed(2)}</div>
                        <div className="flex gap-16 items-center my-8">
                        <div onClick={handleDelete} className="cursor-pointer"><img  src={DeletePic} className="w-12"/></div></div>
                    </div>
                    
                </div>
                <ToastContainer position="top-right"/>
                </>
    )
}

export default CartProduct;