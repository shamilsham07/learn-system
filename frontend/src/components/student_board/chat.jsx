import React, { useEffect } from "react";
import StudentSidebar from "./student_sidebar";
import "./student-bar.css";
import axios from "axios";
import { useState, useRef } from "react";

export default function Chat() {
  const [store, setstore] = useState("");
  const [data, setdata] = useState([]);
  const chatRef = useRef(null);

  function Sendthedata() {
    axios
      .post(
        "http://localhost:8000/startchat",
        { chat: store, email: localStorage.getItem("email") },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("....", res.data.good);
        setdata(res.data.good);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [data]);

  useEffect(() => {
    console.log("/////////////////", data);
  }, [data]);
  return (
    <>
      <div className="dashboard-layout">
        <StudentSidebar active={"chat"} />
        <main className="dashboard-content w-100 d-flex justify-content-center align-items-center">
          <div className="chat-section p-3 position-relative">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 d-flex justify-content-center align-item-center">
                <div className="rounded-teacher-logo">
                  <img src="/teacher.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center teacher-heading">
                <h6>John Doe</h6>
              </div>
            </div>
            <div
              className="row chating-area-menu p-3 align-items-end w-100 "
              ref={chatRef}
            >
              <div className="chat-inner">
                {data.length >= 1 &&
                  data.map((item, index) => {
                    const displaythedate =
                      index === 0 || item.date !== data[index - 1].date;
                    const reciveddate = new Date(item.date);
                    const currentdate = new Date();
                    let showdate;
                    if (
                      reciveddate.toDateString() === currentdate.toDateString()
                    ) {
                    showdate="today"
                    }

                    return (
                      <div
                        className="col-12 d-flex  gap-2 flex-column"
                        key={index}
                      >{
                        displaythedate&&
                         <div className="date-today d-flex justify-content-center w-100">
                          <p className="m-0">{showdate}</p>
                        </div>
                      }
                       
                        <div className="text-chat d-flex justify-content-end w-100">
                          <p className="p-2 ">{item.text}</p>
                        </div>
                        <div className="text-chats d-flex justify-content-start w-100">
                          <p className="p-2">{item.replay}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="chat-text-area d-flex justify-content-center align-items-center gap-1">
              <input
                type="text"
                className="chating"
                onChange={(e) => setstore(e.target.value)}
              />
              <div className="send-message d-flex justify-content-center align-items-center">
                <i class="bi bi-send text-white" onClick={Sendthedata}></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
