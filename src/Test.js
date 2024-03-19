import React, { useState } from 'react'


export default function Test() {
    const[data,setdata]=useState("");
    const[data1,add]=useState("");
    function TestFunction(){
        console.log("Test Function Called")
        setdata("Yes i Am Button")
        add("fuck u")

    }
  return (
    <div>
        <center>
            <button onClick={TestFunction}>Click me</button>
            <h1>{data}</h1>
            <h2>{data1}</h2>
        </center>
    </div>
  )
}
