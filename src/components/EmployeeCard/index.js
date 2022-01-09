import React from "react";
import { memo } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const getGreeting = (name) => {
  let list = [
    `Hi, I'm ${name}. Goodday!`,
    `Hey, my name is ${name}.`,
    `How are you? I'm ${name}.`,
    `I'm ${name}. Pleased to meet you!`
  ]

  return list[Math.floor(Math.random() * list.length)]
}


const getCity = (location) => {
  let list = [
    `I'm from ${location.city}, ${location.country}.`,
    `I'm located in ${location.city}, ${location.country}.`,
    `I'm from ${location.country}, more specifically ${location.city}.`,
    `I live in ${location.city}, ${location.country}.`
  ]

  return list[Math.floor(Math.random() * list.length)]
}

function HyperLink(props) {
    return (
    <a href={"mailto:" + props.email}>{props.email}</a>
    )
}

const getEmail = () => {
  let list = [
    `Contact me at `,
    `My email address is `,
    `Reach me at `,
    `You can get in touch with me at `,
    `Get a hold of me at `
  ]

  return list[Math.floor(Math.random() * list.length)]
  }

const getUserName = (username) =>{
  let list = [
    'This is my github, ' + username + '.',
    'My github is ' + username + '.',
    'Look at my github, its ' + username + '.',
    'See all my cool repos on github, I\'m ' + username + '.'
  ]

  return list[Math.floor(Math.random() * list.length)]
  
  }

const EmployeeCardMemo = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail rounded-circle" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            { getGreeting(props.name) }
          </li>
          <li>
           { getCity(props.location)}
          </li>
          <li>
            { getUserName(props.github) }
          </li>
          <li>
            { getEmail() }
            <HyperLink email={props.email}> </HyperLink>
          </li>
        </ul>
      </div>
      <span className="remove" onClick={props.end}>&#x21bb;</span>
    </div>
  );
}

// so only the chosen employee regenerated on "regenEmp"
export const EmployeeCard = memo(EmployeeCardMemo,(prevProps, nextProps) => {
  return prevProps.toDel === false
})

export default EmployeeCard;
