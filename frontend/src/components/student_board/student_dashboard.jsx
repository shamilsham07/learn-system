import React from "react";
import StudentSidebar from "./student_sidebar";
import "./student-bar.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StudentDashboard() {
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
        backgroundColor: "rgb(47,164,253)",
      },
      {
        label: "Expense",
        data: [1000, 3000, 3000, 3000, 3000],
        backgroundColor: "rgba(63, 59, 176, 1)",
      },
    ],
  };

  return (
    <div className="dashboard-layout">
      <StudentSidebar active={"dashboard"} />
      <main className="dashboard-content w-100">
        <div className="row">
          <div className="col-6">
            <div className="dashboard-heading ">
              <h5 className="m-0">
                Welcome back,<span>Shamil </span>
              </h5>
              <p className="m-0">its best time to manage your studies</p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center gap-2">
            <div className="bell-icon-student rounded-full">
              <i class="bi bi-bell"></i>
              <p className="text-wqarning">6</p>
            </div>
            <div className="d-flex justify-content-between align-items center carddash-student">
              <div className="bell-icon-students rounded-full">
                <img
                  src="/handsome-young-man-with-arms-crossed-white-background.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <div className="nameandmail">
                <h6 className="m-0">shamil</h6>
                <p className="m-0">shamilsham248@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="padding-top">
            <div className="row">
              <div className="col-3 card-inline ">
                <div className="card-of-student  p-2 bg-white">
                  <div className="d-flex justify-content-between align-items-center student-card-heading">
                    <h6 className="m-0">Total mark</h6>
                    <i class="bi bi-list-ul"></i>
                  </div>
                  <div className="pt-3 d-flex justify-content-start gap-3 align-items-center">
                    <div className="student-board-round">
                      <i class="bi bi-clipboard-check"></i>
                    </div>
                    <div className="mark-of-studdent">
                      <h5>547</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 card-inline ">
                <div className="card-of-student  p-2 bg-white">
                  <div className="d-flex justify-content-between align-items-center student-card-heading">
                    <h6 className="m-0">Number of projects</h6>
                    <i class="bi bi-list-ul"></i>
                  </div>
                  <div className="pt-3 d-flex justify-content-start gap-3 align-items-center">
                    <div className="student-board-round">
                      <i class="bi bi-folder"></i>
                    </div>
                    <div className="mark-of-studdent">
                      <h5>5</h5>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-3 card-inline ">
                <div className="card-of-student  p-2 bg-white">
                  <div className="d-flex justify-content-between align-items-center student-card-heading">
                    <h6 className="m-0">Total attendence</h6>
                    <i class="bi bi-list-ul"></i>
                  </div>
                  <div className="pt-3 d-flex justify-content-start gap-3 align-items-center">
                    <div className="student-board-round">
                      <i class="bi bi-calendar-check"></i>
                    </div>
                    <div className="mark-of-studdent">
                      <h5>12</h5>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-3   card-inline">
                <div className="card-of-student  p-2 bg-white">
                  <div className="d-flex justify-content-between align-items-center student-card-heading">
                    <h6 className="m-0">Overall performance</h6>
                    <i class="bi bi-list-ul"></i>
                  </div>
                  <div className="pt-3 d-flex justify-content-start gap-3 align-items-center">
                    <div className="student-board-round">
                      <i class="bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="mark-of-studdent">
                      <h5>30%</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding-top">
            <div className="row">
              <div className="col-6  pr-3" style={{ borderRadius: "10px" }}>
                <div
                  className="bg-white alignment-graph"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="row">
                    <div className="col-6 our-top-porf ">
                      <h6 className="m-0">
                        our top <span> performarce</span>
                      </h6>
                      <p className="m-o">based on attendence and mark</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end ">
                      <div className="student-board-round">
                        <i class="bi bi-table text-primary"></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mark</th>
                        <th scope="col">performance</th>
                        <th scope="col">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="col-6 alignment-graph  bg-white"
                style={{ borderRadius: "10px" }}
              >
                <div className="bg-white graph-student">
                  <div className="row">
                    <div className="col-6 ">
                      <div className="d-flex  justify-content-center gap-3 align-items-center">
                        <div className="student-board-round">
                          <img
                            src="./diagram.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="graph-and-analysis">
                          <h6 className="m-0">Graph and Analysis</h6>
                          <p className="m-0">
                            Project and attendence mark based
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6  d-flex justify-content-end">
                      <div className="download-btn-graph">
                        <i class="bi bi-cloud-download"></i>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <Bar options={options} data={dataofchart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
