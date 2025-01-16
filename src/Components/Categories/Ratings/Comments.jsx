
import Mypic from "../../../assets/person.png"
const Comment=(props)=>{
    console.log(props);
    return(
<div className="flex border-2 border-gray-200 p-2 mb-6 rounded-2xl">

    <div className="w-2/12 flex justify-center items-center">
        <img src={Mypic} className="w-14"/>
    </div>

    <div className="w-8/12">
        <div className="flex justify-between "> 
        <p className="text-[1rem] my-2">{props.data.username}</p>
        <button className="bg-green-500 rounded-lg  text-[0.8rem] px-2 py-0 font-bold  text-white">{props.data.rating}⭐️ |  80</button>
        </div>
        <p className="text-sm font-normal mb-2" >{props.data.review}</p>
        <div className="w-full flex justify-end mt-4"><p className="text-sm text-gray-600 font-bold">{props.data.date}</p></div>
    </div>
</div>
    )
}

export default Comment;