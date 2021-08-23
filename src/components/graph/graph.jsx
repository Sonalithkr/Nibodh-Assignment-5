import React from "react";
import logo2 from "../../images/logo2.jpg"
export default function graph() 
{
var array1 = [
    { name: "Toyoto Pirus", val: 40 },
    { name: "Ford Fusion", val: 45 },
    { name: "Nissan Sentra ", val: 60 },
    { name: "Tesla", val: 76 }
]

  return (
    <div>
      <div className="row custom">
				<div className="col-5">
					<h1>Tesla Sales</h1>
					<ul>
						{["Tesla","Ford Fusion", "Nissan Sentra", "Toyoto Pirus"].map((data)=><h4>{data}</h4>)}
					</ul>

					<button 
						className="btn btn-warning">know more</button>
          </div>

        <div className="col-7">
					<div className="height-chart d-flex justify-content-around ">
						{/* array of objects */}
						{array1.map((data) => {
							return (
								<div className="con-bar">
									<div className="bar-chart " style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						}
                        )
                        }
                        
					</div>
				</div>
              


      </div>
    </div>
  );
 }
