import React from "react";

const SortOptions = (props) => {

  // otherwise would have to make sortBy global
  const sortByFunc = (sortBy) =>{
    return props.employees.sort((a,b)=>{
      a = resolve(sortBy,a)
      b = resolve(sortBy,b)
      if (a < b) return -1
      else if (a > b) return 1
      return 0
    })
  }

  // thanks to Stack Overflow!
  // resolves strings such as "a.b.c" to object properties
  // ex1. resolve("a.b.c.d",{a: {b: {c: {d : "hello"}}}}) => "hello"
  // ex2. resolve("a.b.c",{a: {b: {c: {d : "hello"}}}}) => "{d: hello}"
  const resolve = (props, obj) => {
    return props.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj)
  }

  const sortEmployees = (sortBy) => {
    props.setStateApp("employees", sortByFunc(sortBy))
  }

  const SortByList = [
        // value will be the value or sortBy
          {
              desc: "first name", 
              value: "name.first", 
              func: () => {
                sortEmployees("name.first")
              }
          },
          {
              desc: "last name", 
              value: "name.last", 
              func: () => {
                sortEmployees("name.last")
              }
          },
          {
            desc: "city", 
            value: "location.city", 
            func: () => {
                sortEmployees("location.city")
              }
          },
        ]
    
  return (
    <>
    <div className="options">
      <div className={'btn-group-vertical'}>
      {SortByList.map(sort => (
              <button 
                className={'btn btn-outline-primary'} 
                key={sort.desc} name="sortBy" 
                onClick={()=>sort.func(sort.value)}>Sort by {sort.desc}
              </button>
          )
      )}
      </div>
    </div>
    </>);
}

export default SortOptions;
