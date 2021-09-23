import React from 'react';
import "./OnboardNextButton.css";

const OnboardNextButton = props => {
  const { count, setCount } = props;

  const handleClick = e => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <button type="submit" onClick={handleClick} className="next">
      Next
    </button>
  );
};

export default OnboardNextButton;
