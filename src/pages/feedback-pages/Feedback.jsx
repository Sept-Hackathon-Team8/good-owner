import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../components/headers/HomeHeader";

const Feedback = () => {
  return (
      <div className="feedback-page">
            <HomeHeader />
            <h1>How did Doggo do?</h1>
            <Link to="/advice">
                <button className="ruffff">Ruffff</button>
            </Link>
            <Link to="/treat">
                <button className="great">Great</button>
            </Link>
        </div>
    
  );
};

export default Feedback;