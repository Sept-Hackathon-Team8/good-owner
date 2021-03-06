import React from 'react';
import ProgressCircle from '../../../src/components/progress-circle/ProgressCircle';

const TaskSnippet = ({ task, feedback }) => {
  return (
    <>
      {task && feedback && (
        <div className="task">
          {/* TODO: use feedback to create progress circle UI element here */}
          <div className="task-image">
            <img style={{ width: '52px' }} alt={task.title} src={task.icon} />
            <ProgressCircle
              succesfulTasks={feedback.great < 8 ? feedback.great : 7}
            />
          </div>
          <h3 className="task-text">{task.title}&nbsp;</h3>
          {/* 
          Uncomment this to show state of feedback
          <p
            style={{ fontSize: '.8rem', color: '#666' }}
          >{`gr ${feedback.great} | rf: ${feedback.ruff}`}</p>
          */}
        </div>
      )}
    </>
  );
};
export default TaskSnippet;
