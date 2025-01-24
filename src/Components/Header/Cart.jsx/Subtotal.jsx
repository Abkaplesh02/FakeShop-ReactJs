const Subtotal=({data,getData})=>{
    console.log(data);

    let total=data.reduce((previousValue,currentValue)=>(previousValue+(currentValue.quantity*currentValue.price)),0);
    let totalQ=data.reduce((previousValue,currentValue)=>(previousValue+(currentValue.quantity)),0);
    console.log(total)
    
    return (
        <div className="flex  border-2 border-gray-200 w-11/12 mx-auto gap-20 p-4 shadow-lg hover:shadow-2xl my-12">
        
           <span className="text-2xl text-gray-700 font-bold">  Subtotal ({totalQ} items ) : </span> <span className="text-2xl text-blue-700 font-bold">  ₹ {total.toFixed(0)}</span>
        
        </div>
    )
}

export default Subtotal;