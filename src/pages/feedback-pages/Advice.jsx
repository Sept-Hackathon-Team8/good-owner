import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import HomeHeader from '../../components/headers/HomeHeader';
import NextButton from '../../components/next-buttons/MainNextButton';

const Advice = props => {
  const { activeUnit } = useContext(DoggoContext);
  return (
    <div className="advice-page">
      <HomeHeader />
      <h3>
        No worries, here are some extra tips to help you and your best friend:
      </h3>
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

export default Advice;
