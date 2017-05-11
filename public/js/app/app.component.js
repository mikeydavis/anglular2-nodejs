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
var message_model_1 = require("./message.model");
var message_service_1 = require("./message.service");
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.title = 'Angular 2 and Mongo DB';
        this.employees = [
            { name: "Mike Davis", position: "manager" },
            { name: "Tanya", position: "manager" },
            { name: "Harold", position: "designer" },
        ];
        this.messages = [];
        this.model = {};
        this.msg = "";
    }
    AppComponent.prototype.addEmployee = function () {
        var rnd = Math.ceil(Math.random() * 100);
        var message = new message_model_1.Message('employee  name ', this.model.position);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Sucess'); }, function (error) { return console.error(error); });
        console.log('add');
        this.employees.push(this.model);
        this.model = {};
        this.msg = "Successfully added";
    };
    ;
    AppComponent.prototype.deleteEmployee = function (i) {
        console.log(i);
        this.employees.splice(i, 1);
        this.msg = "Successfully deleted";
    };
    ;
    AppComponent.prototype.editEmployee = function (k) {
        this.model.name = this.employees[k].name;
        this.model.position = this.employees[k].position;
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
                this.model = {};
            }
        }
        this.msg = "Successfully updated";
    };
    ;
    AppComponent.prototype.closeMsg = function () {
        this.msg = "";
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFDdEMsQ0FBQzs7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDOztJQXRFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7O29CQUFBO0lBa0VGLG1CQUFDO0FBQUQsQ0FqRUEsQUFpRUMsSUFBQTtBQWpFWSxvQkFBWSxlQWlFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2UubW9kZWxcIjtcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAudGVtcGxhdGUuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xuICAgIHRpdGxlID0gJ0FuZ3VsYXIgMiBhbmQgTW9uZ28gREInO1xuXG4gICAgZW1wbG95ZWVzID0gW1xuICAgICAgICB7bmFtZTogXCJNaWtlIERhdmlzXCIsIHBvc2l0aW9uOlwibWFuYWdlclwifSxcbiAgICAgICAge25hbWU6IFwiVGFueWFcIiwgcG9zaXRpb246XCJtYW5hZ2VyXCJ9LFxuICAgICAgICB7bmFtZTogXCJIYXJvbGRcIiwgcG9zaXRpb246XCJkZXNpZ25lclwifSxcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpeyB9XG5cbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XG5cblxuICAgIG1vZGVsOmFueT17fTtcbiAgICBtc2c6YW55PVwiXCI7XG4gICAgXG4gICAgYWRkRW1wbG95ZWUoKXtcblxuICAgICAgICBjb25zdCBybmQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnZW1wbG95ZWUgIG5hbWUgJyx0aGlzLm1vZGVsLnBvc2l0aW9uICk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zYXZlTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3VjZXNzJyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGQnKTtcbiAgICAgICAgdGhpcy5lbXBsb3llZXMucHVzaCh0aGlzLm1vZGVsKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgICAgICB0aGlzLm1zZyA9IFwiU3VjY2Vzc2Z1bGx5IGFkZGVkXCI7XG4gICAgfTtcblxuICAgIGRlbGV0ZUVtcGxveWVlKGkpe1xuICAgICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgdGhpcy5lbXBsb3llZXMuc3BsaWNlKGksMSk7XG4gICAgICAgIHRoaXMubXNnID0gXCJTdWNjZXNzZnVsbHkgZGVsZXRlZFwiO1xuICAgIH07XG4gICAgZW1wbG95ZWVWYWx1ZTtcbiAgICBlZGl0RW1wbG95ZWUoayl7XG4gICAgICAgIHRoaXMubW9kZWwubmFtZSA9IHRoaXMuZW1wbG95ZWVzW2tdLm5hbWU7XG4gICAgICAgIHRoaXMubW9kZWwucG9zaXRpb24gPSB0aGlzLmVtcGxveWVlc1trXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5lbXBsb3llZVZhbHVlID0gaztcblxuICAgIH07XG5cbiAgICB1cGRhdGVFbXBsb3llZSgpe1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlJyk7XG4gICAgICAgIGxldCBrID0gdGhpcy5lbXBsb3llZVZhbHVlO1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5lbXBsb3llZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8bGVuOyBpKyspe1xuICAgICAgICAgICAgaWYgKGk9PT1rKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlc1tpXSA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubXNnID0gXCJTdWNjZXNzZnVsbHkgdXBkYXRlZFwiO1xuICAgIH07XG5cbiAgICBjbG9zZU1zZygpe1xuICAgICAgICB0aGlzLm1zZyA9IFwiXCI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICB9O1xufSJdfQ==
