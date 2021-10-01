class Prueba {
  nombre: string;
  edad: number;
  constructor(name: string) {
    this.nombre = name;
    // this.edad = age;
  }
}

function main() {
  const unaPrueba = new Prueba("Luis");
  console.log(unaPrueba);
}

main();
