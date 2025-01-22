import CardContainer from "./Cards/CardContainer";
import Categories from "./MainPageCarousel/Categories";
import Footerlist from "./Footer/Footerlist";
import Header from "./Header/Header";
import MyCarousel from "./MainPageCarousel/MyCarousel";
import ShowMore from "./Categories/ShowMore";
import ProductPage from "./Categories/Category/ProductsPage";
import { Route, BrowserRouter as  Router, Routes, useParams } from "react-router-dom";
import { useEffect } from "react";
import HLProducts from "./Header/HeaderListProducts/HLProducts";
import SearchProducts from "./SearchPage/SearchProducts";

const Body=()=>{
    const {id}=useParams();

    useEffect(()=>{
                window.scrollTo(0,0)
        },[id])
   
    return( 
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={
                    <>
                    <MyCarousel/>
                    <Categories/>
                    <CardContainer/>
                    </>       
                }/>
                <Route path="/show-more/:id" element={<ShowMore/>}/>
                <Route path="/products/:id" element={<ProductPage/>}/>
                <Route path="/items" element={<HLProducts/>}/>
                <Route path="/search" element={<SearchProducts/>}/>

            </Routes>
            <Footerlist/>
            </Router>
      
    )
}

export default Body;