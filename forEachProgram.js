class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(
    "********************************************************************************************************"
  );
  console.log(` "-----------------------1) "TCS" Emplyee Details :-->>---------------" `);
  
  array_employees.forEach((employee)=>{
           if(employee.emp_company=="TCS"){
            console.log(employee);
           }
  });
  console.log(
    "-------------------------------------------------------------------------------------------------------"
  );
  console.log("-----------------------------2) Employee With Salary>=50000:->>-----------------------------------");
  array_employees.forEach((employee)=>{
    if(employee.emp_salary>=50000){
     console.log(employee);
    }
});
console.log("");
let sumofSalary = 0;
array_employees.forEach((employee)=>{
    if(employee.emp_salary){
        sumofSalary=sumofSalary+employee.emp_salary;
    }
});


console.log(`----------------------------------3) Employees Sum Of Salary Is:->>---${sumofSalary}`);
console.log("----------------------------------------------------------------------------------------------------");
// WAP to find the average salary of an employee 
let sumSalary = 0;
array_employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / array_employees.length;
console.log(`---------------------------------4) Employees Average Salary is :-->> ${averageSalary}`);

console.log("----------------------------------------------------------------------------------------------------");
//WAP to get the average salary of IT Department
console.log(`--------------------------5) Finding "IT" or "HR" department wemployee whose salary>=75000 :-->>--`);
const arrayIT = [];
array_employees.forEach( (employee) => {
    if (employee.emp_dept=="IT") {
        arrayIT.push(employee);
    }
});
arrayIT.forEach((employee)=>{
    if(employee.emp_salary>=75000){
     console.log(employee);
    }
});

const arrayHR = [];
array_employees.forEach( (employee) => {
    if (employee.emp_dept=="HR") {
        arrayHR.push(employee);
    }
});
arrayHR.forEach((employee)=>{
    if(employee.emp_salary>=75000){
     console.log(employee);
    }
});