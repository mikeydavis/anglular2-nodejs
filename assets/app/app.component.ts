
import { Component, OnInit } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [MessageService]
})
export class AppComponent implements OnInit  {
    title = 'Angular 2 and Mongo DB';

    employees = [
        {name: "Mike Davis", position:"manager"},
        {name: "Tanya", position:"manager"},
        {name: "Harold", position:"designer"},
    ];

    constructor(private messageService: MessageService){ }

    messages: Message[] = [];


    model:any={};
    msg:any="";
    
    addEmployee(){

        const rnd = Math.ceil(Math.random() * 100);
        const message = new Message('employee  name ',this.model.position );
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Sucess'),
                error => console.error(error)
            );
        console.log('add');
        this.employees.push(this.model);
        this.model = {};
        this.msg = "Successfully added";
    };

    deleteEmployee(i){
        console.log(i);
        this.employees.splice(i,1);
        this.msg = "Successfully deleted";
    };
    employeeValue;
    editEmployee(k){
        this.model.name = this.employees[k].name;
        this.model.position = this.employees[k].position;
        this.employeeValue = k;

    };

    updateEmployee(){
        console.log('update');
        let k = this.employeeValue;
        let len = this.employees.length;
        for (let i=0; i<len; i++){
            if (i===k){
                this.employees[i] = this.model;
                this.model = {};
            }
        }
        this.msg = "Successfully updated";
    };

    closeMsg(){
        this.msg = "";
    }

    ngOnInit(){
    };
}