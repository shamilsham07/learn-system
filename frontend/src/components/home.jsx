import React, { useEffect, useState } from "react";
import Nav from "./nav";
import "./login.css";
import ScrollReveal from "scrollreveal";

export default function Home() {
  const [active, setActive] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const [cradActive, setcard] = useState(null);

  function calltheadd() {
    document.getElementsByClassName("lamp")[0].classList.add("add");
  }
  function calltheout() {
    document.getElementsByClassName("add")[0].classList.remove("add");
  }
  const hidehover = (card) => {
    console.log(card);
    setcard(card);
  };
  const hoverremover = () => {
    setcard(null);
  };

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSlideOut(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setActive(false);
    }, 2500);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {active ? (
        <div
          className={`home-first d-flex justify-content-center align-items-center text-center ${
            slideOut ? "opac" : ""
          }`}
        >
          <h1>
            Welcome to <br />
            learn world
          </h1>
        </div>
      ) : (
        <div>
          <Nav active={"home"} />
          <div className="home">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-6 home-firstpage-section">
                  <h1 className="position-relative">
                    {" "}
                    Fuel your Skill <br />
                    grow with <span className="text-theme ">learn </span>{" "}
                    <img src="/star.png" className="star-png" alt="" />
                  </h1>

                  <p className="text-theme">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, eaque blanditiis? Harum voluptate magni,
                  </p>
                  <div className="pt-5 home-main-btn d-flex gap-5">
                    <button className="btn-1 d-flex gap-2 align-items-center">
                      <span>register</span>
                      <i class="bi bi-arrow-up-right-circle"></i>
                    </button>
                    <button className="btn-2 active-btn-animation">
                      <span>learn-more </span>
                    </button>
                  </div>
                </div>
                <div className="col-6 text-center d-flex justify-content-center ">
                  <div className="rounded-circle home-cicle">
                    <img
                      src="/portrait-young-student-with-book-education-day-removebg-preview.png"
                      alt=""
                      className="img-fluid"
                    />
                    <video
                      src="/success.mp4"
                      className="star-vid"
                      autoPlay
                      loop
                      muted
                    ></video>
                    <video
                      src="/unity.mp4"
                      className="unit-vid"
                      autoPlay
                      loop
                      muted
                    ></video>
                    <video
                      src="/closed-book.mp4"
                      className="book-vid"
                      autoPlay
                      loop
                      muted
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-theme w-100 home-second-page">
            <div className="container h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-3">
                  <div
                    className="cards p-3 d-flex  gap-3 position-relative"
                    data-target="#card-1"
                    onMouseEnter={() => hidehover("card-1")}
                    onMouseLeave={() => hoverremover()}
                  >
                    <div
                      className={`d-flex gap-3 active-card ${
                        cradActive === "card-1" ? "fadeout" : "fadein"
                      }`}
                    >
                      <h3>1+</h3>
                      <h6>
                        {" "}
                        years of <br />
                        experience
                      </h6>
                    </div>

                    <div
                      className={`${
                        cradActive === "card-1" ? "fadein" : "fadeout"
                      } hover-card `}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="cards p-3 d-flex  gap-3 position-relative"
                    data-target="#card-2"
                    onMouseEnter={() => hidehover("card-2")}
                    onMouseLeave={() => hoverremover()}
                  >
                    <div
                      className={`d-flex gap-3 active-card ${
                        cradActive === "card-2" ? "fadeout" : "fadein"
                      }`}
                    >
                      <h3>500+</h3>
                      <h6>
                        {" "}
                        students <br />
                        system
                      </h6>
                    </div>

                    <div
                      className={`${
                        cradActive === "card-2" ? "fadein" : "fadeout"
                      } hover-card `}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="cards p-3 d-flex  gap-3 position-relative"
                    data-target="#card-3"
                    onMouseEnter={() => hidehover("card-3")}
                    onMouseLeave={() => hoverremover()}
                  >
                    <div
                      className={`d-flex gap-3 active-card ${
                        cradActive === "card-3" ? "fadeout" : "fadein"
                      }`}
                    >
                      <h3>24/7</h3>
                      <h6>
                        {" "}
                        hours <br />
                        support
                      </h6>
                    </div>

                    <div
                      className={`${
                        cradActive === "card-3" ? "fadein" : "fadeout"
                      } hover-card `}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div
                    className="cards p-3 d-flex  gap-3 position-relative"
                    data-target="#card-4"
                    onMouseEnter={() => hidehover("card-4")}
                    onMouseLeave={() => hoverremover()}
                  >
                    <div
                      className={`d-flex gap-3 active-card ${
                        cradActive === "card-4" ? "fadeout" : "fadein"
                      }`}
                    >
                      <h3>100+</h3>
                      <h6>
                        {" "}
                        successfull <br />
                        projects
                      </h6>
                    </div>

                    <div
                      className={`${
                        cradActive === "card-4" ? "fadein" : "fadeout"
                      } hover-card `}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="third-background">
              <div className="container h-100">
                <div className=" w-100 h-100 padding-block">
                  <div className="row w-100 h-100 justify-content-center align-items-center ">
                    <div className="col-lg-6 col-sm-12 ">
                      <div className="image-content">
                        <img
                          src="/positive-teenagers-discussing-notes-together.jpg"
                          alt="not-loaded"
                          className="img-fluid rounded-circle image-home"
                          onMouseOver={calltheadd}
                          onMouseOut={calltheout}
                        />
                        <i class="bi bi-lamp lamp"></i>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <h6 className="text-warning">__About us</h6>
                      <h5 className="home-3-heading">Students platform</h5>
                      <p className="home-3-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut enim blanditiis veritatis atque cupiditate sequi
                        odio voluptatibus vel, dolores vitae dolorem autem,
                        necessitatibus numquam placeat officia labore nulla
                        reprehenderit dolore.
                      </p>
                      <button className="learn-more-btn ">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="fourth-home">
            <div className="padding-block">
              <div className="container">
                <div className="row">
                  <h1 className="four-page-heading text-show">
                    building our,
                    <br />
                    <span className="">expertise for you</span>
                  </h1>
                </div>
                <div className="row  align-items-center">
                  <div className="col-4">
                    <div className="fixed-card-one">
                      <div className="container">
                        <h6 className="text-show">students</h6>
                        <p className="text-show">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Magni necessitatibus voluptates nihil fugiat et
                          error rem inventore quae corporis eos quia, officiis
                          atque labore voluptatum obcaecati qui dicta velit
                          vitae.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="fixed-card-second">
                      <div className="container">
                        <h6 className="text-show">students</h6>
                        <p className="text-show">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Magni necessitatibus voluptates nihil fugiat et
                          error rem inventore quae corporis eos quia, officiis
                          atque labore voluptatum obcaecati qui dicta velit
                          vitae.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="fixed-card-one">
                      <div className="container">
                        <h6 className="text-show">students</h6>
                        <p className="text-show">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Magni necessitatibus voluptates nihil fugiat et
                          error rem inventore quae corporis eos quia, officiis
                          atque labore voluptatum obcaecati qui dicta velit
                          vitae.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
