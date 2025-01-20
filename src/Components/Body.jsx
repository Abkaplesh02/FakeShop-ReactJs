import CardContainer from "./Cards/CardContainer";
import Categories from "./MainPageCarousel/Categories";
import Footerlist from "./Footer/Footerlist";
import Header from "./Header/Header";
import MyCarousel from "./MainPageCarousel/MyCarousel";
import ShowMore from "./Categories/ShowMore";
import ProductPage from "./Categories/Category/ProductsPage";
import { Route, BrowserRouter as  Router, Routes } from "react-router-dom";



const Body=()=>{

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
                <Route path="/products" element={<ProductPage/>}/>
            </Routes>
            <Footerlist/>
            </Router>
      
    )
}

export default Body;