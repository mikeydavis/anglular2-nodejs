
import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee.model";
import { EmployeeService } from "./employee.service";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [EmployeeService]
})
export class AppComponent implements OnInit  {
    title = 'Angular 2 and Mongo DB';

    constructor(private employeeService: EmployeeService){ }

    employees: Employee[] = [];

    model:any={};
    msg:any="";
    
    addEmployee(){

        const employee = new Employee(this.model.name,this.model.position,'');
        this.employees.push(employee);
        this.employeeService.saveEmployees(employee)
            .subscribe(
                () => console.log('Sucess'),
                error => console.error(error)
            );
            
        this.msg = "Successfully added";
    };

    deleteEmployee(i,id){
        console.log(id);
        this.employees.splice(i,1);
        this.msg = "Successfully deleted";
        
        this.employeeService.deleteEmployee(id)

    };
    employeeValue;

    editEmployee(k){
        this.model.name = this.employees[k].name;
        this.model.position = this.employees[k].position;
        this.model.id = this.employees[k].id;
        this.employeeValue = k;
    };
    
    updateEmployee(){
        console.log('update');
        let k = this.employeeValue;
        let len = this.employees.length;
        for (let i=0; i<len; i++){
            if (i===k){
                this.employees[i] = this.model;
            }
        }
        console.log(this.model);
        this.employeeService.updateEmployee(this.model)
            .subscribe(
                () => console.log('Sucess'),
                error => console.error(error)
            );
        this.model = {};
        this.msg = "Successfully updated";
    };

    closeMsg(){
        this.msg = "";
    }

    ngOnInit(){
        //Get the 
        this.employeeService.getEmployees()
        .subscribe(
            employees => this.employees = employees,
            error => console.error(error)
        );

    };
}