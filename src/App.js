import React from 'react';
import EmployeeCard from './components/EmployeeCard';
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

  getGreeting(name) {
  let list = [
    `Hi, I'm ${name}. Goodday!`,
    `Hey, my name is ${name}.`,
    `How are you, I'm ${name}.`,
    `I'm ${name}. Pleased to meet you!`
  ]

  return list[Math.floor(Math.random() * list.length)]
  }

  getCity(location) {
  let list = [
    `I'm from ${location.city}, ${location.country}.`,
    `I'm located in ${location.city}, ${location.country}.`,
    `I'm from ${location.country}, more specifically ${location.city}.`,
    `I live in ${location.city}, ${location.country}.`
  ]

  return list[Math.floor(Math.random() * list.length)]
  }

  getEmail(email) {
  let list = [
    `Contact me at ` + email,
    `My email address is ` + email,
    `Reach me at ` + email,
    `You can get in touch with me at ` + email,
    `Get a hold of me at ` + email
  ]

  return list[Math.floor(Math.random() * list.length)]
  
}

  getUserName(username) {
  let list = [
    'This is my github, ' + username,
    'My github is ' + username,
    'Look at my github, its ' + username,
    'See all my cool repos on github, I\'m ' + username
  ]

  return list[Math.floor(Math.random() * list.length)]
  
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
          name={this.getGreeting(`${employee.name.first} ${employee.name.last}`)}
          image={employee.picture.large}
          location={this.getCity(employee.location)}
          email={this.getEmail(employee.email)}
          github={this.getUserName(employee.login.username)}
          end={() => {
            console.log(employee)
            // set so onle this component rerenders on "regenEmp"
            this.setState({toDel: true})
            this.regenEmp(employee.id, this.state.employees)
            } 
          }
          toDel={this.state.delId === employee.id}
        />
    ))
      }
    </Wrapper>
    )
  };
}

export default App
