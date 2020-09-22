import React, { useState } from "react";

function Slides({ slides }) {
  const [num, setNum] = useState(0);

  const nextSlide = () => {
    setNum(num + 1);
    console.log(slides.length, num);
  };

  const prevSlide = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(0);
  };

  const isDisabled = () => {
    return num === 0;
  };

  const isDisabledd = () => {
    return num === slides.length - 1;
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={reset}
          data-testid="button-restart"
          className="small outlined"
          disabled={isDisabled()}
        >
          Restart
        </button>
        <button
          onClick={prevSlide}
          data-testid="button-prev"
          className="small"
          disabled={isDisabled()}
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          data-testid="button-next"
          className="small"
          disabled={isDisabledd()}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[num].title}</h1>
        <p data-testid="text">{slides[num].text}</p>
      </div>
    </div>
  );
}

export default Slides;
