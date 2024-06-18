class Employees {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  salaryCalculation() {
    return this.salary * 12;
  }
}

class Manager extends Employees {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus;
  }

  salaryCalculation() {
    return this.salary * 12 + this.bonus;
  }
}

const manager1 = new Manager("Bob", 1000, "IT", 800);
const manager2 = new Manager("Anna", 1400, "Marketing", 500);

console.log(
  `${manager1.name} (отдел: ${
    manager1.department
  }): годовая зарплата = ${manager1.salaryCalculation()}`
);

console.log(
  `${manager2.name} (отдел: ${
    manager2.department
  }): годовая зарплата = ${manager2.salaryCalculation()}`
);
