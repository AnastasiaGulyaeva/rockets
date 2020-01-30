class Cohete {
  codigo: string;
  propulsores: Propulsor[] = new Array();

  constructor(codigo: string) {
    this.codigo = codigo;
  }

  addPropulsor(propulsor: Propulsor): void {
    this.propulsores.push(propulsor);
  }

  // get potenciaActual() {
  //   for (let i = 0; i < this.propulsores.length; i++) {
  //     this._potenciaActual += this.propulsores[i];
  //   }
  // }

  // set potenciaActual(value) {
  //   this._potenciaActual = value;
  // }
}
