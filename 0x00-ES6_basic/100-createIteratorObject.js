export default function createIteratorObject(report) {
  const Employee = [];
  for (const [departments, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      Employee.push(employee);
    }
  }
  return Employee;
}
