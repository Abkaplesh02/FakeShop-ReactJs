const MyCard=()=>{
    return(
        <div className="border-2 border-transparent shadow-xl hover:shadow-2xl rounded-2xl flex justify-evenly w-3/12 p-2 items-center m-10 cursor-pointer hover:blur-sm">

            <div className="w-[35%]">
            <img className="rounded-2xl h-40" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/16/tPpS4XZk_a89128d58725402798fca7826e9f824c.jpg" alt="" />
            </div>


            <div className="w-[50%] flex flex-col ">
                <h1 className="mx-auto my-1 font-bold text-[#282c3f] text-lg ">Safari</h1>
                <h1 className="overflow-hidden my-1 text-[#282c3f] text-sm" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci a sit quisquam sequi temporibus ab corporis quas ex asperiores! Incidunt voluptate possimus sed eligendi, quasi ipsa in animi optio deleniti.</h1>
                <h1 className="my-1 text-[#282c3f] text-bold">₹ 1000</h1>
            </div>
        </div>
    )
}

export default MyCard;