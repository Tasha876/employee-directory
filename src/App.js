import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import FilterOptions from './components/FilterOptions';
import SortOptions from "./components/SortOptions"
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import API from './API';
import { render } from 'react-dom';

class App extends React.Component {
  
  state = {
    employees: [],
    nonFilteredEmps: [],
    delId: 0,
    filteredBy: "none"
  };

  componentDidMount() {
    API.getEmployees()
      .then(employeeList => {
        this.setState({ employees: employeeList, nonFilteredEmps: employeeList })
      });
  }
  
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
      this.state.employees.map(employee => (
        <EmployeeCard 
          key={employee.id}
          name={`${employee.name.first} ${employee.name.last}`}
          image={employee.picture.large}
          location={employee.location}
          email={employee.email} 
          github={employee.login.username}
          end={() => {
            this.setState({toDel: true})
            this.regenEmp(employee.id, this.state.employees, this.state.filteredBy)
            } 
          }
          toDel={this.state.delId === employee.id}
        >
        </EmployeeCard>
    ))
      }
    </Wrapper>
    </div>
    )
  };
}

export default App
