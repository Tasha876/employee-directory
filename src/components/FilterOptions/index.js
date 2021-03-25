import React from "react";
import App from "../../App"
import "./style.css"

const FilterOptions = (props) => {

const setEmployees = (spec,value) => {
    console.log(props.employees)
    // props.setStateApp(props.nonFilteredEmps, props.employees)
    // props.setStateApp("nonFilteredEmps", props.employees)
    props.setStateApp("employees", props.nonFilteredEmps.filter(
        employee => employee[spec] === value
      ))
      console.log("emps",props.employees, props.nonFilteredEmps)

}

const resetEmployees = () => {
    // props.setStateApp("nonFilteredEmps", props.employees)
    console.log("bf",props.employees)
    props.setStateApp("employees", props.nonFilteredEmps)
    console.log(props.employees)
    console.log("after",props.employees)
    // console.log(props.employees)
}

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
            value: "Reset", func: () => {
              resetEmployees()
            }
        },
      ]
    
  return (
    <>
    <p className="text-center">Filter By:</p>
    <div className="options">
    {filterByList.map(filter => (
            <label><input type="radio" name="sortBy" onClick={filter.func}></input>{filter.value}</label>
        )
    )}
    </div>
    </>);
}

export default FilterOptions;
