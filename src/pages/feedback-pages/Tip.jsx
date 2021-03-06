import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import NextButton from '../../components/next-buttons/MainNextButton';
import './FeedbackPages.css';

const Tip = props => {
  const { activeUnit, tipData, setTipData } = useContext(DoggoContext);

  function resetTipData() {
    // reset tip data
    setTipData(null);
  }

  return (
    <div className="advice-page">
      <div className="advice-intro">No worries - here<br />are some extra tips<br />to help you and your<br />best friend next time. </div>
      {tipData ? (
        <>
          <div className="tips-background">
            <div className="tip-title">{tipData.title}</div>
            <div className="tips-container">
              <ul className="tip-bullets">
                {tipData.text
                  .split('\n')
                  .map((tip, i) => <li key={i}> {tip} </li>)
                }
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>
          <b>Error: </b>No tip data available
        </p>
      )}
      {activeUnit.task === 1 ? (
        <Link to="/home">
          <NextButton onClick={resetTipData} />
        </Link>
      ) : (
        <Link to="/task">
          <NextButton onClick={resetTipData} />
        </Link>
      )}
    </div>
  );
};

export default Tip;
