import { Injectable } from '@angular/core';

// This will provide the same instance of the service to the entire application.
// @Injectable({providedIn: 'root'})
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    console.log(message);
    console.log(this.lastlog);
    this.lastlog = message;
  }
}
