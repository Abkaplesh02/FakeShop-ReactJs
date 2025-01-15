const WomenList=()=>{
    const Indian=["Kurta & Suits","Kurtis, Tunics , Tops","Ethnic Dresses","Leggings, Salwars, Churidars","Sarees","Dupattas, Shawls","Blouses","Lehenga Cholis","Dress Material","Anarkali Suits","Patiala Suits","Gowns","Jackets"];
    const WesternWear=["Dresses & Jumpsuits","Tops,Shorts & Skirts","Shrugs","Sweaters & Sweatshirts","Jackets & Coats","Blazers & Waistcoats","Suits & Dress Materials","Leggings & Jeggings","Dresses & Jumpsuits","Tops, T-Shirts & Shirts","Jeans & Jeggings","Trousers & Capris","Shorts & Skirts","Shrugs","Sweaters & Sweatshirts"];
    const Footwwear=["Sports Sandals","Running Shoes","Training & Gym Shoes","Football Shoes","Cricket Shoes","Tennis Shoes","Badminton Shoes","Basketball Shoes","Walking Shoes","Athletic Shoes"];
    const SportsActiveWear=["Sports Shoes","Sports Sandals","Active T-Shirts","Track Pants","Track Suits","Track Jackets","Sports Equipment"];
    const BeautyPersonalCare=["Makeup","Skin Care","Hair Care","Bath & Body","Fragrances","Grooming","Beauty & Wellness","Personal Care Appliances"];
    const Gadgets=["Smart Wearables","Headphones","Speakers","Mobile Cases","Power Banks","Laptop Bags","Backpacks","Travel Accessories"];
    const Jwellery=["Earrings","Rings","Necklaces","Bracelets","Bangles","Anklets","Mangalsutras","Pendants","Jewellery Sets","Nose Rings","Toe Rings","Hair Accessories","Brooches","Saree Pins"];
    return(
        <div className="w-6/12 flex justify-between absolute top-[120px] left-[170px] bg-white p-8 shadow-2xl ">
            

            <div>
                <ul className="border-b-2 border-gray-300 my-4 pb-4">
                    <li><h1 className="text-[#ee5f73] text-[0.9rem] text-[0.9rem]">Indian & Fusion Wear</h1></li>
                    {
                        Indian.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer' key={index}>{item}</li>))
                    }
                </ul>


                <ul>
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Belts, Scarves & More</h1></li>
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Watches & Wearables</h1></li>
                </ul>
            </div>


            <div>
            <ul className="border-b-2 border-gray-300 my-4 pb-4">
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Western Wear</h1></li>
                    {
                        WesternWear.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer' key={index}>{item}</li>))
                    }
                </ul>

                <ul>
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Plus Size</h1></li>
                </ul>
            </div>


            <div>
            <ul className="border-b-2 border-gray-300 my-4 pb-4">
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Footwear</h1></li>
                    {
                        Footwwear.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer' key={index}>{item}</li>))
                    }
                </ul>

                <ul>
                    <li><h1 className="text-[#ee5f73] text-[0.9rem] my-2">Personal Care & Grooming</h1></li>
                    <li><h1 className="text-[#ee5f73] text-[0.9rem] my-2">Sunglasses & Frames</h1></li>
                    <li><h1 className="text-[#ee5f73] text-[0.9rem] my-2">Watches</h1></li>

                    
                </ul>
            </div>


            <div>

            <ul className="border-b-2 border-gray-300 my-4 pb-4">
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Sports & Active Wear</h1></li>
                    {
                        SportsActiveWear.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer' key={index}>{item}</li>))
                    }
                </ul>

                <ul>
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Gadgets</h1></li>
                    {
                        Gadgets.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer' key={index}>{item}</li>))
                    }
                </ul>



            </div>

            <div>

            <ul className="border-b-2 border-gray-300 my-4 pb-4 ">
                    <li><h1 className="text-[#ee5f73] text-[0.9rem]">Jewellery</h1></li>
                    {
                    Jwellery.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer' key={index}>{item}</li>))
                    }
                </ul>
                <ul>
                    <li className="my-2"><h1 className="text-[#ee5f73] text-[0.9rem]">Bags & Backpacks</h1></li>
                    <li className="my-2"><h1 className="text-[#ee5f73] text-[0.9rem]">Luggage & Trolleys</h1></li>
                    
                </ul>




            </div>


        </div>
    )
}

export default WomenList; 