///<reference path="../../typings.d.ts"/>

import { Component, OnInit } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";


export class Hero{
    id:number;
    name:string;
}


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [MessageService]
})
export class AppComponent implements OnInit  {
    
    constructor(private messageService: MessageService){ }

    messages: Message[] = [
        new Message('121','test')
    ];

    hero: Hero = {
            id: 1,
            name: 'Mike'
        };


    ngOnInit(){
        //returns an observable
        this.messageService.getMessages()
        .subscribe(
            messages => this.messages = messages,
            error => console.error(error)
        );
    }

    addTest(mvalue){
        console.log('add test' + mvalue);
        const rnd = Math.ceil(Math.random() * 100);
        const message = new Message('134',mvalue);
        this.messages.push(message);

        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Sucess'),
                error => console.error(error)
            );
    }

    onAddMessage(){
        const rnd = Math.ceil(Math.random() * 100);
        const message = new Message('134',rnd + ' is a great number');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Sucess'),
                error => console.error(error)
            );
    }

    onDelete(value){

        console.log(value);
        const editmessage = new Message(value.id, value.content);
        
    }

    onEdit(value){
        console.log(value);
        Hero


        
    }

}