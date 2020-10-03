/*
 *
 *
 *  OJO TODO ESTO SE PUEDE REALIZAR
 *
 *
 *
 * */

//LOS EVENTOS

function saludo() {
  alert("WELCOME TO VIRTUAL PIANO!!");
}

let keys_code = [
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "w",
  "e",
  " ", // EL ESPACIO EN BLANCO ES PARA REORDENAR Y HACER CONINCIDIR LAS LETRAS
  "t",
  "y",
  "u",
];

//

//

document.addEventListener("keypress", function (event) {
  let busqueda = event.key.toLowerCase(); //Esto es para alamacenar la letra o key que se quiere buscar en el array
  let posicion = keys_code.indexOf(busqueda); //Esto almacenara la posicion de la letra o key dentro del array
  let keyChange = document.querySelectorAll("kbd");
  let keyPo = keyChange[posicion]; //

  if (keys_code.includes(busqueda)) {
    //

    let x = new Audio(`resource/${event.key.toLowerCase()}.mp3`); // crear un objeto de audio,

    keyPo.classList.add("keyUp"); //Se le pone la clase KeyUp a la letra correcta por que se dertimon gracias a la posicion dentro del array
    return x.play(); //Reproduce el sonido de las letras.
  } else {
    alert("The " + event.key.toUpperCase() + " Not is correct!!. ");
    let x = new Audio("resource/Error.mp3");
    return x.play();
  }
});

document.addEventListener("keyup", function (event) {
  if (keys_code.includes(event.key.toLowerCase())) {
    let keyChange = document.querySelectorAll("kbd");

    let busqueda = event.key.toLowerCase();
    let posicion = keys_code.indexOf(busqueda);
    let keyPo = keyChange[posicion];

    keyPo.classList.remove("keyUp");
  }
});
