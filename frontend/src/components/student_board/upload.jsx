import React from "react";
import StudentSidebar from "./student_sidebar";
import "./student-bar.css";
import { useRef, useState } from "react";
export default function Upload() {
  const inputref = useRef();
  const [filing,setfiling]=useState([])
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

     setfiling((prev)=>[
        ...prev,
        {
            "name":file.name,"size":sizeforstore,"file":file
        }
     ])
      console.log("hello shamil", filing);
    }
  };

  return (
    <>
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

            
                {filing.length>0&&(  
                filing.map((item, index) => (
                  <div className="pt-3"key={index}>
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
                )))}
                    </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
