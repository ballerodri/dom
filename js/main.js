alert("Se listaran las reservas de la semana en la consola de forma ordenada por día");

const reservas = [
  { dia: 'Lunes', nombre: 'Lucas' , horario: 15 }, 
  { dia: 'Lunes', nombre: 'Diego' , horario: 14 },
  { dia: 'Viernes', nombre: 'Sebastian' , horario: 17 },
  { dia: 'Martes', nombre: 'Ariel' , horario: 16 },
  { dia: 'Martes', nombre: 'Joaquin' , horario: 15 },
  { dia: 'Miercoles', nombre: 'Giuliana' , horario: 14 },
  { dia: 'Miercoles', nombre: 'Ariel' , horario: 16 },
  { dia: 'Miercoles', nombre: 'Candela' , horario: 15 },
  { dia: 'Viernes', nombre: 'Alvaro' , horario: 14 },
  { dia: 'Lunes', nombre: 'Fernando' , horario: 16 },
  { dia: 'Viernes', nombre: 'Sandra' , horario: 15 },
  { dia: 'Martes', nombre: 'Juan' , horario: 14 },
  
];

reservas.sort((a, b) => {
  let fa = a.dia.toLowerCase(),
      fb = b.dia.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});

document.write("<h1>RESERVAS</h1>")
document.write('<div id="p1">')


reservas.forEach((c) => {
  document.open("text/html","replace")
  document.write(`<p> Dia: ${c.dia}, Nombre: ${c.nombre}, Horario: ${c.horario} <\p>`)
  document.close()
});

document.write("</div>")
document.close()
