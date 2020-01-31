class Cohete {
  codigo: string;
  propulsores: Propulsor[] = new Array();

  constructor(codigo: string) {
    this.codigo = codigo;
  }

  addPropulsor(propulsor: Propulsor): void {
    this.propulsores.push(propulsor);
  }
}
