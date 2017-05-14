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
var core_1 = require('@angular/core');
var employee_model_1 = require("./employee.model");
var employee_service_1 = require("./employee.service");
var AppComponent = (function () {
    function AppComponent(employeeService) {
        this.employeeService = employeeService;
        this.title = 'Angular 2 and Mongo DB';
        this.employees = [];
        this.model = {};
        this.msg = "";
    }
    AppComponent.prototype.addEmployee = function () {
        var employee = new employee_model_1.Employee(this.model.name, this.model.position, '');
        this.employees.push(employee);
        this.employeeService.saveEmployees(employee)
            .subscribe(function () { return console.log('Sucess'); }, function (error) { return console.error(error); });
        this.msg = "Successfully added";
    };
    ;
    AppComponent.prototype.deleteEmployee = function (i, id) {
        console.log(id);
        this.employees.splice(i, 1);
        this.msg = "Successfully deleted";
        this.employeeService.deleteEmployee(id);
    };
    ;
    AppComponent.prototype.editEmployee = function (k) {
        this.model.name = this.employees[k].name;
        this.model.position = this.employees[k].position;
        this.model.id = this.employees[k].id;
        this.employeeValue = k;
    };
    ;
    AppComponent.prototype.updateEmployee = function () {
        console.log('update');
        var k = this.employeeValue;
        var len = this.employees.length;
        for (var i = 0; i < len; i++) {
            if (i === k) {
                this.employees[i] = this.model;
            }
        }
        console.log(this.model);
        this.employeeService.updateEmployee(this.model)
            .subscribe(function () { return console.log('Sucess'); }, function (error) { return console.error(error); });
        this.model = {};
        this.msg = "Successfully updated";
    };
    ;
    AppComponent.prototype.closeMsg = function () {
        this.msg = "";
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get the 
        this.employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return console.error(error); });
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFDO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQztJQUN0QyxDQUFDOztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsVUFBVTtRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFO2FBQ2xDLFNBQVMsQ0FDTixVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixFQUN2QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFFTixDQUFDOztJQTdFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1NBQy9CLENBQUM7O29CQUFBO0lBeUVGLG1CQUFDO0FBQUQsQ0F4RUEsQUF3RUMsSUFBQTtBQXhFWSxvQkFBWSxlQXdFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tIFwiLi9lbXBsb3llZS5tb2RlbFwiO1xuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSBcIi4vZW1wbG95ZWUuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0VtcGxveWVlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XG4gICAgdGl0bGUgPSAnQW5ndWxhciAyIGFuZCBNb25nbyBEQic7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlKXsgfVxuXG4gICAgZW1wbG95ZWVzOiBFbXBsb3llZVtdID0gW107XG5cbiAgICBtb2RlbDphbnk9e307XG4gICAgbXNnOmFueT1cIlwiO1xuICAgIFxuICAgIGFkZEVtcGxveWVlKCl7XG5cbiAgICAgICAgY29uc3QgZW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUodGhpcy5tb2RlbC5uYW1lLHRoaXMubW9kZWwucG9zaXRpb24sJycpO1xuICAgICAgICB0aGlzLmVtcGxveWVlcy5wdXNoKGVtcGxveWVlKTtcbiAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2Uuc2F2ZUVtcGxveWVlcyhlbXBsb3llZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1N1Y2VzcycpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMubXNnID0gXCJTdWNjZXNzZnVsbHkgYWRkZWRcIjtcbiAgICB9O1xuXG4gICAgZGVsZXRlRW1wbG95ZWUoaSxpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgdGhpcy5lbXBsb3llZXMuc3BsaWNlKGksMSk7XG4gICAgICAgIHRoaXMubXNnID0gXCJTdWNjZXNzZnVsbHkgZGVsZXRlZFwiO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuZGVsZXRlRW1wbG95ZWUoaWQpXG5cbiAgICB9O1xuICAgIGVtcGxveWVlVmFsdWU7XG5cbiAgICBlZGl0RW1wbG95ZWUoayl7XG4gICAgICAgIHRoaXMubW9kZWwubmFtZSA9IHRoaXMuZW1wbG95ZWVzW2tdLm5hbWU7XG4gICAgICAgIHRoaXMubW9kZWwucG9zaXRpb24gPSB0aGlzLmVtcGxveWVlc1trXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5tb2RlbC5pZCA9IHRoaXMuZW1wbG95ZWVzW2tdLmlkO1xuICAgICAgICB0aGlzLmVtcGxveWVlVmFsdWUgPSBrO1xuICAgIH07XG4gICAgXG4gICAgdXBkYXRlRW1wbG95ZWUoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScpO1xuICAgICAgICBsZXQgayA9IHRoaXMuZW1wbG95ZWVWYWx1ZTtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuZW1wbG95ZWVzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbjsgaSsrKXtcbiAgICAgICAgICAgIGlmIChpPT09ayl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXNbaV0gPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xuICAgICAgICB0aGlzLmVtcGxveWVlU2VydmljZS51cGRhdGVFbXBsb3llZSh0aGlzLm1vZGVsKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3VjZXNzJyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMubW9kZWwgPSB7fTtcbiAgICAgICAgdGhpcy5tc2cgPSBcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkXCI7XG4gICAgfTtcblxuICAgIGNsb3NlTXNnKCl7XG4gICAgICAgIHRoaXMubXNnID0gXCJcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICAvL0dldCB0aGUgXG4gICAgICAgIHRoaXMuZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlcygpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBlbXBsb3llZXMgPT4gdGhpcy5lbXBsb3llZXMgPSBlbXBsb3llZXMsXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuXG4gICAgfTtcbn0iXX0=
