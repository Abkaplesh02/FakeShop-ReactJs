import { useRef, useState } from "react";
import { validateRegister } from "../../../utils/validateRegister";
import { useDispatch } from "react-redux";
import { addToUser, removeUser } from "../../../redux/userSlice";


const Register=()=>{
    const [isLogin,setIsLogin]=useState(false);
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const mobile=useRef();
    const formr=useRef();
    const dispatch=useDispatch();

    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const message=validateRegister(email.current.value,password.current.value);
        console.log(message)
        const userInfo={
            userId:email.current.value,
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
            mobile:mobile.current.value,
            cart:[],
            wishList:[],
        }
        if(message){
            if(message.includes("email")){
                email.current.setCustomValidity(message);
                email.current.reportValidity();
            }
            else if(message.includes("Pass")){
                password.current.setCustomValidity(message);
                password.current.reportValidity();
            }
            return;
        }
        else{
            
            email.current.setCustomValidity("");
            password.current.setCustomValidity("");
            dispatch(addToUser(userInfo));
            dispatch(removeUser())
            formr.current.reset();
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
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Email</span><input onChange={()=>email.current.setCustomValidity("")} ref={email} type="email" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Email"/>
            </div>

           {
            !isLogin &&  <div className="flex my-12 items-center ">
            <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Phone</span><input type="number"  ref={mobile} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Phone"/>
        </div>
           }

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Password</span><input onChange={()=>password.current.setCustomValidity("")} ref={password} type="password" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Password"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-7/12 text-blue-500 text-xl font-bold font-sans cursor-pointer" onClick={()=>setIsLogin(!isLogin)}>{isLogin ? "New User? Register" : "Already a user? Sign in"}</span>
            </div>
           

            <button className="py-3 px-6 font-bold rounded-xl mx-auto bg-blue-600 mb-4  text-white text-lg flex justify-center ">{!isLogin ? "Register" : "Login"}</button>
        </form>
       
        </div>
    )
}
export default Register;