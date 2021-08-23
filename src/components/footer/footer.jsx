import React from 'react'

export default function footer() {
    return (
        <div className="xyz pt-5">
            <div className="row this">
                <div className="col-3 ">
                <img  className="photo" style={{height:230}}src={"https://ih1.redbubble.net/image.907991990.5845/flat,750x1000,075,t.jpg"} alt=""/>
                <h5>We are here to make your ride safe.</h5>
                </div>
                <div className="col-3 pt-5">
                 <h2>Team</h2>
                 
                     <h5>John D. Sneed</h5>
                     <h5>Jim Streets</h5>
                     <h5>Mark Hewitt</h5>
                     <h5>Kevin Yates</h5>
                 
                </div>
                <div className="col-3 pt-5">
                    <div className="contact ">
                    <i class="fas fa-phone-alt fa-2x"></i> +9833546510 <br/>
                <i class="fas fa-envelope-square fa-2x"></i> behance123@gmail.com
                    </div>
               
                </div>
                <div className="col-3 pt-5 ">
                <h6>FOLLOW US</h6>
                <div className="follow ">
                <i class="fab fa-facebook-square fa-2x"></i>
<i class="fab fa-linkedin fa-2x"></i>
<i class="fab fa-pinterest-square fa-2x"></i>
<i class="fab fa-instagram-square fa-2x"></i>
                </div>
                
                </div>
            </div>
           
        </div>
    )
}
