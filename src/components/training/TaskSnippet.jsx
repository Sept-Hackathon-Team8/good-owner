import React, { useEffect } from 'react';

const TaskSnippet = (taskData, order, imgData) => {
  useEffect(() => {
    console.log('WHAT THA', imgData.length ? imgData : '');
  }, []);

  return (
    <div className="task">
      <div className="task-image">
        <p>order {order}</p>
        {/* <img alt="mark and reward" src={image_arr[order]} /> */}
      </div>
      {taskData.order}
      <div className="task-text">{taskData.name}</div>
    </div>
  );
};

export default TaskSnippet;
