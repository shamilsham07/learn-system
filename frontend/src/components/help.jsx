import React from "react";
import { useState,useEffect } from "react";
export default function help() {
  const arr=["helping us", "helping me", "helping all"];
  const[index,setindex]=useState(0)


useEffect(()=>{

const interval=setInterval(()=>{
setindex((prev)=>(prev+1)%arr.length)
},2000)
return ()=>clearInterval(interval)
},[])


  return (
    <>
      <section className="help-first">
        <div className="revealing">
          <h6 key={index}>{arr[index]}</h6>
        </div>
      </section>
      <section className="help-second">
        <div>
          <h6  className="text-center text-welcome">Hello,its me</h6>
          <p className="text-center text-welcome">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            necessitatibus! Ipsum cupiditate earum dolores laborum cumque
            consequuntur voluptates sed incidunt, corrupti inventore quod culpa
            nisi atque assumenda. Debitis, iusto rerum.
          </p>
        </div>
      </section>
    </>
  );
}
