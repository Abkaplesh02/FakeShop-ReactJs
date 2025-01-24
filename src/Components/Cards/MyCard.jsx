import axios from "axios";
import { useNavigate} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const MyCard=({data})=>{
    const successNotify=()=>toast("Sucess! Added to Cart", { autoClose: 3000 });
    const faileNotify=()=>toast.error("Failed! Some Erro", { autoClose: 3000 })
    const {category,price,title,image,description,rating,id}=data;
    const navigate=useNavigate();

   
    const handleCart=async()=>{
        const dataList={
            productId:id,
            category:category,
            price:price*100,
            title:title,
            image:image,
            rating:rating.rate,
            ratingC:rating.count,
            quantity:1,
         
        }

        try{
            const response=await axios.post("http://localhost:3000/cart",dataList);
            successNotify();
        }
        catch{
            faileNotify();
        }
    }
    
    return(
        <div className=" border-2 relative border-transparent shadow-xl hover:shadow-2xl hover: rounded-2xl flex justify-evenly  p-1 py-2  m-2 cursor-pointer ">

            <div className=" h-[250px] flex items-center">
            <img className="rounded-xl h-[220px] w-[200px]" src={image}/>
            </div>


            <div className="w-[50%] flex flex-col relative top-10 ">
                <h1 className="mx-auto mb-1 font-bold text-gray-700 text-sm ">{category}</h1>
                <h1 className="overflow-hidden my-1  text-gray-600 text-[1rem] h-[50px]" >{title.length>60 ? title.slice(0,60)+"..." : title}</h1>
                <h1 className="my-1 text-blue-700 text-bold text-xl">₹ {(price*100).toFixed(2)}</h1>
                <div className="absolute top-[140px] flex justify-evenly w-full">
                    <button className="bg-blue-600 rounded-lg  p-1 text-white px-4" onClick={()=>navigate(`/show-more/${id}`)}>Show More</button>
                    <button className="bg-gray-600 rounded-lg p-1 text-white px-4" onClick={()=>handleCart()}>Add to Cart</button>
                </div>
            </div>
            <button className="bg-gray-200 absolute rounded-lg p-1 text-[0.8rem] font-bold top-[215px] left-[75px]">{rating.rate+"  "}⭐️ |{"  "+rating.count}</button>
            <ToastContainer position="top-right"/>
        </div>
    )
}

export default MyCard;