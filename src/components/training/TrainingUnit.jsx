import React, { useCallback } from 'react';
import TaskSnippet from './TaskSnippet';
import { Link } from 'react-router-dom';

const TrainingUnit = ({
  unitData,
  unitTitle,
  unitNum,
  unitFeedback,
  setActiveUnit,
  currentProgress,
}) => {
  const setUnit = useCallback(() => {
    if (currentProgress.unit >= unitNum)
      setActiveUnit(currentData => ({ ...currentData, unit: unitNum }));
    // TODO: create else to redirect client to tell them this unit is not available this case shouldn't happen but then again
  }, [unitNum, setActiveUnit, currentProgress]);

  return (
    <div style={{ position: 'relative' }}>
      {currentProgress.unit >= unitNum ? (
        ''
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundImage:
            //   'linear-gradient(180deg, rgba(0,0,0,0) 2% , gray 18%)',
            backgroundColor: 'white',
            position: 'absolute',
            mixBlendMode: 'hue',
            zIndex: 100,
          }}
        ></div>
      )}
      <div style={{}}>
        <div className="unit">
          <h1>{unitTitle ? unitTitle : ''}</h1>
        </div>
        {/* apply class task-reverse to every other Unit */}
        <div className="tasks">
          {unitData && unitFeedback && unitData.length && unitFeedback.length
            ? unitData.map((t, i) => (
                <TaskSnippet key={i} task={t} feedback={unitFeedback[i]} />
              ))
            : 'There is no Unitdata'}

          <Link to="/task">
            <button onClick={setUnit} className="start-lesson">
              Start Lesson
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingUnit;
