import React from "react";


const OnboardNextButton = (props) => {
  const { count, setCount } = props;

  const handleClick = (e) => {
    setCount(count + 1);
  };

  return (
    <button type="submit" onClick={ handleClick } className="next">Next</button>
  );
};

export default OnboardNextButton;