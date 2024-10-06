
//I could only figure out how to do the Employee, Manager, and Department classes, and log them. I could not get the calculation methods to work.

//Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        //log the console log
        console.log(`Employee Name: ${name}`);
        console.log(`Salary: $${salary}`);
        console.log(`Position: ${position}`);
        console.log(`Department: ${department}`);
    }
    
    get details() {
        return console.log(`${this.name}, ${this.position}, ${this.salary}`)
    }
}

//I couldn't figure out how to not include the Managers in the Employee console log, so that causes a duplication in the output.



//Task 2: Create a Department Class

//creating the department class, so "Department" is defined and the code works.
class Department {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees
    }
}

//The two methods are changed to comments, so they don't cause errors. I did not figure out how to get them to work
  //adding a new employee
    //addEmployee(Employee); {
    //};
    
    //adding up the the total department salary
    //getDepartmentSalary = Employee.reduce(this.salary)



//Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
        //log the console log for the managers
        console.log(`Employee Name: ${name}`);
        console.log("Manager")
        console.log(`Salary: $${salary}`);
        console.log(`Position: ${position}`);
        console.log(`Department: ${department}`);
        console.log(`Bonus: $${bonus}`)
    }

    get details() {
        return console.log(`${this.name}, Manager, ${this.position}, ${this.salary}, ${this.bonus}`)
    }
}

//Task 4: Handle Bonuses for Managers

//couldn't figure how to do the orginal salary calculations, so I can not do this task.



//Task 5: Create and Manage Departments and Employees

// Create departments
const writing = new Department("Writing");
const acting = new Department("Acting");

// Create employees
const Rocky = new Employee("Rocky", 80000, "Support Writer", "Writing");
const Jimmy = new Employee("Jimmy", 75000, "Stunt Double", "Acting");
const Johns = new Manager("Johns", 120000, "Head Writer", "Writing", 20000);
const Arnold = new Manager("Arnold", 130000, "Main Character", "Acting", 25000);

//the following is changed to comments to not cause errors. Did not know how to properly do addEmployee or the salary calculations in the classes.

// Add employees to departments
//writing.addEmployee(Rocky);
//writing.addEmployee(Johns);
//acting.addEmployee(Jimmy);
//acting.addEmployee(Arnold);

// Calculate total salary for each department
//console.log(`Total salary for Writing: $${writing.getDepartmentSalary()}`);
//console.log(`Total salary with bonuses for Writing: $${writing.calculateTotalSalaryWithBonus()}`);
//console.log(`Total salary for Acting: $${acting.getDepartmentSalary()}`);
//console.log(`Total salary with bonuses for Acting: $${acting.calculateTotalSalaryWithBonus()}`);
