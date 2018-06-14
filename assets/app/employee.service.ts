///<reference path="../../typings.d.ts"/>
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from "./employee.model";
import 'rxjs/Rx';

@Injectable()// metadata
export class EmployeeService{
    //inject the http service (dependency injection)
    constructor(private http: Http){

    }

    getEmployees(): Observable<any>{
        return this.http.get('/employees').map(data => {   
            const extracted = data.json();
            const msgArray: Employee[] = [];
            let employee;
            for (let element of extracted.data){
                    
                employee = new Employee(element.name,element.email,element.position,element.id);
                msgArray.push(employee);
            }
            console.log(msgArray);
            return msgArray;
        });
    }

    saveEmployees(employee: Employee) {
        console.log('adding employee');
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/employee',body,{headers: headers});
    }

    updateEmployee(employee: Employee){
       console.log('update employee');
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/employeeupdate',body,{headers: headers});
                
    }


    deleteEmployee(id: string){
        //const body = JSON.stringify(employee);
        return new Promise((resolve, reject) => {
        this.http.delete('/employee/' + id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
