import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomColors = randomGen()
}

function randomGen() {
  var randomColors = ["AntiqueWhite", "Chartreuse", "Chocolate", "Cyan", "DarkGreen", "DarkOrchid", "DeepPink", "Fuchsia", "Gold", "Red"]
  for (var i=randomColors.length-1; i > 0; i--) {
    let index = Math.floor(Math.random()*i) + 1;
    let temp = randomColors[i];
    randomColors[i] = randomColors[index];
    randomColors[index] = temp;
  }
  let x = Math.floor(Math.random()*randomColors.length-1) + 1;
  let temp = randomColors[x];
  randomColors[x] = randomColors[0];
  randomColors[0] = temp;
  return randomColors;
}