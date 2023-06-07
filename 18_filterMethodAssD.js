
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, " Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, " Radha ", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, " Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, " Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, " Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, " Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, " Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("");

const empWipro = array_employees.filter((employee)=> {
    return employee.emp_company=="Wipro";
});
const empName = empWipro.map((employee)=> {
    return employee.emp_name;
});
console.log(`--------------------1) Finding All Employee From"Wipro" Company:-->--------------------------`);
console.log("");
console.log( empName);


const deptIT = array_employees.filter( (employee) => {
    return employee.emp_dept=="IT";
        
});
const empName1 = deptIT.map((employee)=> {
    return employee.emp_name;
});


const deptHR = array_employees.filter( (employee) => {
   return employee.emp_dept=="HR";  
});
const empName2 = deptHR.map((employee)=> {
    return employee.emp_name;
});
console.log("========================================================================================================");
console.log(`-----------------------2) Finding All Employee From"IT" & "HR" Department:-->---------------------------`);
console.log("");
console.log( `[${empName1} ${empName2}]`);

console.log("========================================================================================================");
console.log(`-----------------------2) Finding  Employee Whose employee Id >50 :-->---------------------------`);
console.log("");
const empId50 = array_employees.filter((employee) => {
    return employee.emp_id>50;
});
const empId2 = empId50.map((employee)=> {
    return employee.emp_name;
});
console.log(empId2);
console.log("========================================================================================================");
console.log(`-----------------------3) Finding All Employee Average Salary :-->---------------------------`);
console.log("");
const empSalary = array_employees.filter((employee)=> {
    return employee.emp_salary;
});
let sumOfSalary = 0;
const empavg = empSalary.forEach((employee)=> {
sumOfSalary = sumOfSalary + employee.emp_salary;
});
const average = sumOfSalary /empSalary.length;
console.log(`Average Salary Of Employee for all Department :->> ${average}`);
console.log("========================================================================================================");
console.log(`-----------------------5) Finding Average Salary for "IT" Department :-->---------------------------`);
console.log("");
const salaryIT = array_employees.filter((employee)=> {
    return employee.emp_dept =="IT";
});
let sumOfsalary = 0;
const empIT = salaryIT.forEach((employee)=> {
sumOfsalary = sumOfsalary + employee.emp_salary;
});
const average1 = sumOfsalary / salaryIT.length;

console.log(`Average Salary for "IT" Department :--> ${average1}`);
