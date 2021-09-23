import React, { useEffect } from 'react';

const TaskSnippet = (taskData, order) => {
  useEffect(() => {
    console.log('WHAAAA', taskData);
  }, []);
  return (
    <div className="task">
      <div className="task-image">
        <p>order {order}</p>
        <img alt="mark and reward" src={taskData.icon} />
      </div>
      {taskData.order}
      <div className="task-text">{taskData.name}</div>
    </div>
  );
};

export default TaskSnippet;
