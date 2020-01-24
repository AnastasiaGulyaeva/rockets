"use strict";
var Cohete = /** @class */ (function () {
    function Cohete(codigo, propulsores) {
        this.codigo = codigo;
        this.propulsores = propulsores;
    }
    return Cohete;
}());
var cohete1 = new Cohete("32WESSDS", 3);
var cohete2 = new Cohete("LDSFJA32", 6);
console.log("Cohete " + cohete1.codigo + " tiene " + cohete1.propulsores + " propulsores");
console.log("Cohete " + cohete2.codigo + " tiene " + cohete2.propulsores + " propulsores");
