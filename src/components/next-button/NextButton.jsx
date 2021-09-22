import React from "react";
import { Link } from "react-router-dom";

const NextButton = () => {
    
    return (
        <Link to="/task">
        <button className="next">Next</button>
        </Link>
        
    );
  };
  
  export default NextButton;