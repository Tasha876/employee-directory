import axios from "axios"

let idGenerator = 0;

// const numEmployees = 10,

const API = {

    NUM_EMPLOYEES: 10,

    getEmployee() {
        return axios.get('https://randomuser.me/api/')
            .then(res => {
            return res.data.results[0]
            }).then(emp => {
                emp.id = ++idGenerator
                return emp
            })
    },

    getEmployees(n = this.NUM_EMPLOYEES) {
        return axios.get("https://randomuser.me/api/?results=" + n)
        .then(res => res.data.results
        .map(employee => {
            employee.id = ++idGenerator
            return employee
        })
        )
        .then(employees => employees)
    },

    regenEmployee(oldEmployeeId, employeeList, filter, nonFilteredEmps) {
        let oldEmpIndex = employeeList.findIndex(employee =>
            employee.id === oldEmployeeId 
        )
        let oldAllEmpIndex = nonFilteredEmps.findIndex(employee =>
            employee.id === oldEmployeeId 
        )
        return this.getEmployee()
        .then(
            newEmployee => {
                if (filter === "none" || newEmployee.gender === filter) {
                    employeeList.splice(oldEmpIndex,1,newEmployee)
                    nonFilteredEmps.splice(oldAllEmpIndex,1,newEmployee)
                    return {filtered: employeeList, nonFiltered: nonFilteredEmps}
                } else {
                    return this.regenEmployee(oldEmployeeId, employeeList,filter, nonFilteredEmps)
                }
        })
    }

}

export default API