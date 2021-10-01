// crear las clases Edificio, Piso y Departamento aquí
class Piso {
  nombre: string;
  departamentos: Departamento[];
  constructor(nomPiso: string) {
    this.nombre = nomPiso;
    this.departamentos = [];
  }
  pushDepartamento(depto: Departamento) {
    return this.departamentos.push(depto);
  }
  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}

class Departamento {
  nombreDepto: string;
  constructor(nomDepto: string) {
    this.nombreDepto = nomDepto;
  }
  getName() {
    return this.nombreDepto;
  }
}

class Edificio {
  pisos: Piso[];
  constructor(argEdif: Piso[]) {
    this.pisos = argEdif;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.pisos.find((a) => a.nombre == nombreDePiso);
    return pisoEncontrado.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const pisoEncontrado = this.pisos.find((a) => a.nombre == nombreDePiso);
    return pisoEncontrado.getDepartamentos();
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("un cambio para el github");
}
main();
