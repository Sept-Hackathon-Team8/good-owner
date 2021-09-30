import React from 'react';

const TaskSnippet = ({ task, feedback }) => {
  return (
    <>
      {task && feedback && (
        <div className="task">
          {/* TODO: use feedback to create progress circle UI element here */}
          <div className="task-image">
            <img alt={task.title} src={task.icon} />
          </div>
          <h3 className="task-text">{task.title}&nbsp;</h3>
          <p
            style={{ fontSize: '.8rem', color: '#666' }}
          >{`gr ${feedback.great} | rf: ${feedback.ruff}`}</p>
        </div>
      )}
    </>
  );
};
export default TaskSnippet;
