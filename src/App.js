import React, { createRef } from 'react';
import EmployeeCard from './components/EmployeeCard';
import FilterOptions from './components/FilterOptions';
import SortOptions from "./components/SortOptions"
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import API from './API';
import { render } from 'react-dom';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      loaded: false,
      employees: [],
      nonFilteredEmps: [],
      delId: 0,
      filteredBy: "none"
    };
  }

  componentDidMount() {
    API.getEmployees()
      .then(employeeList => {
        this.setState({ employees: employeeList, nonFilteredEmps: employeeList})
      })
      .then(() => {
        this.setState({ loaded: true })
      })
  };

  regenEmp(id, employees, filter = "none", nonFilteredEmps = this.state.nonFilteredEmps) {
    API.regenEmployee(id, employees, filter, nonFilteredEmps)
      .then(employeeList => {
        this.setState({ employees: employeeList.filtered, nonFilteredEmps: employeeList.nonFiltered})
    });
  }

  setStateApp = (state, value) => {
    this.setState({[state]: value})
  }

  render() {
    return (
      <div>
      <Title>Employee List</Title>
      <FilterOptions
        employees={this.state.employees}
        setStateApp={this.setStateApp}
        nonFilteredEmps={this.state.nonFilteredEmps}
      />
      <SortOptions
        employees={this.state.employees}
        setStateApp={this.setStateApp}
        nonFilteredEmps={this.state.nonFilteredEmps}
      />
      <Wrapper>
      {
      this.state.loaded? (
        this.state.employees.map(employee => (
        <EmployeeCard 
          key={employee.id}
          id={employee.id}
          loaded={this.state.loaded}
          name={`${employee.name.first} ${employee.name.last}`}
          image={employee.picture.large || ''}
          location={employee.location}
          email={employee.email} 
          github={employee.login.username}
          end={() => {
            this.regenEmp(employee.id, this.state.employees, this.state.filteredBy)
            } 
          }
        >
        </EmployeeCard>
    ))): [...Array(API.NUM_EMPLOYEES)].map(_=><EmployeeCard loaded={this.state.loaded}/>)}
    </Wrapper>
    </div>
    )
  };
}

export default App
