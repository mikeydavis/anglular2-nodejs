///<reference path="../../typings.d.ts"/>

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Message } from "./message.model";
import 'rxjs/Rx';

@Injectable()// metadata
export class MessageService{
    //inject the http service
    constructor(private http: Http){

    }

    getMessages(): Observable<any>{
        return this.http.get('http://localhost:3000/messages').map(data => {
            const extracted = data.json();
            const msgArray: Message[] = [];
            let message;
            for (let element of extracted.data){
                message = new Message(element.id,element.content);
                msgArray.push(message);
            }
            console.log(msgArray);
            return msgArray;
        });
    }

    saveMessage(message: Message) {
        const body = JSON.stringify(message);
        const jsonHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message',body,{headers: jsonHeaders});
    }
    
}
