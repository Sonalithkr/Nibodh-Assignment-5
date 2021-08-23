import React from "react";

export default function form() {
  return (
    <div className="formm">
      <div className="row " style={{ position: "reative" }}>
        <div className="col-6 p-3">
          <img
            className="form-img"
            src={
              "https://th.bing.com/th/id/R.f595bc5366dc3011e24f4f682e0b2439?rik=Z8vl8kjyibth6w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fTesla-PNG-Transparent-Image-420x279.png&ehk=IjDoytcX7lIDywx63FWCzQMt4y1YpBffb789iZP5eHI%3d&risl=&pid=ImgRaw&r=0"
            }
          ></img>
          <span className="line">
            <h1>Get in contact with us</h1>
            <hr />
          </span>

          <div className="row">
            <div className="col-6 p-2">
    
              <span className="icon-form-1">
                <i class="fas fa-user-edit"></i>
                <input type="text" placeholder="full name"></input>
              </span>
            </div>

            <div className="col-6 p-2">
              <span className="icon-form-2">
                <i class="fas fa-envelope-square"></i>
                <input
                  type="email"
                  placeholder="email address"
                  defaultValue="abc@gmail.com"
                ></input>
              </span>
            </div>

            <div className="col-6 p-2 ">
              <span className="icon-form-1">
                <i class="fas fa-keyboard"></i>
                <input type="text" placeholder="model interested in"></input>
              </span>
            </div>

            <div className="col-6 p-2">
              <span className="icon-form-2">
                <i class="fas fa-address-book"></i>
                <input type="address" placeholder="address"></input>
              </span>
            </div>

            <div className="col-12 p-2 ">
              <span className="icon-form-3">
                <i class="fas fa-pen"></i>
                <textarea
                  style={{ width: "70%" }}
                  Value="interested to purchase tesla"
                ></textarea>
              </span>
            </div>

            <div className="col-12 ">
              <button className=" submit btn btn-warning ">submit</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
