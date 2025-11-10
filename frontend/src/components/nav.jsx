import React, { useEffect } from "react";
import { useState } from "react";
export default function Nav({ active }) {
  const [activedpage, setactivedPage] = useState("home");

  useEffect(() => {
    setactivedPage(active);
  }, [active]);

  return (
    <section className="">
      <nav class="navbar navbar-expand-lg fixed-top bg-white">
        <div class="container  p-2  d-flex justify-content-between align-items-center box-shadow nav-opacity ">
          <div className="d-flex gap-2 align-items-center">
            <i class="bi bi-book-half logo-nav"></i>
            <h6 className="logo-heading text-theme">
              Learn <br /> <span>platform</span>
            </h6>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list-stars"></i>
          </button>

          <div
            class="collapse navbar-collapse flex-grow-1"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
              <li class="nav-item">
                <a
                  class={`nav-link active   ${
                    activedpage == "home" ? "active-nav" : ""
                  }`}
                  aria-current="page"
                  href="/"
                  onClick={() => activeNav("home")}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link active ${
                    activedpage == "about" ? "active-nav" : ""
                  }`}
                  href="/about"
                  onClick={() => activeNav("about")}
                >
                  Services
                </a>
              </li>

              <li class="nav-item ">
                <a class="nav-link active" href="/help">help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active">Register</a>
              </li>
            </ul>
            <div className="d-flex gap-2 align-items-center">
              <a class="nav-link active" href="/userlogin">
                login
              </a>
              <button className="nav-contact"> Contact us</button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
