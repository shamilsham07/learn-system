import React from "react";
import "./admin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({Name}) {
  const navigate=useNavigate()
  const [defaultDrop, setdrop] = useState(false);

console.log("hi",Name)


  function Dropdownactive() {
    defaultDrop ? setdrop(false) : setdrop(true);
  }
  return (
    <div>
      <button
        class="btn btn-primary d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Open Sidebar
      </button>

      <div
        class="offcanvas-lg offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title text-dark" id="offcanvasScrollingLabel">
            <i class="bi bi-book-half admin-logo"></i> Admin Panel
          </h5>

          <button
            type="button"
            class="btn-close d-lg-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body">
          <ul class="list-unstyled p-3 w-100">
            <li className="mb-5 d-none d-lg-block">
              <div className="d-flex justify-content-between align-items-center">
                <i class="bi bi-book-half admin-logo"></i>
                <h6 className="learn">Learn</h6>
              </div>
            </li>
            <li className={`p-3 ${Name=="Dashboard"?"li-actives":""}`}
            onClick={()=>navigate("/admin")}
            >

              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-grid"></i>
                <h6 className="m-0">Dashboard</h6>
              </div>
            </li>
            <li className={`mt-3 p-3 ${Name=="student"?"li-actives":""}`}
            onClick={()=>navigate("/Students")}>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-mortarboard"></i>
                <h6 className="m-0">Student</h6>
              </div>
            </li>
            <li className="mt-3 p-3">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-gear"></i>
                <h6 className="m-0">Managment</h6>
              </div>
            </li>
            <li className="mt-3 p-3">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-clock"></i>
                <h6 className="m-0">Attendence</h6>
              </div>
            </li>

            <li className="mt-3 p-3">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-mortarboard"></i>
                <h6 className="m-0">Student</h6>
              </div>
            </li>
            <li className="mt-3 p-3 position-relative" onClick={Dropdownactive}>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-check2"></i>
                <h6 className="m-0">List</h6>

                <i
                  class={`${
                    defaultDrop
                      ? "bi bi-caret-up-fill"
                      : "bi bi-caret-down-fill"
                  }  drop-down-arrow`}
                ></i>
              </div>
            </li>
            {defaultDrop && (
              <div className={`dropinganimation ${defaultDrop ? "open" : ""}`}>
                <li className="mt-2 p-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-mortarboard opacity-0 "></i>
                    <h6 className="m-0">Questions</h6>
                  </div>
                </li>
                <li className="mt-2 p-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-mortarboard opacity-0"></i>
                    <h6 className="m-0">Teachers</h6>
                  </div>
                </li>{" "}
                <li className="mt-2 p-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-mortarboard opacity-0"></i>
                    <h6 className="m-0">Emails</h6>
                  </div>
                </li>
              </div>
            )}

            <li className="mt-3 p-3">
              <div className="d-flex align-items-center gap-3">
                <i class="bi bi-box-arrow-right"></i>
                <h6 className="m-0">Logout</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
