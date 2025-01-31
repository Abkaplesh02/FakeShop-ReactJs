import { useRef, useState } from "react";
import { validateRegister } from "../../../utils/validateRegister";
import { useDispatch } from "react-redux";
import { addToUser, removeUser } from "../../../redux/userSlice";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Register=()=>{
    const [isLogin,setIsLogin]=useState(false);
    const [message,setMessage]=useState(null);
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const mobile=useRef();
    const formr=useRef();
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleLogin=()=>{
        setIsLogin(!isLogin);
        setMessage(null);
        
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const message=validateRegister(email.current.value,password.current.value);
        setMessage(message);
        
        if(isLogin){
            try{
                const check=await axios.get(`http://localhost:3000/users/${email.current.value}`);
                dispatch(addToUser(check.data));
                formr.current.reset();
                navigate("/");
            }
            catch(error){
                setMessage(error+" "+ error.message);
            }
            return;
        }

        const userInfo={
            id:email.current.value,
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
            mobile:mobile.current.value,
            cart:[],
            wishList:[],
        }
       
        if(!message){ 
            try{  
                const check=await axios.get(`http://localhost:3000/users/${email.current.value}`);
                if(check.data){
                    setMessage("User already exist !!!  Please proceed to login page");
                    toast.error("User already exist !!!  Please proceed to login page")
                    return;
                }
            }
                 catch(error){
                    try{

                        const response=await axios.post("http://localhost:3000/users",userInfo);
                        toast("User created success");
                        formr.current.reset();
                        setIsLogin(!isLogin);
                    }
            
            catch(error){
                setMessage(error + " " + error.message);
                toast.error("user not created")
            }
        }
    }
}
    return (
        <div className="mt-40">
<div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center  border-2 border-blue-500 ">
             FakeShop {!isLogin ? "Register" : "Login"}
           </div>
          
        <form ref={formr} className="w-4/12 mx-auto shadow-2xl px-10 py-1 rounded-xl" onSubmit={handleSubmit} >
            

            {
                !isLogin && <div className="flex my-12 items-center">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Full Name</span><input ref={name} type="text"  className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Full Name"/>
            </div>
            }

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Email</span><input ref={email} type="email" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Email"/>
            </div>

           {
            !isLogin &&  <div className="flex my-12 items-center ">
            <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Phone</span><input type="number"  ref={mobile} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Phone"/>
        </div>
           }

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Password</span><input ref={password} type="password" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Password"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-10/12 text-red-600 text-2xl font-bold font-sans cursor-pointer" >{message}</span>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-7/12 text-blue-500 text-xl font-bold font-sans cursor-pointer" onClick={()=>handleLogin()}>{isLogin ? "New User? Register" : "Already a user? Sign in"}</span>
            </div>
           

            <button className="py-3 px-6 font-bold rounded-xl mx-auto bg-blue-600 mb-4  text-white text-lg flex justify-center ">{!isLogin ? "Register" : "Login"}</button>
        </form>
        <ToastContainer position="top-right"/>
       
        </div>
    )
}
export default Register;