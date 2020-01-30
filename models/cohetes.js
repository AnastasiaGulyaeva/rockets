"use strict";
var Cohete = /** @class */ (function () {
    function Cohete(codigo) {
        this.propulsores = new Array();
        this.codigo = codigo;
    }
    Cohete.prototype.addPropulsor = function (propulsor) {
        this.propulsores.push(propulsor);
    };
    return Cohete;
}());
