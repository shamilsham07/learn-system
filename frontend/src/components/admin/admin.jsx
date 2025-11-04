import "./admin.css";
import { useState, useEffect, useRef } from "react";
import Sidebar from "./sidebar";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Admin() {
  const [calenderShow, setcalender] = useState(false);
  const ref = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );
  function calenderShowing() {
    calenderShow ? setcalender(false) : setcalender(true);
  }
  function currentDate(e) {
    setCurrentMonth(e.toLocaleString("default", { month: "long" }));
    setcalender(false);
  }
  const options = {};
  const dataofchart = {
    labels: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    datasets: [
      {
        label: "profit",
        data: [3000, 2000, 10000, 5000, 7000],
        borderColor: "green",
      },
      {
        label: "Expense",
        data: [1000, 3000, 3000, 3000, 3000],
        borderColor: "red",
      },
    ],
  };

  useEffect(() => {
    function handleClickOutside(event) {
      console.log("hello", event);
      console.log("__________", ref.current);
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        setcalender(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-2">
          <Sidebar Name={"Dashboard"} />
        </div>
        <div className="col-10">
          <div className="p-3">
            <div className="row justify-content-center align-items-center">
              <div className="col-6">
                <div className="label-admin-search w-50">
                  <i class="bi bi-search "></i>
                  <input
                    type="text"
                    placeholder=" enter"
                    className="admin-search"
                  />
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end gap-3">
                <div className="rounded-circle bellicon-in d-flex justify-content-center align-items-center position-relative ">
                  <i class="bi bi-bell"></i>
                  <p className="position-absolute notification">6</p>
                </div>
                <div className="rounded-circle bellicon-in d-flex justify-content-center align-items-center position-relative ">
                  <i class="bi bi-envelope"></i>
                </div>
                <div className="rounded-circle bellicon-in bg-primary">
                  <img
                    src="./man-wearing-waistcoat.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className=" p-3 dashboard">
                <div className="row ">
                  <div className="col-6 dashborad-heading d-flex gap-2">
                    <div className="home-icon">
                      <i class="bi bi-house-door-fill"></i>
                    </div>
                    <div>
                      <h5 className="dashborad-heading">My dashborad</h5>
                      <p>your activities can see here</p>
                    </div>
                  </div>
                  <div className="col-6 position-relative d-flex justify-content-end align-items-center gap-2">
                    <div
                      className="calender-box d-flex justify-content-center align-items-center gap-2"
                      onClick={calenderShowing}
                    >
                      <i class="bi bi-calendar"></i>
                      <h6>{currentMonth}</h6>
                      {calenderShow ? (
                        <i class="bi bi-caret-up-fill"></i>
                      ) : (
                        <i class="bi bi-caret-down-fill"></i>
                      )}
                    </div>
                    <div>
                      <button className="download-pdf">
                        <i class="bi bi-cloud-download-fill"></i>
                        <span>Download pdf</span>
                      </button>
                    </div>

                    <div
                      className={`${
                        calenderShow ? "d-flex" : "d-none"
                      } position-absolute calender-dropdown pt-1 `}
                      ref={ref}
                    >
                      <Calendar onChange={(e) => currentDate(e)} />
                    </div>
                  </div>
                </div>
                <div className="row m-0 p-0">
                  <div className="col-3">
                    <div className="dashboard-card1">
                      <div>
                        <p className="m-0">Students</p>
                        <h5>1000</h5>
                      </div>
                      <div>
                        <i class="bi bi-mortarboard"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="dashboard-card2">
                      <div>
                        <p className="m-0">Teachers</p>
                        <h5>500</h5>
                      </div>
                      <div>
                        <i class="bi bi-person-workspace"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="dashboard-card3">
                      <div>
                        <p className="m-0">Parents</p>
                        <h5>700</h5>
                      </div>
                      <div>
                        <i class="bi bi-people-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="dashboard-card4">
                      <div>
                        <p className="m-0">Earnings</p>
                        <h5>3.9k</h5>
                      </div>
                      <div>
                        <i class="bi bi-cash-stack"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-8">
                    <div className="bg-white chart-div">
                      <Line options={options} data={dataofchart} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="notification">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">Notification</h6>
                        <button className="View-all">View all</button>
                      </div>
                      <div className="p-3">
                        <div className="notification-background p-3 ">
                          <div className="row align-items-center mb-2">
                            <div className="col-2">
                              <div className="rounded-circle notification-img">
                                <img
                                  src="/handsome-young-man-with-arms-crossed-white-background.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-7">
                              <div className="notification-head">
                                <h6 className="m-0">Mark Tyson</h6>
                                <p className="m-0">
                                  Status : <span>Student</span>
                                </p>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-end gap-1">
                                <div className="notification-icons rounded-circle">
                                  <i class="bi bi-envelope"></i>
                                </div>
                                <div className="notification-icons rounded-circle">
                                  <i class="bi bi-telephone"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center mb-2">
                            <div className="col-2">
                              <div className="rounded-circle notification-img">
                                <img
                                  src="/handsome-young-man-with-arms-crossed-white-background.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-7">
                              <div className="notification-head">
                                <h6 className="m-0">Mark Tyson</h6>
                                <p className="m-0">
                                  Status : <span>Student</span>
                                </p>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-end gap-1">
                                <div className="notification-icons rounded-circle">
                                  <i class="bi bi-envelope"></i>
                                </div>
                                <div className="notification-icons rounded-circle">
                                  <i class="bi bi-telephone"></i>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="row align-items-center mb-2">
                            <div className="col-2">
                              <div className="rounded-circle notification-img">
                                <img
                                  src="/handsome-young-man-with-arms-crossed-white-background.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-7">
                              <div className="notification-head">
                                <h6 className="m-0">Mark Tyson</h6>
                                <p className="m-0">
                                  Status : <span>Student</span>
                                </p>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="d-flex justify-content-end gap-1">
                                <div className="notification-icons rounded-circle">
                                  <i class="bi bi-envelope"></i>
                                </div>
                                <div className="notification-icons rounded-circle">
                                  <i class="bi bi-telephone"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="bg-white p-3 activity-center">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 align-items-center">
                            <i class="bi bi-activity actvity-icon"></i>
                            <h6 className="m-0">Activity</h6>
                          </div>
                          <div><h6 className="m-0 see-all-activity">
                            see all</h6></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* .........................Table................... */}
              <div className="p-3">
                <div className="row">
                  <div className="col-8">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Name</th>
                          <th scope="col">gender</th>
                          <th scope="col">Mark</th>
                          <th scope="col">performance</th>
                          <th scope="col">status</th>
                          <th scope="col">Activity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>Otto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
