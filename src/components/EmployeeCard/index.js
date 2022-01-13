import React, { useState, useEffect, useMemo } from "react";
import { memo } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SkeletonElement from "../Skeletons/SkeletonElement";

function EmailLink({email}) {

  return (
    <a href={"mailto:" + email}>{email}</a>
  )
}

function GitHubLink(props) {

  const { github } = props
  
  return (
    <a href={"http://github.com/" + github}>{github}</a>
  )
}

const getGreeting = (props) => {

  const { name, id } = props

  let list = [
    `Hi, I'm ${name}. Goodday!`,
    `Hey, my name is ${name}.`,
    `How are you? I'm ${name}.`,
    `I'm ${name}. Pleased to meet you!`
  ]

  return list[(id + name.charCodeAt(0)) % list.length] 
  // this is so the greeting looks random but it isn't (shhh...), just so the greeating stays the same between renders
}

const GetEmail = (props) => {

  const emailComponent = <EmailLink email = {props.email}/>

  let list = [
    <>Contact me at {emailComponent}</>,
    <>My email address is {emailComponent}</>,
    <>Reach me at {emailComponent}</>,
    <>You can get in touch with me at {emailComponent}</>,
    <>Get a hold of me at {emailComponent}</>
  ]

  return list[(props.id + props.email.charCodeAt(0)) % list.length]
}

const GetUserName = (props) => {
  const userNameComp = <GitHubLink github = {props.github}/>

  let list = [
    <>This is my github, {userNameComp}.</>,
    <>My github is {userNameComp}.</>,
    <>Look at my github, its {userNameComp}.</>,
    <>See all my cool repos on github, I'm {userNameComp}.</>
  ]

  return list[(props.id + props.github.charCodeAt(0)) % list.length]
}

const getCity = (props) => {

  const { location, id } = props

  let list = [
    `I'm from ${location.city}, ${location.country}.`,
    `I'm located in ${location.city}, ${location.country}.`,
    `I'm from ${location.country}, more specifically ${location.city}.`,
    `I live in ${location.city}, ${location.country}.`
  ]

  return list[(id + location.city.charCodeAt(0)) % list.length]
}

const EmployeeCardMemo = (props) => {

  return (
    <div className="card border border-primary">
      <div className="img-container">
        {props.loaded ? <img className="img-thumbnail" alt={props.name} src={props.image} /> : <SkeletonElement type={'image'}/>}
      </div>
      <div className="content">
        <ul>
          <li>
            { props.loaded ? getGreeting(props) : <SkeletonElement type={'text'}/>}
          </li>
          <li>
           { props.loaded ? getCity(props) : <SkeletonElement type={'text'}/>}
          </li>
          <li>
            {props.loaded ? <GetUserName github = {props.github} id={props.id}/> : <> <SkeletonElement type={'text'}/>  <SkeletonElement type={'text half'}/> </>}
          </li>
          <li>
            {props.loaded ? <GetEmail email={props.email} id={props.id}/> : <> <SkeletonElement type={'text'}/>  <SkeletonElement type={'text half'}/> </>}
          </li>
        </ul>
      </div>
      <span className="remove" onClick={props.end}>&#x21bb;</span>
    </div>
  );
}

// so only the chosen employee regenerated on "regenEmp"
const EmployeeCard = memo(EmployeeCardMemo,(prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})

export default EmployeeCard;
