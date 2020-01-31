let rocket1: Cohete;
let rocket2: Cohete;
let codigo1 = "32WESSDS";
let codigo2 = "LDSFJA32";
let potenciaMax1: number[] = [10, 30, 80];
let potenciaMax2: number[] = [30, 40, 50, 50, 30, 10];
let potenciaActial: number;
let x;
const info2 = <HTMLInputElement>document.getElementById("info2");

// Los botones para crear cohetes
function crearCohete(x: number) {
  if (x == 1) {
    rocket1 = new Cohete(codigo1);
    crearPropulsores(rocket1, potenciaMax1);
    calcularVelocidad(rocket1);
    console.log(rocket1);
  } else if (x == 2) {
    rocket2 = new Cohete(codigo2);
    crearPropulsores(rocket2, potenciaMax2);
    calcularVelocidad(rocket2);
    console.log(rocket2);
  }
}

// arrancar los botones de la aceleracion
function acelerarCohete(x: number) {
  if (x == 1) {
    if (rocket1 == undefined) {
      alert("Primero tienes que crear un cohete!");
    } else {
      acelerar(rocket1);
      calcularVelocidad(rocket1);
      console.log(rocket1);
    }
  } else if (x == 2) {
    if (rocket2 == undefined) {
      alert("Primero tienes que crear un cohete!");
    } else {
      acelerar(rocket2);
      calcularVelocidad(rocket2);
    }
  }
}

// arrancar los botones del freno
function breakRocket(x: number) {
  if (x == 1) {
    if (rocket1 == undefined) {
      alert("Primero tienes que crear un cohete!");
    } else {
      frenar(rocket1);
      calcularVelocidad(rocket1);
      console.log(rocket1);
      console.log(Cohete);
    }
  } else if (x == 2) {
    if (rocket2 == undefined) {
      alert("Primero tienes que crear un cohete!");
    } else {
      frenar(rocket2);
      calcularVelocidad(rocket2);
    }
  }
}

// arrancar los botones de la imprecion
function printInfo(x: number) {
  ocultarInfo2();
  if (x == 1) {
    if (rocket1 == undefined) {
      alert("Primero tienes que crear un cohete!");
    } else {
      print(rocket1);
    }
  } else if (x == 2) {
    if (rocket2 == undefined) {
      alert("Primero tienes que crear un cohete!");
    } else {
      print(rocket2);
    }
  }
}

// Arrancar boton para imprimir todos los cohetes
function printAll() {
  mostrarInfo2();
  if (rocket1 == undefined && rocket2 == undefined) {
    alert("Primero tienes que crear los cohetes!");
  } else if (rocket1 == undefined) {
    print2(rocket2);
  } else if (rocket2 == undefined) {
    print(rocket1);
  } else {
    print(rocket1);
    print2(rocket2);
  }
}

// function para crear propulsores
function crearPropulsores(rocket: Cohete, potenciaMax: number[]) {
  for (let i = 0; i < potenciaMax.length; i++) {
    rocket.addPropulsor(new Propulsor(potenciaMax[i]));
  }
}

// functiones para imprimir los datos
function print(rocket: Cohete) {
  let printPotenciaMax: number[] = [];
  for (let i = 0; i < rocket.propulsores.length; i++) {
    printPotenciaMax.push(rocket.propulsores[i].potenciaMax);
  }
  (<HTMLInputElement>document.getElementById("info")).innerText =
    "Cohete " +
    rocket.codigo +
    " tiene " +
    rocket.propulsores.length +
    " propulsores: " +
    printPotenciaMax;
}

function print2(rocket: Cohete) {
  let printPotenciaMax: number[] = [];
  for (let i = 0; i < rocket.propulsores.length; i++) {
    printPotenciaMax.push(rocket.propulsores[i].potenciaMax);
  }
  (<HTMLInputElement>document.getElementById("info2")).innerText =
    "Cohete " +
    rocket.codigo +
    " tiene " +
    rocket.propulsores.length +
    " propulsores: " +
    printPotenciaMax;
}

// funcion de aceleracion
function acelerar(rocket: Cohete) {
  for (let i = 0; i < rocket.propulsores.length; i++) {
    if (
      rocket.propulsores[i].potenciaMax > rocket.propulsores[i].potenciaActual
    ) {
      rocket.propulsores[i].potenciaActual += 10;
    }
  }
}

// funcion de freno
function frenar(rocket: Cohete) {
  for (let i = 0; i < rocket.propulsores.length; i++) {
    if (rocket.propulsores[i].potenciaActual > 0) {
      rocket.propulsores[i].potenciaActual -= 10;
    }
  }
}

// funcion para calcular velocidad actual
function calcularVelocidad(rocket: Cohete) {
  let potencia_total = 0;
  for (let i = 0; i < rocket.propulsores.length; i++) {
    potencia_total += rocket.propulsores[i].potenciaActual;
  }
  console.log(potencia_total);
  (<HTMLInputElement>document.getElementById("velocidad")).innerText =
    "Velocidad actual del cohete: " + potencia_total;
}

// funciones para mostrar/ocultar un div
function ocultarInfo2() {
  info2.style.display = "none";
}

function mostrarInfo2() {
  info2.style.display = "";
}
