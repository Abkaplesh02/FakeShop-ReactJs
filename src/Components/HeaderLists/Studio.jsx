import { studioLogo, studioPic } from "../../utils/constants";

const Studio=()=>{
    return (

        <div className="w-4/12 flex justify-between absolute top-[133px] left-[290px] bg-white p-8 shadow-2xl ">
            
            <div className="flex flex-col justify-center items-center">
            <img src={studioLogo} className="mb-8"/>
            <img src={studioPic} className="w-[800px]"/>

            </div>
            </div>
    )
}

export default Studio;