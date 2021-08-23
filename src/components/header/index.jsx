import React from "react";

export default function Header() {
  return (
    <div>
      <div className="colorr pt-3">
        <div className="row ">
          <div className="col-6 d-flex">
            <div className="icon ">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fas fa-question-circle"></i>
              <i class="fas fa-car"></i>
            </div>

            <div className="phone-number">+9198364720</div>
          </div>

          <div className="col-6 login-signup">
            <div className="login-out btn btn-outline-dark ">
              <i class="fas fa-sign-in-alt "></i>
              <button>login</button>
              &nbsp;
              <i class="fas fa-sign-in-alt"></i>
              <button>sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
