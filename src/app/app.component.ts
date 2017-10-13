import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 list = Randomize();
 array = this.list[0]
 color = this.list[1]
 Turn(val, index){
    console.log(val)
    if (val == 'on') {
      this.array[index] = 'off';
      this.color[index] = 'green';
    } else {
      this.array[index] = 'on';
      this.color[index] = 'red';
    }
 }


}

function Randomize() {
  var array = ['on', 'on', 'on', 'on', 'on', 'off', 'off', 'off', 'off', 'off']
  var colorarray = ['red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green'] 
  for (var i=0; i<array.length; i++) {
    let index = Math.floor(Math.random()*i) + 1;
    let temp = array[i];
    let temp2 = colorarray[i];
    array[i] = array[index];
    colorarray[i] = colorarray[index];
    array[index] = temp;
    colorarray[index] = temp2;
  }
  let x = Math.floor(Math.random()*array.length-1) + 1;
  let temp = array[x];
  let temp2 = colorarray[x];
  array[x] = array[0];
  colorarray[x] = colorarray[0];

  return [array, colorarray]
}