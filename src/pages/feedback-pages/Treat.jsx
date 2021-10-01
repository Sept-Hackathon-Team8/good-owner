import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import NextButton from '../../components/next-buttons/MainNextButton';

const Treat = props => {
  const { activeUnit } = useContext(DoggoContext);

  return (
    <div className="treat-page">
      <h2>What a good doggo! Here's a treat!</h2>
      <img alt="" src="" />
      {activeUnit.task === 1 ? (
        <Link to="/home">
          <NextButton />
        </Link>
      ) : (
        <Link to="/task">
          <NextButton />
        </Link>
      )}
    </div>
  );
};

export default Treat;
