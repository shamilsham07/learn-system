import React, { useEffect } from "react";
import Nav from "./nav";

export default function About() {







  return (
    <section>
      <Nav active={"about"} />
      <div className="d-block">
        <div className="container">
          <div className="pt-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-12">
                <div className="text-center about-main-section">
                  <h6>
                    Grow your skills <br />
                    to premium with <span>Learn</span>
                  </h6>
                  <p>" if our surroundings grow we grow "</p>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <div className="d-flex p-5 w-100">
                  <div>
                    <img
                      src="Website Development.png"
                      className="website-png"
                      alt=""
                    />
                  </div>
                  <div className="w-100 pl-1 ">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button heading-of-accortion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Skills Develop
                      </button>
                    </h2>
                  </div>
                </div>

                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div className="d-flex p-5 w-100">
                  <div>
                    <img
                      src="UI & UX Design.png"
                      className="website-png"
                      alt=""
                    />
                  </div>
                  <div className="w-100 pl-1 ">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed heading-of-accortion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        laerning Platform
                      </button>
                    </h2>
                  </div>
                </div>

                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div className="d-flex p-5 w-100">
                  <div>
                    <img
                      src="ERP Development.png"
                      className="website-png"
                      alt=""
                    />
                  </div>
                  <div className="w-100 pl-1 ">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed heading-of-accortion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        IT Platform
                      </button>
                    </h2>
                  </div>
                </div>

                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div className="d-flex p-5 w-100">
                  <div>
                    <img
                      src="IT Consulting Services.png"
                      className="website-png"
                      alt=""
                    />
                  </div>
                  <div className="w-100 pl-1 ">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed heading-of-accortion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        LOw Cost
                      </button>
                    </h2>
                  </div>
                </div>

                <div
                  id="collapsefour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div className="d-flex p-5 w-100">
                  <div>
                    <img
                      src="Artificial Intelligence Development.png"
                      className="website-png"
                      alt=""
                    />
                  </div>
                  <div className="w-100 pl-1 ">
                    <h2 class="accordion-header" id="headingfive">
                      <button
                        class="accordion-button collapsed heading-of-accortion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        Security
                      </button>
                    </h2>
                  </div>
                </div>

                <div
                  id="collapsefive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
