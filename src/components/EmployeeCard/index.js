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

function EmailLink(props) {
    return (
      <a href={"mailto:" + props.email}>{props.email}</a>
    )
}

function GitHubLink({github}) {
  console.log(github)
  return (
    <a href={"http://github.com/" + github}>{github}</a>
  )
}

const GetEmail = ({email}) => {

  const emailComponent = <EmailLink email = {email}/>

  let list = [
    <>Contact me at {emailComponent}`</>,
    <>My email address is {emailComponent}</>,
    <>Reach me at {emailComponent}</>,
    <>You can get in touch with me at {emailComponent}</>,
    <>Get a hold of me at {emailComponent}</>
  ]

  return list[Math.floor(Math.random() * list.length)]
  }

const GetUserName = ({github}) =>{
  const userNameComp = <GitHubLink github = {github}/>

  let list = [
    <>This is my github, {userNameComp}.</>,
    <>My github is {userNameComp}.</>,
    <>Look at my github, its {userNameComp}.</>,
    <>See all my cool repos on github, I'm {userNameComp}.</>
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
            <GetUserName github = {props.github}/>
          </li>
          <li>
            {/* { getEmail() } */}
            <GetEmail email={props.email}/>
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
