"use strict";
var rocket1;
var rocket2;
// datos
var codigo1 = "32WESSDS";
var codigo2 = "LDSFJA32";
var potenciaMax1 = [10, 30, 80];
var potenciaMax2 = [30, 40, 50, 50, 30, 10];
var potenciaActial;
var x;
// let velocidad2: number;
// Los botones para crear cohetes
function crearCohete(x) {
    if (x == 1) {
        rocket1 = new Cohete(codigo1);
        crearPropulsores(rocket1, potenciaMax1);
        calcularVelocidad(rocket1);
        console.log(rocket1);
    }
    else if (x == 2) {
        rocket2 = new Cohete(codigo2);
        crearPropulsores(rocket2, potenciaMax2);
        calcularVelocidad(rocket2);
        console.log(rocket2);
    }
}
// arrancar los botones de la aceleracion
function acelerarCohete(x) {
    if (x == 1) {
        if (rocket1 == undefined) {
            alert("Primero tienes que crear un cohete!");
        }
        else {
            acelerar(rocket1);
            calcularVelocidad(rocket1);
            console.log(rocket1);
        }
    }
    else if (x == 2) {
        if (rocket2 == undefined) {
            alert("Primero tienes que crear un cohete!");
        }
        else {
            acelerar(rocket2);
            calcularVelocidad(rocket2);
        }
    }
}
// arrancar los botones de la imprecion
function printInfo(x) {
    if (x == 1) {
        if (rocket1 == undefined) {
            alert("Primero tienes que crear un cohete!");
        }
        else {
            print(rocket1);
        }
    }
    else if (x == 2) {
        if (rocket2 == undefined) {
            alert("Primero tienes que crear un cohete!");
        }
        else {
            print(rocket2);
        }
    }
}
// function para crear propulsores
function crearPropulsores(rocket, potenciaMax) {
    for (var i = 0; i < potenciaMax.length; i++) {
        rocket.addPropulsor(new Propulsor(potenciaMax[i]));
    }
}
// punction para imprimir los datos
function print(rocket) {
    var printPotenciaMax = [];
    for (var i = 0; i < rocket.propulsores.length; i++) {
        printPotenciaMax.push(rocket.propulsores[i].potenciaMax);
    }
    document.getElementById("info").innerText =
        "Cohete " +
            rocket.codigo +
            " tiene " +
            rocket.propulsores.length +
            " propulsores: " +
            printPotenciaMax;
}
// funcion de aceleracion
function acelerar(rocket) {
    for (var i = 0; i < rocket.propulsores.length; i++) {
        if (rocket.propulsores[i].potenciaMax > rocket.propulsores[i].potenciaActual) {
            rocket.propulsores[i].potenciaActual += 10;
        }
    }
}
// funcion para calcular velocidad actual
function calcularVelocidad(rocket) {
    var potencia_total = 0;
    for (var i = 0; i < rocket.propulsores.length; i++) {
        potencia_total += rocket.propulsores[i].potenciaActual;
    }
    console.log(potencia_total);
}
