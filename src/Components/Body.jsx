import CardContainer from "./CardContainer";
import Footerlist from "./Footerlist";
import Header from "./Header";

import MyCarousel from "./MyCarousel";

const Body=()=>{
    return(
        <div>
            <Header/>
            <MyCarousel/>
            <CardContainer/>
            <Footerlist/>
        </div>
    )
}

export default Body;