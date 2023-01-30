import { Component, OnInit } from '@angular/core';
//import *as io from 'socket.io-client';
import * as socketIo from 'socket.io';
const SOCKET_ENDPOINT = 'localhost:9000';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {


  socket:any;
  message!: string;
   constructor() { }
   ngOnInit() {
     this.setupSocketConnection();
   }
   //set connection
    setupSocketConnection()
    {
     this.socket = this.socket(SOCKET_ENDPOINT);
     this.socket.on('message-broadcast', (data: string) => {
     if (data) {
      const element = document.createElement('li');
      element.innerHTML = data;
      element.style.background = 'white';
      element.style.padding =  '15px 30px';
      element.style.margin = '10px';
     // document.getElementById('message-list').appendChild(element);
      }
    });
  }


 //send message
        SendMessage() {
         this.socket.emit('message', this.message);
         const element = document.createElement('li');
         //element.innerHTML = this.message;
         element.style.background = 'white';
         element.style.padding =  '15px 30px';
         element.style.margin = '10px';
         element.style.textAlign = 'right';
         //document.getElementById('message-list').appendChild(element);
         this.message = '';
      }
     }
