import MyPic2 from "../../../assets/Imp.gif"
import { fetchData } from "../../../utils/fetchData";
import DataLoading from "../../ErrorContent/DataLoading";
import Product from "./Product";



const SimilarProducts=()=>{

    const data=fetchData();

    if(data==null){
        return <DataLoading/>;
    }

    
    return(
        <div className=" mt-14">
            <div className="flex justify-center text-xl text-gray-600 font-bold font-sans my-16">Similar Products</div>
            <div className="flex flex-wrap ">

                {
                    data.map((item,index)=>(
                        <Product data={item}/>
                    ))
                }
            
            
            </div>

            
        </div>
    )
}

export default SimilarProducts;