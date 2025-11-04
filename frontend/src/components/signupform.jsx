import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signupform() {
  const navigate = useNavigate("");
  const [name, setname] = useState("");
  const [schoolname, setschool] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [fathername, setfathername] = useState("");
  const [mothername, setmothername] = useState("");
  const [standard, setstandard] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState([]);

  function Makeempty() {
    setemail("");
    setfathername("");
    setmothername("");
    setname("");
    setphonenumber("");
    setstandard("");
    setschool("");
  }

  function callalertfunction() {
    console.log("hi master");
    toast.error(" Your Password Doesn't match !", {
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
  }

  function passwordchecking(e) {
    const errors = [];

    console.log(e);
    console.log(typeof e);
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (e.length < 8) errors.push("minimum 8 digit");
    if (!/[A-Za-z]/.test(e)) errors.push("atleast one Digit");
    if (!/\d/.test(e)) errors.push("atleast one number");

    seterror(errors);

    console.log(error.length);
  }
  async function signin(e) {
    e.preventDefault();

    if (error.length > 0) {
      console.log("not submitted");
      return callalertfunction();
    }
    console.log("whatf");

    const formdata = new FormData();

    formdata.append("name", name);
    formdata.append("fathername", fathername);
    formdata.append("mothername", mothername);
    formdata.append("standard", standard);
    formdata.append("school", schoolname);
    formdata.append("phonenumber", phonenumber);
    formdata.append("email", email);
    formdata.append("password",password)

    try {
      const result = await fetch("http://localhost:8000/signup/", {
        method: "POST",
        body: formdata,
      });

      const res = await result.json();
      console.log(res);
      if (res.success) {
        Makeempty();
        navigate("/");
      }
    } catch (error) {
      console.log("r");
      console.log(error);
    }

    console.log("hi");
  }

  return (
    <section className="bg-theme Signup-back">
      <ToastContainer containerId={"A"} />
      <div className="padding-blocks">
        <div className="container">
          <div className="row m-0 ">
            <div className="col-lg-5 col-sm-12 col-xl-5 col-md-5 m-0 left-section-sign d-flex justify-content-center align-items-center">
              <div className="padding-block">
                <div className="padding-inline">
                  <div className="d-flex  flex-column gap-4">
                    <div className="d-flex flex-row justify-center align-items-center gap-4">
                      <div className="signup-card p-2 px-3">
                        <i class="bi bi-cpu"></i>
                      </div>
                      <div className="sign-card-cont">
                        <h6 className="m-0 text-white">Machine learning</h6>
                        <p className=" text-white">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil nobis natus quae pariatur modi dolorum?
                          Blanditiis
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-center align-items-center gap-4">
                      <div className="signup-card p-2 px-3">
                        <i className="bi bi-robot"></i>
                      </div>
                      <div className="sign-card-cont">
                        <h6 className="m-0 text-white">
                          Artificial intelligence
                        </h6>
                        <p className=" text-white">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil nobis natus quae pariatur modi dolorum?
                          Blanditiis
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-center align-items-center gap-4">
                      <div className="signup-card p-2 px-3">
                        <i className="bi bi-gear"></i>
                      </div>
                      <div className="sign-card-cont">
                        <h6 className="m-0 text-white">Automation</h6>
                        <p className=" text-white">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil nobis natus quae pariatur modi dolorum?
                          Blanditiis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 col-md-7 col-xl-7 m-0  bg-white">
              <div className="padding-block">
                <div className="container">
                  <div className="padding-inline">
                    <h3 className="signup-heading">
                      Sign up as <br />
                      <span>Student</span>
                    </h3>
                    <hr className="linefor-signup" />

                    <form action="" onSubmit={signin}>
                      <div className="d-flex flex-column sign-form-user">
                        <label htmlFor="">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div className="d-flex gap-2 pt-2 naming-signup">
                        <div className="d-flex flex-column w-50">
                          <label htmlFor="">father name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={fathername}
                            onChange={(e) => setfathername(e.target.value)}
                          />
                        </div>
                        <div className="d-flex flex-column w-50">
                          <label htmlFor="">mother name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={mothername}
                            onChange={(e) => setmothername(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-2 pt-2 naming-signup">
                        <div className="d-flex flex-column w-50">
                          <label htmlFor="">School name</label>
                          <input
                            type="text"
                            name="school"
                            required
                            value={schoolname}
                            onChange={(e) => setschool(e.target.value)}
                          />
                        </div>
                        <div className="d-flex flex-column w-50">
                          <label htmlFor="">standard</label>
                          <input
                            type="number"
                            name="number"
                            required
                            value={standard}
                            onChange={(e) => setstandard(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex pt-1 flex-column pt-2 sign-form-user ">
                        <label htmlFor="">Phone number</label>
                        <input
                          type="number"
                          name="phonenumber"
                          required
                          value={phonenumber}
                          onChange={(e) => setphonenumber(e.target.value)}
                        />
                      </div>
                      <div className="d-flex flex-column sign-form-user  pt-2 ">
                        <label htmlFor="">Email address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                      <div className="d-flex flex-column sign-form-user  pt-2 ">
                        <label htmlFor="">Password</label>
                        <input
                          type="password"
                          name="password"
                          required
                          value={password}
                          onChange={(e) => {
                            const value = e.target.value;
                            setpassword(e.target.value);
                            passwordchecking(value);
                          }}
                        />
                        <p className="text-danger password-error">
                          {error.length > 0
                            ? `Your password should contain" ${error.join(",")}`
                            : ""}
                        </p>
                      </div>
                      <div className="d-flex justify-content-end  w-75 pt-2 ">
                        <button
                          className="bg-theme text-white w-25 p-2 submit-signup"
                          type="submit"
                        >
                          Submit{" "}
                        </button>
                      </div>
                    </form>
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
