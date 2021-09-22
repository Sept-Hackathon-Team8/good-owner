import React from "react";
import UserHeader from "../../components/headers/UserHeader";
import NextButton from "../../components/next-button/NextButton";
import { Link } from "react-router-dom";
const Task = (props) => {
    
    return (
        <div className="task-page">
            <UserHeader/>  
            <h1>Task 1</h1>
            <img alt="image" src=""/>
            <p> Instructions</p>
            <Link to="/feedback"> 
                <NextButton/>
            </Link>
        </div>
        
    );
  };
  
  export default Task;