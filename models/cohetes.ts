class Cohete {
  codigo: string;
  propulsores: number;

  constructor(codigo: string, propulsores: number) {
    this.codigo = codigo;
    this.propulsores = propulsores;
  }
}

var cohete1 = new Cohete("32WESSDS", 3);
var cohete2 = new Cohete("LDSFJA32", 6);
console.log(
  "Cohete " + cohete1.codigo + " tiene " + cohete1.propulsores + " propulsores"
);
console.log(
  "Cohete " + cohete2.codigo + " tiene " + cohete2.propulsores + " propulsores"
);
