import { useNavigate } from "react-router-dom";
import { Debitcard } from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import { useRef, useState } from "react";
import { validateDebitCard } from "../../utils/validateDebitCart";

const CreditCard=()=>{

    const navigate=useNavigate();
    const card=useRef();
    const cvv=useRef();
    

    const [state,setState]=useState(false);
    const success=()=>toast.success("Payment Success, Order Placed",{ autoClose: 2000 });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const message=validateDebitCard({CardDetails: card.current.value,cvv:cvv.current.value});
        
        if(message){
            if (message.includes("Debit card")) {
                card.current.setCustomValidity(message);
                card.current.reportValidity();
            } else if (message.includes("CVV")) {
                cvv.current.setCustomValidity(message);
                cvv.current.reportValidity();
            }
            return;
        }
        else{
            card.current.setCustomValidity("");
            success();
        setTimeout(()=>{
            navigate("/")
        },2200)
        }
    }

    const handleCardChange=()=>{
        card.current.setCustomValidity("");
    }

    const handleCVVChange=()=>{
        cvv.current.setCustomValidity("");
    }
    return(
        <div className="mt-[160px]">
            <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-12 border-2 border-blue-500">
             FakeShop PaymentU Reciept
           </div>
        <form className="w-4/12 mx-auto " onSubmit={handleSubmit}>
            <div className="flex my-12 items-center">
                <div className=" text-gray-600 text-lg font-bold font-sans w-[150px]">Card Type</div><div className="flex items-center gap-10"><input onChange={()=>setState(!state)} type="radio" required /><img className="w-40" src={Debitcard} /></div>
            </div>

            <div className="flex my-12 items-center">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Card Number</span><input type="number" onChange={handleCardChange} ref={card} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Card Number"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Name on Card</span><input type="text" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Full Name"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">CVV Number</span><input onChange={handleCVVChange} ref={cvv} type="number" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="CVV "/>
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