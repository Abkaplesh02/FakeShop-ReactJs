import MyPic1 from "../assets/"
const FooterComponent = () => {
    const ONLINE=["Men","Women","Kids","Home & Living","Beauty","Gift Cards","Myntra Insider"];
    const USEFUL=["Blog","Careers","Site Map", "Corporate Information","Whitehat", "Cleartrip"];
    const CUSTOMER=["Contact Us", "FAQ", "T&C" ,"Terms Of Use","Track Orders","Shipping","Cancellation","Returns","Privacy policy","Grievance Redressal"];
    return(
        <div className="w-full">

            <div>
                <ul>
                    <li><h1></h1>ONLINE SHOPPING</li>
                    {
                        ONLINE.map((item,index)=>( 
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>


                <ul>
                <li><h1></h1>USEFUL LINKS</li>
                {
                        USEFUL.map((item,index)=>( 
                            <li key={index}>{item}</li>
                        ))
                    }
               
                </ul>
            </div>

            <div>

            <ul>
                <li><h1></h1>CUSTOMER POLICIES</li>
                {
                        CUSTOMER.map((item,index)=>( 
                            <li key={index}>{item}</li>
                        ))
                    }
               
                </ul>
            </div>


            <div>
               
            </div>

        </div>
    )
}

export default FooterComponent;