import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const COD=()=>{

    const navigate=useNavigate();
    const select=useSelector((store)=>store.user.user);
    const success=()=>toast.success("Payment Success, Order Placed" ,{ autoClose: 2000 });
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            success();
            const updatedCart=[];
            await axios.patch(`http://localhost:3000/users/${select.id}`,{cart:updatedCart})
            setTimeout(()=>{
                navigate("/");
            },2000)
        }
        catch(error){
            console.error(error);
        }
        }
    
    return(
        <div className="mt-[160px]" >
                    <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-12 border-2 border-blue-500">
                     FakeShop PaymentU
                   </div>
                <form className="w-4/12 mx-auto " onSubmit={(e)=>handleSubmit(e)}>
        
                    <button className="py-3 px-6 font-bold rounded-xl mx-auto bg-blue-400 hover:bg-blue-600 text-white text-lg flex justify-center" >Place Order</button>
                </form>
                <ToastContainer position="top-right"/>
                </div>
    )
}

export default COD;