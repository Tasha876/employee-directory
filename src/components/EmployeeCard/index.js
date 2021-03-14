import React from "react";
import { memo } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeCardMemo = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail rounded-circle" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            {props.name}
          </li>
          <li>
           {props.location}
          </li>
          <li>
            {props.github}
          </li>
          <li>
            {props.email}
          </li>
        </ul>
      </div>
      <span className="remove" onClick={props.end}>&#x21bb;</span>
    </div>
  );
}

// so only the chose employee regenerated on "regenEmp"
export const EmployeeCard = memo(EmployeeCardMemo,(prevProps, nextProps) => {
  console.log(prevProps, nextProps)
  return prevProps.toDel === false
})

export default EmployeeCard;
