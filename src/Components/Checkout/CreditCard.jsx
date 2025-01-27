import { useNavigate } from "react-router-dom";
import { Debitcard } from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const CreditCard=()=>{

    const navigate=useNavigate();
    const [state,setState]=useState(false);
    const success=()=>toast.success("Payment Success, Order Placed",{ autoClose: 2000 });
    const handleSubmit=(e)=>{
        e.preventDefault();
        success();
        setTimeout(()=>{
            navigate("/")
        },2200)
    }
    return(
        <div className="mt-[160px]">
            <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-12 border-2 border-blue-500">
             FakeShop PaymentU
           </div>
        <form className="w-4/12 mx-auto " onSubmit={handleSubmit}>
            <div className="flex my-12 items-center">
                <div className=" text-gray-600 text-lg font-bold font-sans w-[150px]">Card Type</div><div className="flex items-center gap-10"><input onChange={()=>setState(!state)} type="radio" required /><img className="w-40" src={Debitcard} /></div>
            </div>

            <div className="flex my-12 items-center">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Card Number</span><input type="number" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Card Number"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Name on Card</span><input type="text" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Full Name"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">CVV Number</span><input type="number" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="CVV "/>
            </div>
            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Expiry Date</span><input type="date" className="border-[2px] p-4 pl-4 w-full border-gray-300" required />
            </div>

            <button className={`py-3 px-6 font-bold rounded-xl mx-auto bg-blue-400 ${state? `hover:bg-blue-600` : ``}  text-white text-lg flex justify-center `} disabled={!state}>Pay Now</button>
        </form>
        <ToastContainer position="top-right"/>
        </div>
    )
}

export default CreditCard;