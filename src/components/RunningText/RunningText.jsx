import React from "react";
import "../RunningText/RunningText.scss";

function RunningText({ text, repeatCount }) {
  const repeatedText = Array(repeatCount).fill(text);

  return (
    <div className='running-text-container'>
      <div className='running-text-content'>
        {repeatedText.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default RunningText;
