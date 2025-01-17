import CardContainer from "./Cards/CardContainer";
import Categories from "./MainPageCarousel/Categories";
import Footerlist from "./Footer/Footerlist";
import Header from "./Header/Header";
import MyCarousel from "./MainPageCarousel/MyCarousel";
import ShowMore from "./Categories/ShowMore";


const Body=()=>{
    return(
        <div>
            {/* <Header/>
            <MyCarousel/>
            <Categories/>
            <CardContainer/>
            <Footerlist/> */}

            <ShowMore/>
        </div>
    )
}

export default Body;