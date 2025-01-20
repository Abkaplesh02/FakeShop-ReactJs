import { useNavigate} from "react-router-dom";


const MyCard=({data})=>{

    
    const {category,price,title,image,description,rating,id}=data;
    const navigate=useNavigate();
    
    return(
        <div className="border-2 relative border-transparent shadow-xl hover:shadow-2xl rounded-2xl flex justify-evenly  w-[520px] p-1 py-2  m-10 cursor-pointer ">

            <div className=" h-[250px] flex items-center">
            <img className="rounded-xl h-[220px] w-[200px]" src={image}/>
            </div>


            <div className="w-[50%] flex flex-col relative top-10 ">
                <h1 className="mx-auto mb-1 font-bold text-gray-700 text-sm ">{category}</h1>
                <h1 className="overflow-hidden my-1  text-gray-600 text-[1rem] h-[50px]" >{title.length>60 ? title.slice(0,60)+"..." : title}</h1>
                <h1 className="my-1 text-blue-700 text-bold text-xl">₹ {price}</h1>
                <div className="absolute top-[140px] flex justify-evenly w-full">
                    <button className="bg-blue-600 rounded-lg  p-1 text-white" onClick={()=>navigate(`/show-more/${id}`)}>Show More</button>
                    <button className="bg-gray-600 rounded-lg p-1 text-white">Add to Cart</button>
                </div>
            </div>
            <button className="bg-gray-200 absolute rounded-lg p-1 text-[0.8rem] font-bold top-[215px] left-[75px]">{rating.rate+"  "}⭐️ |{"  "+rating.count}</button>
        </div>
    )
}

export default MyCard;