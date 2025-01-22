import cart from "../../../assets/cart.png"
import CartProduct from "./CartProduct";

const CartC=()=>{
    return (
        <div className="my-40">
            <h1 className="flex gap-5 items-center text-2xl font-bold text-gray-600 justify-center mb-10">Cart <img src={cart} className="w-12"/></h1>
          
           <CartProduct/>
           <CartProduct/>
        </div>
    )
}
export default CartC;