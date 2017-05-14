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
var core_1 = require('@angular/core');
var message_model_1 = require("./message.model");
var message_service_1 = require("./message.service");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.messages = [
            new message_model_1.Message('121', 'test')
        ];
        this.hero = {
            id: 1,
            name: 'Mike'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //returns an observable
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.addTest = function (mvalue) {
        console.log('add test' + mvalue);
        var rnd = Math.ceil(Math.random() * 100);
        var message = new message_model_1.Message('134', mvalue);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Sucess'); }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.onAddMessage = function () {
        var rnd = Math.ceil(Math.random() * 100);
        var message = new message_model_1.Message('134', rnd + ' is a great number');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Sucess'); }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.onDelete = function (value) {
        console.log(value);
        var editmessage = new message_model_1.Message(value.id, value.content);
    };
    AppComponent.prototype.onEdit = function (value) {
        console.log(value);
    };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUM7SUFFdkIsQ0FBQztJQS9ETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7O29CQUFBO0lBNERGLG1CQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNEWSxvQkFBWSxlQTJEeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlLm1vZGVsXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBIZXJve1xuICAgIGlkOm51bWJlcjtcbiAgICBuYW1lOnN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpeyB9XG5cbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW1xuICAgICAgICBuZXcgTWVzc2FnZSgnMTIxJywndGVzdCcpXG4gICAgXTtcblxuICAgIGhlcm86IEhlcm8gPSB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdNaWtlJ1xuICAgICAgICB9O1xuXG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICAvL3JldHVybnMgYW4gb2JzZXJ2YWJsZVxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1lc3NhZ2VzID0+IHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcyxcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkVGVzdChtdmFsdWUpe1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRlc3QnICsgbXZhbHVlKTtcbiAgICAgICAgY29uc3Qgcm5kID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoJzEzNCcsbXZhbHVlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2F2ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1N1Y2VzcycpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQWRkTWVzc2FnZSgpe1xuICAgICAgICBjb25zdCBybmQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnMTM0JyxybmQgKyAnIGlzIGEgZ3JlYXQgbnVtYmVyJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zYXZlTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3VjZXNzJyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25EZWxldGUodmFsdWUpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgY29uc3QgZWRpdG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSh2YWx1ZS5pZCwgdmFsdWUuY29udGVudCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uRWRpdCh2YWx1ZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBcbiAgICB9XG5cbn0iXX0=
