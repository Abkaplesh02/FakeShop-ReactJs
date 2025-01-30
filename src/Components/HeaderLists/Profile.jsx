import { useNavigate } from "react-router-dom";

const Profile=({setProfileState})=>{
    const navigate=useNavigate();
    return (
       <div onMouseEnter={()=>setProfileState(true)} onMouseLeave={()=>setProfileState(false)} className="bg-white w-1/12 absolute top-[90px] right-[150px] z-50 px-4">
        <ul className="text-sm text-gray-600 font-bold">
            <li className="my-1 hover:text-blue-700 hover:scale-110 cursor-pointer" onClick={()=>navigate("/register")}>Profile</li>
            <li className="my-1 hover:text-blue-700 hover:scale-110 cursor-pointer">Sign Out</li>
            <li className="my-1 hover:text-blue-700 hover:scale-110 cursor-pointer">Order History</li>
        </ul>
       </div>
    )
}

export default Profile;