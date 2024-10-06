//Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        //log the console log
        console.log(`Employee Name: ${name}`);
        console.log(`Salary: ${salary}`);
        console.log(`Position: ${position}`);
        console.log(`Department: ${department}`);
    }
    
    get details() {
        return console.log(`${this.name}, ${this.position}, ${this.salary}`)
    }
}



//Task 2: Create a Department Class

//creating the department class, so "Department" is defined and the code works.
class Department {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees
    }
}

    //adding a new employee
    addEmployee(Employee); {
    };
    
    //adding up the the total department salary
    getDepartmentSalary = Employee.reduce(this.salary)



//Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, "Manager", salary, position, department);
        this.bonus = bonus;
        console.log(`Employee Name: ${name}`);
        console.log("Manager")
        console.log(`Salary: ${salary}`);
        console.log(`Position: ${position}`);
        console.log(`Department: ${department}`);
    }

    get details() {
        return console.log(`${this.name}, Manager, ${this.position}, ${this.salary}, ${this.bonus}`)
    }
}



//Task 5: Create and Manage Departments and Employees

// Create departments
const writing = new Department("Writing");
const acting = new Department("Acting");

// Create employees
const Rocky = new Employee("Rocky", 80000, "Support Writer", "Writing");
const Jimmy = new Employee("Jimmy", 75000, "Stunt Double", "Acting");
const Johns = new Manager("Johns", 120000, "Head Writer", "Writing", 20000);
const Arnold = new Manager("Arnold", 130000, "Main Character", "Acting", 25000);

// Add employees to departments
writing.addEmployee(Rocky);
writing.addEmployee(Johns);
acting.addEmployee(Jimmy);
acting.addEmployee(Arnold);

// Calculate total salary for each department
console.log(`Total salary for Writing: $${writing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Writing: $${writing.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Acting: $${acting.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Acting: $${acting.calculateTotalSalaryWithBonus()}`);
