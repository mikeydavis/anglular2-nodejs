///<reference path="../../typings.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var employee_model_1 = require("./employee.model");
require('rxjs/Rx');
var EmployeeService = (function () {
    //inject the http service (dependency injection)
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('/employees').map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var employee;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                employee = new employee_model_1.Employee(element.name, element.position, element._id);
                msgArray.push(employee);
            }
            console.log(msgArray);
            return msgArray;
        });
    };
    EmployeeService.prototype.saveEmployees = function (employee) {
        console.log('adding employee');
        var body = JSON.stringify(employee);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/employee', body, { headers: headers });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        console.log('update employee');
        var body = JSON.stringify(employee);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/employeeupdate', body, { headers: headers });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        var _this = this;
        //const body = JSON.stringify(employee);
        return new Promise(function (resolve, reject) {
            _this.http.delete('/employee/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBakRBLEFBaURDLElBQUE7QUFqRFksdUJBQWUsa0JBaUQzQixDQUFBIiwiZmlsZSI6ImVtcGxveWVlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzLmQudHNcIi8+XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tIFwiLi9lbXBsb3llZS5tb2RlbFwiO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKS8vIG1ldGFkYXRhXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZXJ2aWNle1xuICAgIC8vaW5qZWN0IHRoZSBodHRwIHNlcnZpY2UgKGRlcGVuZGVuY3kgaW5qZWN0aW9uKVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7XG5cbiAgICB9XG5cbiAgICBnZXRFbXBsb3llZXMoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2VtcGxveWVlcycpLm1hcChkYXRhID0+IHsgICBcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgbXNnQXJyYXk6IEVtcGxveWVlW10gPSBbXTtcbiAgICAgICAgICAgIGxldCBlbXBsb3llZTtcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZXh0cmFjdGVkLmRhdGEpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlbXBsb3llZSA9IG5ldyBFbXBsb3llZShlbGVtZW50Lm5hbWUsZWxlbWVudC5wb3NpdGlvbixlbGVtZW50Ll9pZCk7XG4gICAgICAgICAgICAgICAgbXNnQXJyYXkucHVzaChlbXBsb3llZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2dBcnJheSk7XG4gICAgICAgICAgICByZXR1cm4gbXNnQXJyYXk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVFbXBsb3llZXMoZW1wbG95ZWU6IEVtcGxveWVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgZW1wbG95ZWUnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGVtcGxveWVlKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2VtcGxveWVlJyxib2R5LHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRW1wbG95ZWUoZW1wbG95ZWU6IEVtcGxveWVlKXtcbiAgICAgICBjb25zb2xlLmxvZygndXBkYXRlIGVtcGxveWVlJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShlbXBsb3llZSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9lbXBsb3llZXVwZGF0ZScsYm9keSx7aGVhZGVyczogaGVhZGVyc30pO1xuICAgICAgICAgICAgICAgIFxuICAgIH1cblxuXG4gICAgZGVsZXRlRW1wbG95ZWUoaWQ6IHN0cmluZyl7XG4gICAgICAgIC8vY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGVtcGxveWVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmRlbGV0ZSgnL2VtcGxveWVlLycgKyBpZClcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19
