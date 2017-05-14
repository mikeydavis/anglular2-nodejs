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
var message_model_1 = require("./message.model");
require('rxjs/Rx');
var MessageService = (function () {
    //inject the http service
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/messages').map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                message = new message_model_1.Message(element.id, element.content);
                msgArray.push(message);
            }
            console.log(msgArray);
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var jsonHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/message', body, { headers: jsonHeaders });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5Qzs7Ozs7Ozs7Ozs7QUFFekMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RCw4QkFBd0IsaUJBQWlCLENBQUMsQ0FBQTtBQUMxQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU5QixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDM0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLElBQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztZQUMvQixJQUFJLE9BQU8sQ0FBQztZQUNaLEdBQUcsQ0FBQyxDQUFnQixVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTlCLElBQUksT0FBTyxTQUFBO2dCQUNaLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBTSxXQUFXLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBQyxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBekJMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUEyQmIscUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHNCQUFjLGlCQTBCMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlLnNlcnZpY2UuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZS5tb2RlbFwiO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKS8vIG1ldGFkYXRhXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2V7XG4gICAgLy9pbmplY3QgdGhlIGh0dHAgc2VydmljZVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7XG5cbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlcygpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZXMnKS5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IG1zZ0FycmF5OiBNZXNzYWdlW10gPSBbXTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBleHRyYWN0ZWQuZGF0YSl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGVsZW1lbnQuaWQsZWxlbWVudC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBtc2dBcnJheS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnQXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIG1zZ0FycmF5O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcbiAgICAgICAgY29uc3QganNvbkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJyxib2R5LHtoZWFkZXJzOiBqc29uSGVhZGVyc30pO1xuICAgIH1cbiAgICBcbn1cbiJdfQ==
