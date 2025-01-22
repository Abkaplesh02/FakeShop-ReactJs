import WishProduct from "./WishProduct";
import Wishlist from "../../../assets/paper.png"

const WishListC=()=>{
    return (
        <div className="my-40">
            <h1 className="flex gap-5 items-center text-2xl font-bold text-gray-600 justify-center mb-10">WishList <img src={Wishlist} className="w-12"/></h1>
           <WishProduct/>
           <WishProduct/>
        </div>
    )
}
export default WishListC;