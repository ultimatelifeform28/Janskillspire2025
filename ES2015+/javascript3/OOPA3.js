class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    printInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, id, salary, post) {
        super(name, id);
        this.salary = salary;
        this.post = post;
    }
}

// New Person object
const person1 = new Person('Sakamoto', 3546);
person1.printInfo();

// New Employee object
const employee1 = new Employee('Naruto', 2463, 50000, 'Specialist');
employee1.printInfo();
console.log(`ID: ${employee1.id}, Salary: ${employee1.salary}, Post: ${employee1.post}`)



