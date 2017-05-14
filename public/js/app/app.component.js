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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFDO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQztJQUN0QyxDQUFDOztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsVUFBVTtRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFO2FBQ2xDLFNBQVMsQ0FDTixVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixFQUN2QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFFTixDQUFDOztJQTdFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1NBQy9CLENBQUM7O29CQUFBO0lBeUVGLG1CQUFDO0FBQUQsQ0F4RUEsQUF3RUMsSUFBQTtBQXhFWSxvQkFBWSxlQXdFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2UubW9kZWxcIjtcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSBcIi4vZW1wbG95ZWUubW9kZWxcIjtcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tIFwiLi9lbXBsb3llZS5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAudGVtcGxhdGUuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbRW1wbG95ZWVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcbiAgICB0aXRsZSA9ICdBbmd1bGFyIDIgYW5kIE1vbmdvIERCJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1wbG95ZWVTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UpeyB9XG5cbiAgICBlbXBsb3llZXM6IEVtcGxveWVlW10gPSBbXTtcblxuICAgIG1vZGVsOmFueT17fTtcbiAgICBtc2c6YW55PVwiXCI7XG4gICAgXG4gICAgYWRkRW1wbG95ZWUoKXtcblxuICAgICAgICBjb25zdCBlbXBsb3llZSA9IG5ldyBFbXBsb3llZSh0aGlzLm1vZGVsLm5hbWUsdGhpcy5tb2RlbC5wb3NpdGlvbiwnJyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWVzLnB1c2goZW1wbG95ZWUpO1xuICAgICAgICB0aGlzLmVtcGxveWVlU2VydmljZS5zYXZlRW1wbG95ZWVzKGVtcGxveWVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3VjZXNzJyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5tc2cgPSBcIlN1Y2Nlc3NmdWxseSBhZGRlZFwiO1xuICAgIH07XG5cbiAgICBkZWxldGVFbXBsb3llZShpLGlkKXtcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICB0aGlzLmVtcGxveWVlcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgdGhpcy5tc2cgPSBcIlN1Y2Nlc3NmdWxseSBkZWxldGVkXCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtcGxveWVlU2VydmljZS5kZWxldGVFbXBsb3llZShpZClcblxuICAgIH07XG4gICAgZW1wbG95ZWVWYWx1ZTtcblxuICAgIGVkaXRFbXBsb3llZShrKXtcbiAgICAgICAgdGhpcy5tb2RlbC5uYW1lID0gdGhpcy5lbXBsb3llZXNba10ubmFtZTtcbiAgICAgICAgdGhpcy5tb2RlbC5wb3NpdGlvbiA9IHRoaXMuZW1wbG95ZWVzW2tdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1vZGVsLmlkID0gdGhpcy5lbXBsb3llZXNba10uaWQ7XG4gICAgICAgIHRoaXMuZW1wbG95ZWVWYWx1ZSA9IGs7XG4gICAgfTtcbiAgICBcbiAgICB1cGRhdGVFbXBsb3llZSgpe1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlJyk7XG4gICAgICAgIGxldCBrID0gdGhpcy5lbXBsb3llZVZhbHVlO1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5lbXBsb3llZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8bGVuOyBpKyspe1xuICAgICAgICAgICAgaWYgKGk9PT1rKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlc1tpXSA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWVTZXJ2aWNlLnVwZGF0ZUVtcGxveWVlKHRoaXMubW9kZWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdTdWNlc3MnKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgICAgICB0aGlzLm1zZyA9IFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIjtcbiAgICB9O1xuXG4gICAgY2xvc2VNc2coKXtcbiAgICAgICAgdGhpcy5tc2cgPSBcIlwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIC8vR2V0IHRoZSBcbiAgICAgICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGVtcGxveWVlcyA9PiB0aGlzLmVtcGxveWVlcyA9IGVtcGxveWVlcyxcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG5cbiAgICB9O1xufSJdfQ==
