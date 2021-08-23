import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function card3(props) {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={props.src} alt="Cardimagecap" />
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <ProgressBar completed={props.val} bgColor="#800818" baseBgColor="#db994c" labelColor="#ffff" />
        </div>
      </div>
    </div>
  );
}