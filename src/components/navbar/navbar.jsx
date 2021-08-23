import React from 'react'
import logo from "../../images/logo2.png"
export default function Navbar() {
    return (
             <div className="bgg">
            <div className="row">
            <div className="col-2"> 
            <img src={logo} className="img"/>
            </div>


            <div className="col-8 ">
            <ul className="navbar-nav mr-auto d-flex flex-row justify-content-evenly linkcolor">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#">Model X</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Model 3</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Model S</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Model Y</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Solar Roof</a>
      </li>
      </ul>
</div>

    



            <div className="col-2 "> 
            <button className="btn btn-outline-dark buttonal">custome order</button>
            </div>
            </div>

        </div>
    )
}
