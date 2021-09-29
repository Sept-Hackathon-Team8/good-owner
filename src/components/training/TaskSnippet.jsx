// import React, { useEffect } from 'react';

const TaskSnippet = ({ task, feedback }) => {
  // useEffect(() => {
  //   console.log(feedback);
  // }, [feedback]);

  return (
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
  );
};

// icon: "https://svgur.com/i/aUd.svg"
// image: "https://svgur.com/i/aUW.svg"
// instructions: (3) ['Sit near your dog. Wait for him to look toward you, while holding a treat behind your back.', 'When he makes eye contact or looks toward your face, mark and reward.', 'Repeat the activity from a standing position.']
// order: 1
// tips:
// title: "Mark and Reward"
// unit: "1"
export default TaskSnippet;
