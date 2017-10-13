import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = null;
  PSTbool = false
  MSTbool = false
  CSTbool = false
  ESTbool = false

  ShowPST() {
    this.time = Date.now()
    this.PSTbool = true
    this.MSTbool = false
    this.CSTbool = false
    this.ESTbool = false
  }
  ShowMST() {
    this.time = new Date();
    this.time.setHours(this.time.getHours() + 1);
    this.PSTbool = false
    this.MSTbool = true
    this.CSTbool = false
    this.ESTbool = false
  }
  ShowCST() {
    this.time = new Date();
    this.time.setHours(this.time.getHours() + 2);
    this.PSTbool = false
    this.MSTbool = false
    this.CSTbool = true
    this.ESTbool = false
  }
  ShowEST() {
    this.time = new Date();
    this.time.setHours(this.time.getHours() + 3);
    this.PSTbool = false
    this.MSTbool = false
    this.CSTbool = false
    this.ESTbool = true
  }
  
  Clear() {
    this.time = null;
    this.PSTbool = false
    this.MSTbool = false
    this.CSTbool = false
    this.ESTbool = false
  }
}