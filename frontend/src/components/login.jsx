import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="">
      <div className="row m-0">
        <div className="col-6">
          <div className="main-log d-flex justify-content-center align-items-center flex-column">
            <h2>Welcome Back !</h2>
            <p className="text-start">please enter your details</p>
            <form action="">
              <div>
                <label>Username</label>
                <div className="log-user">
                  <i class="bi bi-person"></i>

                  <input type="text" placeholder="Enter Username" />
                </div>
              </div>
              <div className="mt-2">
                <label>password</label>
                <div className="log-pass">
                  <i class="bi bi-lock"></i>

                  <input type="text" placeholder="Enter password" />
                </div>
              </div>
              <div className="mt-3">
                <button className="log-btn">login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6 login-left d-flex justify-content-center align-items-center">
          <div className="">
            <div className="rounded-circle rounded-log d-flex justify-content-center align-items-center">
              <i class="bi bi-book-half logo"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
