import React from 'react'
import Button from '../Button/Button';
import ButtonBox from '../Button/ButtonBox';
import Screen from '../Screen/Screen';
import Wrapper from '../Wrapper/Wrapper';
import  { useState } from "react";
 
export default function Calcul() {

  let [ch,setCh]=useState("");
  const btnValues = [
    ["C", "(", ")", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
 
  return (
    <Wrapper>
     <Screen value={ch?ch:0} />
    <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  if(btn==="C"){
                    setCh("")
                    
                  }
                  else if(btn==="="){
                    try{
                      setCh(Function(`'use strict'; return (${ch})`)()
                      )
                      
                    }
                    catch(e){
                      setCh("error");
                    }
                  }
                  else if(btn==="X"){
                    setCh(ch+"*");
                  }
                  else{
                    setCh(ch+btn);
                  }
                  
                  console.log(ch)
                }}
              />
            );
          })
        }
      </ButtonBox>
  </Wrapper>
  )
}
