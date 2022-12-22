import React from 'react'
import  { useState } from "react";

  //let string = '111110';
  //console.log(
    //getNumber(string)
  //)
export default function PeterNumber() {
    function isSorted(n){
        return   Array.from(String(n), Number).reduce((n, item) => n !== false && item >= n && item)
      
      }
      
      function getNumber(n) {
        while(!isSorted(n)){
          n--;
        }
        setOutput(n);
        return n;
      }
      
    let [inp,setInput]=useState("");
    let [out,setOutput]=useState("");
  return (
     <div style={{marginTop:"60px"}}>
       <form onSubmit={(e)=>{e.preventDefault();getNumber(inp)}}>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Input</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Input" onChange={(e)=>{setInput(e.target.value)} }/>
    </div>
    
    <div class="col-auto">
    <label class="sr-only" for="inlineFormInput">Output</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" value={out}/>
    </div>
    
      
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2" >Submit</button>
    </div>
  </div>
</form>
    </div>
  )
}
