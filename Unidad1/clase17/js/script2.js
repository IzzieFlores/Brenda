const parrafo = document.getElementById("demo");

let text = "";

// for(let i = 0; i < 10; i++) {
    // text += i + "<br>";
// }
 
// parrafo.innerHTML = text;

// parrafo.textContent = text;


const estaciones = ["primavera", "otoño", "invierno", "verano"];

for (let i = 0; i<estaciones.length;i++){
    text += estaciones[i] + "<br>" + `<img src="./img/images${i}.jpg">` + "<br>";
}

parrafo.innerHTML = text;