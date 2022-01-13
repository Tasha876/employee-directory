import React, { useState } from "react";
import "./style.css"

const FilterOptions = (props) => {


const [active, setActive] = useState('')


// this sets the employee list to the filtered list
const setEmployees = (spec,value) => {
    props.setStateApp("employees", props.nonFilteredEmps.filter(
        employee => employee[spec] === value
      ))
    props.setStateApp("filteredBy", value)
}

// this sets the employee list back to the non-filtered list
const resetEmployees = () => {
    setActive('')
    props.setStateApp("employees", props.nonFilteredEmps)
    props.setStateApp("filteredBy", "none")
}

const filterByGender = (gender) => {
    if (active !== gender) {
      setActive(gender)
      setEmployees("gender",gender)
    }
    else {
      resetEmployees()
    }
}

// list containing options for filter and their corresponding funcitons
const filterByList = [
        {
            value: "only women",
            key: "female",
            func: ()=>filterByGender("female")
        },
        {
            value: "only men", 
            key: "male",
            func: ()=>filterByGender("male")
        },
      ]
    
  return (
    <>
    <div className="options">
      <div className={'btn-group-vertical'}>
        {filterByList.map(filter => (
                <button 
                  className={`btn btn-outline-primary ${active === filter.key ? 'active' : ''}`} 
                  key={filter.value} 
                  onClick={filter.func}>{active === filter.key? `Showing ${filter.value}` : `Show ${filter.value}`}
                </button>
            )
        )}
      </div>
    </div>
    </>);
}

export default FilterOptions;
