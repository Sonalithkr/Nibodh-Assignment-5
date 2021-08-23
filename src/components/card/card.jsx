import React from 'react'

import logo1 from "../../images/logoname.png"
export default function card() {
    return (
        <div>
           <div className="cardd">
            <br/>
            <br/>
            <img  className="photo" src={"https://cdn.dribbble.com/users/1578582/screenshots/14442481/media/4744fd7360a52d267d9538fef3cc9db6.jpg"} alt=""/><br/>
            <div className="ttt">
    
            <h2 style={{fontFamily:"sans-serif"}}><b>Tesla</b> is Fun</h2><br/>
         
            </div>

            <hr/>
            <br/>
        </div> 

        <div className="container">
            <br/>
            <div className="row">
               <div className="col-6" >
               <img className="sss" src={logo1} alt=""/>
               </div>
               
            <div className="col-6 sona ">
               <h1>let's go for a ride</h1>
            <br/>
               <p>Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses. For the best experience, we recommend upgrading or changing your web browser. Learn More. Model S Order Online for Touchless Delivery. Custom Order Existing Inventory. Custom Order Existing Inventory. </p>
                   
               </div>
            </div>
            <br/>
        </div>

        </div>
    )
}
