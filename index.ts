// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  //<- OK!!!
  nombreDepto: string;
  constructor(argDepa: string) {
    this.nombreDepto = argDepa;
  }
  getName() {
    return this.nombreDepto;
  }
}

class Piso {
  // <- OK!!!
  nombre: string;
  departamentos: Departamento[];
  constructor(argPiso: string, departamentos?: Departamento[]) {
    this.nombre = argPiso;
    this.departamentos = departamentos;
  }
  pushDepartamento() {
    // agrega deptos
    const arrayDeDeptos = [];
    arrayDeDeptos.push(
      this.departamentos.map((p) => {
        return p.getName();
      })
    );
    return arrayDeDeptos;
  }
  getDepartamentos() {
    // obtener listado completo de deptos
    return this.pushDepartamento();
  }
}

class Edificio {
  pisos: Piso[];
  constructor(argEdif: Piso[]) {
    this.pisos = argEdif;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    // agrega un depto al piso indicado, si no existe el piso debe mostrar error
    const arrayNombresDePisos = this.pisos.map((e) => {
      return e.nombre;
    });
    if (arrayNombresDePisos.includes(nombreDePiso)) {
      //chequear!!!
      this.pisos.map((x) => {
        x.nombre = nombreDePiso;
        // x.pushDepartamento();
        console.log(x.nombre);

        // x.departamentos = departamento.getName();
        // return x.pushDepartamento();
      });
    } else {
      throw Error;
    }
  }
  getDepartamentosByPiso(nombreDePiso: string) {
    // debe devolver todas clases Departamento(s) de un piso
    const arrayNombresDePisos = this.pisos.map((e) => {
      return e.nombre;
    });
    if (arrayNombresDePisos.includes(nombreDePiso)) {
      this.pisos.map((f) => {
        return f.departamentos;
      });
    }
  }
}

// no modificar este test
// function testClaseEdificio() {
//   const unPiso = new Piso("planta baja");
//   const otroPiso = new Piso("primer piso");
//   const unEdificio = new Edificio([unPiso, otroPiso]);
//   const deptoUno = new Departamento("depto uno");
//   const deptoDos = new Departamento("depto dos");
//   const deptoTres = new Departamento("depto tres");
//   unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
//   unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
//   unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

//   const deptos = unEdificio.getDepartamentosByPiso("planta baja");
//   const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

//   if (
//     Array.isArray(deptosEmpty) &&
//     deptosEmpty.length == 0 &&
//     deptos.length == 3 &&
//     deptos[2].getName() == "depto tres"
//   ) {
//     console.log("testClaseBandaApartment passed");
//   } else {
//     throw "testClaseBandaApartment not passed";
//   }
// }

function main() {
  //   testClaseEdificio();
  const unDepto = new Departamento("A");
  const otroDepto = new Departamento("F");
  const unPiso = new Piso("Primer piso");
  const unEdificio = new Edificio([unPiso]);
  console.log(unEdificio.addDepartamentoToPiso("Primer piso", unDepto));
  //   console.log(unEdificio.getDepartamentosByPiso("Primer piso"));
}
main();
