import React from "react";
import App from "../../App"
import "./style.css"

const FilterOptions = (props) => {


// this sets the employee list to the filtered list
const setEmployees = (spec,value) => {
    props.setStateApp("employees", props.nonFilteredEmps.filter(
        employee => employee[spec] === value
      ))
    props.setStateApp("filteredBy", value)
}

// this sets the employee list back to the non-filtered list
const resetEmployees = () => {
    props.setStateApp("employees", props.nonFilteredEmps)
    props.setStateApp("filteredBy", "none")

}

// list containing options for filter and their corresponding funcitons
const filterByList = [
        {
            value: "Show only women", func: () => {
              setEmployees("gender","female")
            }
        },
        {
            value: "Show only men", func: () => {

              setEmployees("gender","male")
            }
        },
        {
            value: "Show both", func: () => {
              resetEmployees()
            }
        },
      ]
    
  return (
    <>
    <div className="options">
      <div className={'btn-group'}>
        {filterByList.map(filter => (
                <button className={'btn btn-outline-primary'} key={filter.value} name="sortBy" onClick={filter.func}>{filter.value}</button>
            )
        )}
      </div>
    </div>
    </>);
}

export default FilterOptions;
