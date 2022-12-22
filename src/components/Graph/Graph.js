import React from 'react'
import Button from '../Button/Button';
import ButtonBox from '../Button/ButtonBox';
import Screen from '../Screen/Screen';
import Wrapper from '../Wrapper/Wrapper';
import { Line } from "react-chartjs-2";
import  { useState } from "react";
import { Chart, ChartConfiguration, LineController, CategoryScale,LineElement, PointElement, LinearScale, Title} from 'chart.js' 

Chart.register(CategoryScale,LinearScale,PointElement,LineElement);
 

export default function Graph() {
  let [x,setX]=useState([]);
  let [y,setY]=useState([]);
  let [ch,setCh]=useState("");
  
  const options = {
    
    responsive: true,
    
  type: 'line',
    plugins: {
       
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
 const data = {
      labels: x,
      datasets: [{
      label: 'My Graph',
      data: y,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      stacked: false,
    }]
  };
  const btnValues = [
    ["C", "(", ")", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".","X","="],
  ];
 
  return (
    <>
    <Wrapper>
     <Screen value={ch?ch:0} />
    <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                //className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  if(btn==="C"){
                    setCh("")
                    
                  }
                  else if(btn==="="){
                     setX([0,1,2,3,4,5,6,7,8,9,10]);
                     setY(x.map(i=>Function(`'use strict'; return (${ch.replaceAll("X",i.toString())})`)()))
                     console.log(y)
                     
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
  <Line data={data} options={options} />
  </>

  )
}
