import MyLogo from '../../assets/fakeShop.png';
import MyPerson from '../../assets/person.png';
import MyWish from '../../assets/paper.png'
import MyCart from '../../assets/add-to-cart.png'
import MySearch from '../../assets/search.png'
import { useState } from 'react';
import MenList from '../HeaderLists/MenList';
import WomenList from '../HeaderLists/WomenList';
import KidsList from '../HeaderLists/KidsList';
import HomeLiving from '../HeaderLists/HomeLiving';
import BeautyList from '../HeaderLists/BeautyList';
import Studio from '../HeaderLists/Studio';
import { useNavigate } from 'react-router-dom';

const Header=()=>{

    const [menState,setMenState]=useState(false);
    const [womenState,setWomenState]=useState(false);
    const [kidsState,setKidsState]=useState(false);
    const [homeState,setHomeState]=useState(false);
    const [beautyState,setBeautyState]=useState(false);
    const [studioState,setStudioState]=useState(false);
    const navigate=useNavigate();


    const list=["MEN","WOMEN","KIDS","HOME & LIVING","BEAUTY",]
    return(
        <div className='flex justify-between pl-14 items-center pr-8 py-5 shadow-2xl  z-10 fixed top-0 left-0 right-0 bg-white'>
            <div className='w-1/12 mr-[-50px]'>
            <img src={MyLogo} onClick={()=>navigate("/")} className='w-[70%] cursor-pointer'/>
            </div>

            <ul className='flex justify-between w-4/12 '>
               <li className='text-sm text-[#282c3f] font-bold font-sans cursor-pointer border-b-[5px] border-transparent  hover:border-b-[5px] hover:border-blue-900 ' onMouseEnter={()=>setMenState(true)}  onMouseLeave={()=>setMenState(false)}>MEN</li>
               <li className='text-sm text-[#282c3f] font-bold font-sans cursor-pointer border-b-[5px] border-transparent  hover:border-b-[5px] hover:border-[#ee5f73]' onMouseEnter={()=>setWomenState(true)}  onMouseLeave={()=>setWomenState(false)}>WOMEN 

               </li>
               <li className='text-sm text-[#282c3f] font-bold font-sans cursor-pointer border-b-[5px] border-transparent  hover:border-b-[5px] hover:border-orange-600' onMouseEnter={()=>setKidsState(true)}  onMouseLeave={()=>setKidsState(false)}>KIDS</li>
               <li className='text-sm text-[#282c3f] font-bold font-sans cursor-pointer border-b-[5px] border-transparent  hover:border-b-[5px] hover:border-yellow-600' onMouseEnter={()=>setHomeState(true)}  onMouseLeave={()=>setHomeState(false)}>HOME & LIVING</li>
               <li className='text-sm text-[#282c3f] font-bold font-sans cursor-pointer border-b-[5px] border-transparent  hover:border-b-[5px] hover:border-green-800' onMouseEnter={()=>setBeautyState(true)}  onMouseLeave={()=>setBeautyState(false)}>BEAUTY</li>
                <li className='text-sm text-[#282c3f] font-bold font-sans cursor-pointer border-b-[5px] border-transparent hover:border-b-[5px] hover:border-[#ff3f6c]' onMouseEnter={(item)=>setStudioState(true)} onMouseLeave={()=>setStudioState(false)}>STUDIO <sup className='text-[#ff3f6c]'>  NEW</sup></li>
            </ul>

            {menState && <MenList setMenState={setMenState}/>}
            {womenState && <WomenList setWomenState={setWomenState}/>}
            {kidsState && <KidsList setKidsState={setKidsState}/>}
            {homeState && <HomeLiving setHomeState={setHomeState}/>}
            {beautyState && <BeautyList setBeautyState={setBeautyState}/>}
            {studioState && <Studio setStudioState={setStudioState}/>}



            <div className='w-4/12 flex items-center'>
            <div>
            <img src={MySearch} className='h-[40px] pr-2 bg-[#f5f5f6] p-2 pl-4'/></div>
                <input type="text" className='w-full bg-[#f5f5f6] h-10 pl-4' placeholder='Search for products, brands and more'/>
            </div>

            <div className='flex justify-evenly w-2/12'> 

            
            <div className='flex flex-col items-center justify-center cursor-pointer '>
                <img src={MyPerson} className='w-6 mb-2' />
                <h1 className='text-xs text-[#282c3f] font-bold font-sans'>Profile</h1>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer '>
                <img src={MyWish} className='w-6 mb-2' />
                <h1 className='text-xs text-[#282c3f] font-bold font-sans'>Wishlist</h1>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer '>
                <img src={MyCart}  className='w-6 mb-2'/>
                <h1 className='text-xs text-[#282c3f] font-bold font-sans'>Cart</h1>
            </div>

            </div>

        </div>
    )
}

export default Header;