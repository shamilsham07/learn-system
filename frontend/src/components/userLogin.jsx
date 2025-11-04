import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserLogin() {
  const navigate=useNavigate("")
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

function somethingerror(){
    toast.error(" something went wrong", {
      position: "top-right",
      containerId:"A",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setpassword("")
}

  const makenull = () => {
    setusername("");
    setpassword("");
  };

  function Login(e) {
    e.preventDefault();
    console.log("jayyy");
    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    axios
      .post("http://localhost:8000/Login", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const result = res.data;
        console.log(result)
        if (result.userlogs) {
          makenull()
          navigate("/")
        }
        else{
         return somethingerror()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section className="user-log d-flex justify-content-center align-items-center">
      <ToastContainer containerId={"A"}/>
      <div className="padding-blocks">
        <div className="container">
          <div className="row m-0 justify-content-center ">
            <div className="col-5 m-0 p-0">
              <img src="/3393544.jpg" className="w-100 h-100" alt="" />
            </div>
            <div className="col-5 m-0 p-0 bg-white">
              <div className="padding-block">
                <div className="container">
                  <h3 className="user-log-heading">Login</h3>
                  <p className="subheading-user-log">
                    welcome bacck please Login to your <br />
                    account
                  </p>
                  <form action="" onSubmit={Login}>
                    <div className="userlog-username">
                      <label htmlFor="" className="mb-2">
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="mb-2"
                        onChange={(e) => setusername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="userlog-username">
                      <label htmlFor="" className="mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => setpassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="userlog-btn mt-3">
                      <button type="submit">Login</button>
                    </div>
                  </form>
                  <div className="mt-4">
                    <h6 className="new-user">
                      New User ? <a href="/signup">Sign Up</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
