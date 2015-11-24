"use strict";
 
//for (let i = 1 ; i < 3 ; i++) {
//    let pokemon`${i}` = new Pokepanel(i);
//    pokemon`${i}`.parent = this;
//}
  
let pokemon1 = new Pokepanel(1);
let pokemon2 = new Pokepanel(2);
pokemon1.parent = this;
pokemon2.parent = this;

let output = document.getElementById('outputBox');

function updateOutput() {
    if (pokemon1.mon.speed > pokemon2.mon.speed) {
        output.value = `${pokemon1.mon.name} outspeeds ${pokemon2.mon.name}`;
    } else if (pokemon1.mon.speed > pokemon2.mon.speed)
        output.value = `${pokemon2.mon.name} outspeeds ${pokemon1.mon.name}`;
    else
        output.value = `Speed tie!`;
}

updateOutput();