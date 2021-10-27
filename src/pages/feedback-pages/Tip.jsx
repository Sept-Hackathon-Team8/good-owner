import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import NextButton from '../../components/next-buttons/MainNextButton';

const Tip = props => {
  const { activeUnit, tipData, setTipData } = useContext(DoggoContext);

  function resetTipData() {
    // reset tip data
    setTipData(null);
  }

  return (
    <div className="advice-page">
      {tipData ? (
        <>
          <h3>{tipData.title}</h3>
          <div className="tips-container">
            <ul className="tip-bullets">
              {tipData.text
                .split('\n')
                .map((tip, i) => <li key={i}> {tip} </li>)
              }
            </ul>
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
