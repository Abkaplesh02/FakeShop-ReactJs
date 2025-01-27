import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const COD=()=>{

    const navigate=useNavigate();
    const success=()=>toast.success("Payment Success, Order Placed" ,{ autoClose: 2000 });
    const handlePay=()=>{
        success();
        setTimeout(()=>{
            navigate("/");
        },2000)
    }
    
    return(
        <div className="mt-[160px]" >
                    <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-12 border-2 border-blue-500">
                     FakeShop PaymentU
                   </div>
                <form className="w-4/12 mx-auto " onSubmit={(e)=>e.preventDefault()}>
        
                    <button className="py-3 px-6 font-bold rounded-xl mx-auto bg-blue-400 hover:bg-blue-600 text-white text-lg flex justify-center" onClick={handlePay}>Place Order</button>
                </form>
                <ToastContainer position="top-right"/>
                </div>
    )
}

export default COD;