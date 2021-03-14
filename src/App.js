import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import HyperLink from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import API from './API';
import { render } from 'react-dom';

class App extends React.Component {
  
  state = {
    employees: [],
    delId: 0,
  };

  componentDidMount() {
    API.getEmployees()
      .then(employeeList => {
        console.log(employeeList)
        this.setState({ employees: employeeList })
      });
  }
  
  regenEmp(id, employees) {
      API.regenEmployee(id, employees)
        .then(employeeList => {
          // console.log(employeeList)
          this.setState({ employees: employeeList })
      });
  }

  render() {
    return (
      <Wrapper>
      <Title>Employee List</Title>
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
            console.log(employee)
            // set so onle this component rerenders on "regenEmp"
            this.setState({toDel: true})
            this.regenEmp(employee.id, this.state.employees)
            } 
          }
          toDel={this.state.delId === employee.id}
        >
        </EmployeeCard>
    ))
      }
    </Wrapper>
    )
  };
}

export default App
