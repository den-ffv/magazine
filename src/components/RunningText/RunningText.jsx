import React, { useEffect, useRef } from "react";
import "../RunningText/RunningText.scss";

function RunningText({text, repeatCount}) {

 

  
  const repeatedText = Array(repeatCount).fill(text)


  console.log(repeatedText)

  return (
    <div className='running-text-container'>
      <div className='running-text-content'>
        {repeatedText.map((item, index) => <p key={index}>{item}</p>)}



        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p> */}
      </div>
    </div>
  );
}

export default RunningText;
