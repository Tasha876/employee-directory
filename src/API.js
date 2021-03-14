import axios from "axios"

let idGenerator = 0;

const API = {

    getEmployee() {
        return axios.get('https://randomuser.me/api/')
            .then(res => {
            return res.data.results[0]
            }).then(emp => {
                emp.id = ++idGenerator
                return emp
            })
    },

    getEmployees(n = 10) {
        return axios.get("https://randomuser.me/api/?results=" + n)
        .then(res => res.data.results
        .map(employee => {
            employee.id = ++idGenerator
            return employee
        })
        )
        // .then(emps => employees = emps)
        .then(employees => employees)
    },

    regenEmployee(oldEmployeeId, employeeList) {
        let oldEmpIndex = employeeList.findIndex((employee) =>
            employee.id === oldEmployeeId 
        )
        console.log(oldEmpIndex)
        return this.getEmployee()
        .then(newEmployee => {
            console.log(newEmployee)
            employeeList.splice(oldEmpIndex,1,newEmployee)
            return employeeList
        })
    }
}

export default API