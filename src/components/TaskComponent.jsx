import React from "react";

const TaskComponent = () => {
  const tasks = [
    "Session",
    "Break",
    "Documentation",
    "Session",
    "Break",
    "Documentation",
  ];
  return (
    <>
    <h1>Today's Tasks</h1>
      {tasks.length==0?(
      <h1>No Tasks</h1>
      ):(
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
      )}
    </>
  );
};

export default TaskComponent;
