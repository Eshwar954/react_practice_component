import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const TaskComponent = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem",border:"1px solid black" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p className="card-text"></p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};

export default TaskComponent;
