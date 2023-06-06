

console.log("");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 50000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const array = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  
  //console.log("  # All the created employee's are => ");
  //console.log(array);
  console.log(
    "********************************************************************************************************"
  );
  console.log(` "1) Finding All the Employees Working in "TCS" and log only Employee Name:-->>" `);
  
  for (const employee of array) {
    if (employee.emp_name && employee.emp_company =="TCS") {
      console.log(`       Employee Name that are working in TCS:-->${employee.emp_name} ,    Emp_Company ${employee.emp_company }` );
    }
  }
  console.log(
    "-------------------------------------------------------------------------------------------------------"
  );
  console.log(` 2) Finding "Finance" Department Employee, log only Department & Employee Name  `);
  
  for (const employee of array) {
    if (employee.emp_dept == "Finance" && employee.emp_name) {
      console.log( `       EmpName:->> ${employee.emp_name}, Department:->> ${employee.emp_dept}`);
    }
  }
  console.log(
    "-------------------------------------------------------------------------------------------------------"
  );
  console.log(` 3) The employee whose name start's with "R" Letter:->> `);
  
  for (const employee of array) {
    if (employee.emp_name.startsWith("R")) {
      console.log(        employee);
    }
  }
  console.log(
    "-------------------------------------------------------------------------------------------------------"
  );
  console.log(` 4} The employee whose salary is greater than "75000" :->> `);
  
  for (const employee of array) {
    if (employee.emp_salary > 75000) {
      console.log(
        `Name: ${employee.emp_name} , Compony: ${employee.emp_company} , Salary: ${employee.emp_salary}`
      );
    }
  }
  console.log(
    "-------------------------------------------------------------------------------------------------------"
  );
  console.log(
    ` 5} The employee whose salary is greater than "50000" and which is from "IT" Dept. are :->>`
  );
  for (const employee of array) {
    if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
      console.log(employee);
    }
  }
  console.log(
    "-------------------------------------------------------------------------------------------------------"
  );
  console.log(` 6} The employee who work for compony "Infy" are :->> `);
  for (const employee of array) {
    if (employee.emp_company == "Infy") {
      console.log(employee);
    }
  }
  console.log(
    "*********************************************************************************************************"
  );
