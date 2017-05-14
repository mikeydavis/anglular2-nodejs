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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7Ozs7Ozs7Ozs7O0FBRXpDLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFFeEQsOEJBQXdCLGlCQUFpQixDQUFDLENBQUE7QUFDMUMsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFFOUIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQzNELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixJQUFNLFFBQVEsR0FBYyxFQUFFLENBQUM7WUFDL0IsSUFBSSxPQUFPLENBQUM7WUFDWixHQUFHLENBQUMsQ0FBZ0IsVUFBYyxFQUFkLEtBQUEsU0FBUyxDQUFDLElBQUksRUFBZCxjQUFjLEVBQWQsSUFBYyxDQUFDO2dCQUE5QixJQUFJLE9BQU8sU0FBQTtnQkFDWixPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFnQjtRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sV0FBVyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUMsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQXpCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBMkJiLHFCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxzQkFBYyxpQkEwQjFCLENBQUEiLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy5kLnRzXCIvPlxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlLm1vZGVsXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpLy8gbWV0YWRhdGFcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZXtcbiAgICAvL2luamVjdCB0aGUgaHR0cCBzZXJ2aWNlXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcblxuICAgIH1cblxuICAgIGdldE1lc3NhZ2VzKCk6IE9ic2VydmFibGU8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlcycpLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgbXNnQXJyYXk6IE1lc3NhZ2VbXSA9IFtdO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGV4dHJhY3RlZC5kYXRhKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZWxlbWVudC5pZCxlbGVtZW50LmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIG1zZ0FycmF5LnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2dBcnJheSk7XG4gICAgICAgICAgICByZXR1cm4gbXNnQXJyYXk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBqc29uSGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnLGJvZHkse2hlYWRlcnM6IGpzb25IZWFkZXJzfSk7XG4gICAgfVxuICAgIFxufVxuIl19
