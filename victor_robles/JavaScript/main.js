var nombre="Bryan Steven";
var apellido="Zamora Litardo";
document.write(nombre+" "+apellido);

var text=document.getElementById("text");

for(var i=0;i<10;i++){
    text.innerHTML+=`<h1>Hola${i}</h1>`;
}

alert("Hola Mundo")