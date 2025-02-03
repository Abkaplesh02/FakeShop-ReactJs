import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../../../redux/cartSlice";

const Product=({data})=>{
    const successNotify=()=>toast("Sucess! Added to Cart", { autoClose: 2000 });
    const faileNotify=()=>toast.error("Failed! Some Erro", { autoClose: 2000 })
    const {title,price,rating,image,description,id,category}=data;
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const select=useSelector((store)=>store.user.user);

   
    const handleCart=async()=>{
        const dataList={
            productId:id,
            category:category,
            price:price*100,
            title:title,
            image:image,
            rating:rating.rate,
            ratingC:rating.count,
            quantity:1,
            
        }
        if(select){

        

        try{
            const response=await axios.get(`http://localhost:3000/users/${select.id}`);
            const userData=response.data;

            const existingItem=userData.cart.find((item=>item.productId===id));
            let updatedCart;
            if(existingItem){
                updatedCart=userData.cart.map((item)=>item.productId===id? {...item,quantity:item.quantity+1}:item);
            }
            else{
                updatedCart=[...userData.cart,dataList]
            }
   
            await axios.patch(`http://localhost:3000/users/${select.id}`,{cart:updatedCart});
            dispatch(addToCart(dataList));
            successNotify();
            
        }
        catch{
            faileNotify();
        }
    }
    else{
        toast("Please add your account first!!!" , {autoClose:1300});
        setTimeout(()=>{
            navigate("/register")
        },1400);
    }
    }

    return(
        <div className="my-6 mx-auto  shadow-lg hover:shadow-2xl hover:scale-110 cursor-pointer py-2 ">
            <div className="relative w-[320px]  ">
                <img className="w-[290px] h-[280px] mx-auto" src={image} alt="" />
                <button className="bg-gray-400 rounded-lg p-1 px-3 text-[0.9rem] font-bold text-white absolute top-[244px]">{rating.rate}⭐️ </button>
               <div className="ml-2 my-2">
               <h1 className="text-lg my-1 font-semibold font-sans h-[85px]">{title.slice(0,60)}</h1>
                <h1 className="text-sm my-1 text-gray-600 h-[80px]">
                    { description.slice(0,115)}........
                    </h1>
                
                <h1 className="text-[1rem]  font-bold my-2">₹ {(price*100).toFixed(2)} <span className="line-through text-gray-500"> 12000</span></h1>
                <div className="flex w-9/12 "> 
                <div className=""> <button className=" mr-6 bg-blue-600 rounded-lg  p-1 text-white" onClick={()=>navigate(`/show-more/${id}`)}>Show More</button></div>
                <div className="" onClick={handleCart}>   <button className="bg-gray-500 rounded-lg p-1 text-white" >Add to Cart</button></div>
                </div>

               </div>
               
            </div>

            <h1></h1>
            <ToastContainer position="top-right"/>
        </div>
    )
}

export default Product;