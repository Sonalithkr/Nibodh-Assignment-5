import React from "react";

export default function banner() {
  return (
    <div className="row ">
      <div className="col-6 bggg">
        <div className="bann">
          <h2>
            Tesla Community! <br />
            10th year anniversary.
          </h2>
          <br></br>
          <br></br>
          <button className="btn btn-warning" style={{borderRadius:"30px"}} > JOIN OUT COMMUNITY</button>
        </div>
      </div>
      <div className="col-6 " style={{background:"black",color:"white"}}>
                <div className="row d-flex justify-content-between">
                <div className="col-2 bgg1">
                <i class="fas fa-award fa-5x"></i>
                <br/>
                <br/>
                <h6>2,500 awards</h6>
                </div>
                <div className="col-2 bgg1">
                <i class="fas fa-address-card fa-5x"></i>
                <br/>
                <br/>
                <h6>50,000 users</h6>
                </div>
                <div className="col-2 bgg1">
                <i class="fas fa-user-friends fa-5x "></i>
                <br/>
                <br/>
                <h6>70,000 employees</h6>
                </div>
            <br/>
        </div>
        </div>
        </div>
  );
}
