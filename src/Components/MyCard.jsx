const MyCard=({data})=>{

    console.log(data);

    const {category,price,title,image,description}=data;
    return(
        <div className="border-2 border-transparent shadow-xl hover:shadow-2xl rounded-2xl flex justify-evenly w-[520px] p-1 py-2  m-10 cursor-pointer ">

            <div className="">
            <img className="rounded-xl h-[170px] w-[150px]" src={image}/>
            </div>


            <div className="w-[50%] flex flex-col relative ">
                <h1 className="mx-auto mb-1 font-bold text-gray-700 text-sm ">{category}</h1>
                <h1 className="overflow-hidden my-1  text-gray-600 text-[1rem]" >{title}</h1>
                <h1 className="my-1 text-blue-700 text-bold text-xl">₹ {price*10}</h1>
                <div className="absolute top-[140px] flex justify-evenly w-full">
                    <button className="bg-blue-600 rounded-lg  p-1 text-white">Show More</button><button className="bg-gray-600 rounded-lg   p11 text-white">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default MyCard;