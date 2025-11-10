import React, { useEffect } from "react";
import StudentSidebar from "./student_sidebar";
import "./student-bar.css";
import { useRef, useState } from "react";
import { loader } from "../redux/reducer";
import axios from "axios";
import Loader from "../loader/loader";
import { useDispatch,useSelector } from "react-redux";
import { Form } from "react-router-dom";
export default function Upload() {
const dispatch=useDispatch()

  const isLoading=useSelector(state=>state.auth.isLoader)
  const inputref = useRef();
  const [filing, setfiling] = useState([]);
  function calluploadfunction() {
    inputref.current.click();
  }

  const savefile = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      console.log("not supported");
    } else {
      let sizeforstore = file.size / 1024;
      sizeforstore = (sizeforstore / 1024).toFixed(2);

      console.log(sizeforstore);

      setfiling((prev) => [
        ...prev,
        {
          name: file.name,
          size: sizeforstore,
          file: file,
        },
      ]);
      console.log("hello shamil", filing);
    }
  };

  useEffect(()=>{
console.log("loading",isLoading)
  },[isLoading])



  const Submitting = () => {
    dispatch(loader(true))
    const email = localStorage.getItem("email");
    const formdata = new FormData();
    filing.forEach((item) => {
      formdata.append("files", item.file);
    });
    formdata.append("email", email);

    axios.post("http://localhost:8000/filecreation", formdata, {
      headers:{
  "Content-Type": "multipart/form-data",
      }
    
    })
    .then((res)=>{
      console.log(res)
      dispatch(loader(false))
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <>
    {
      isLoading&&
      <Loader/>
    }
      <div className="dashboard-layout">
        <StudentSidebar active={"upload"} />
        <main className="dashboard-content w-100">
          <div className="upload-file-section">
            <section className="file-upload-div">
              <div className="p-3">
                <div className="row m-0 p-0">
                  <div className="col-8 m-0 p-0 upload-heading">
                    <h5 className="m-0">File Upload</h5>
                    <p className="m-0">
                      Add your Documents here and you can upload 5 max here
                    </p>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="row m-0 p-0 ">
                    <div
                      className="col-12 m-0  border-of-file"
                      onClick={calluploadfunction}
                    >
                      <img src="/upload.png" alt="" />
                      <input
                        type="file"
                        id="fileInput"
                        className="d-none"
                        accept="application/pdf"
                        ref={inputref}
                        onChange={(e) => savefile(e)}
                      ></input>
                      <p className="m-0">
                        drag your files or <span>browse </span>
                      </p>
                      <h6 className="">Max 2mb files are accept</h6>
                    </div>
                  </div>
                  <p className="supported-pdf">only supported is pdf</p>
                </div>
                <div className="over-hidden">
                  {filing.length > 0 &&
                    filing.map((item, index) => (
                      <div className="pt-3" key={index}>
                        <div className="row m-0 p-0 ">
                          <div className="col-12  dashed-line-sub p-3">
                            <div className="row align-items-center">
                              <div className="col-6 d-flex gap-2 align-items-center">
                                <div>
                                  <img src="/pdf.png" alt="" />
                                </div>
                                <div className="file-label">
                                  <h6 className="m-0">{item.name}</h6>
                                  <p className="m-0">{item.size} mb</p>
                                </div>
                              </div>
                              <div className="col-6 d-flex justify-content-end align-items-center">
                                <img
                                  src="/delete (2).png"
                                  alt="not-loaded"
                                  className="delete-file-png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                {filing.length > 0 && (
                  <div className="d-flex justify-content-end align-items-center pt-3 gap-2 file-upload-btn">
                    <button>cancel</button>
                    <button onClick={Submitting}>Submit</button>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
