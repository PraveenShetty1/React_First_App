import React, { useState } from 'react'


export default function Test() {
    const[data,setdata]=useState("");
    function TestFunction(){
        console.log("Test Function Called")
        setdata("Yes i Am Button")
    }
  return (
    <div>
        <center>
            <button onClick={TestFunction}>Click me</button>
            <h1>{data}</h1>
        </center>
    </div>
  )
}
