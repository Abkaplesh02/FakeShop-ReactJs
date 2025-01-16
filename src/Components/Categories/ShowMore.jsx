import MyPic1 from "../../assets/mens.png"
import MyPic2 from "../../assets/wishlist.png"
const ShowMore=()=>{
    return(
        <div className="flex border-2 border-gray-400 m-4">

            <div className="m-20">
                <img src={MyPic1} />
            </div>
            <div className="my-20 ml-[-20px]">
                <h1 className="mb-2 font-sans text-[1.4rem] font-bold">LifeLong</h1>
                <h1 className="text-[1.1rem] mb-4 font-sans text-gray-500">Blue Bathing Accessories</h1>
                <div className="border-b  border-gray-300 pb-4 mb-4"> <button className="bg-gray-300 rounded-lg p-1 px-3 text-[0.9rem] font-bold ">4.4⭐️ | 8</button></div>
                <h1 className="font-bold mb-4 text-[1.2rem]">₹599 <span className="text-gray-500"> MRP</span> <span className="line-through font-light text-gray-500">1699</span></h1>
                <h1 className="text-green-600 text-[1rem] font-bold mb-8">inclusive of all taxes</h1>
                <div className="flex ">
                    <button className="bg-blue-600 text-white p-2 px-20 mr-20 rounded-lg ">ADD TO BAG</button>
                <button className="flex items-center justify-evenly bg-white text-gray-500 border-2 mr-20 rounded-lg border-gray-400  p-2 px-20" ><img className="w-5 mr-2" src={MyPic2}/>WISHLIST</button>
                </div>
            </div>

        </div>
    )
}

export default ShowMore;