import React from "react";
import App from "../../App"

const SortOptions = (props) => {

  // this has to be global b/c compare can only take two arguments
  let sortBy = ""

  const compare = (a,b) => {
    a = resolve(sortBy,a)
    b = resolve(sortBy,b)
    if (a < b) return -1
    else if (a > b) return 1
    return 0
  }

  // thanks to Stack Overflow!
  // resolves strings such as "a.b.c" to object properties
  // ex1. resolve("a.b.c.d",{a: {b: {c: {d : "hello"}}}}) => "hello"
  // ex2. resolve("a.b.c",{a: {b: {c: {d : "hello"}}}}) => "{d: hello}"
  const resolve = (props, obj) => {
    return props.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj)
  }

  const sortEmployees = () => {
    props.setStateApp("employees", props.employees.sort(compare))
  }

  const SortByList = [
        // value will be the value or sortBy
          {
              desc: "First name", value: "name.first", func: () => {
                sortEmployees()
              }
          },
          {
              desc: "Last name", value: "name.last", func: () => {
                sortEmployees()
              }
          },
          {
            desc: "City", value: "location.city", func: () => {
                sortEmployees()
              }
          },
        ]
    
  return (
    <>
    <p className="text-center">Sort By:</p>
    <div className="options">
      
    {SortByList.map(sort => (
            <label><input type="radio" name="gender" onClick={()=>{sortBy=sort.value; sort.func()}}></input> {sort.desc}</label>
        )
    )}
    </div>
    </>);
}

export default SortOptions;
