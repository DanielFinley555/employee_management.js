//Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    
    get details() {
        return this.name, this.position, this.salary
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
