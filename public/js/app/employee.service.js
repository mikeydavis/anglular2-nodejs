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
                employee = new employee_model_1.Employee(element.name, element.email, element.position, element.id);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFBO0lBaURiLHNCQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhEWSx1QkFBZSxrQkFnRDNCLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gXCIuL2VtcGxveWVlLm1vZGVsXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpLy8gbWV0YWRhdGFcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVNlcnZpY2V7XG4gICAgLy9pbmplY3QgdGhlIGh0dHAgc2VydmljZSAoZGVwZW5kZW5jeSBpbmplY3Rpb24pXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcblxuICAgIH1cblxuICAgIGdldEVtcGxveWVlcygpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvZW1wbG95ZWVzJykubWFwKGRhdGEgPT4geyAgIFxuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gZGF0YS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBtc2dBcnJheTogRW1wbG95ZWVbXSA9IFtdO1xuICAgICAgICAgICAgbGV0IGVtcGxveWVlO1xuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBleHRyYWN0ZWQuZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVtcGxveWVlID0gbmV3IEVtcGxveWVlKGVsZW1lbnQubmFtZSxlbGVtZW50LmVtYWlsLGVsZW1lbnQucG9zaXRpb24sZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgbXNnQXJyYXkucHVzaChlbXBsb3llZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2dBcnJheSk7XG4gICAgICAgICAgICByZXR1cm4gbXNnQXJyYXk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVFbXBsb3llZXMoZW1wbG95ZWU6IEVtcGxveWVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgZW1wbG95ZWUnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGVtcGxveWVlKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2VtcGxveWVlJyxib2R5LHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRW1wbG95ZWUoZW1wbG95ZWU6IEVtcGxveWVlKXtcbiAgICAgICBjb25zb2xlLmxvZygndXBkYXRlIGVtcGxveWVlJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShlbXBsb3llZSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9lbXBsb3llZXVwZGF0ZScsYm9keSx7aGVhZGVyczogaGVhZGVyc30pO1xuICAgICAgICAgICAgICAgIFxuICAgIH1cblxuXG4gICAgZGVsZXRlRW1wbG95ZWUoaWQ6IHN0cmluZyl7XG4gICAgICAgIC8vY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGVtcGxveWVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmRlbGV0ZSgnL2VtcGxveWVlLycgKyBpZClcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
