alert(
  "HOLA BIENVENIDO A UNA BETA DE GOOGLE AVISO ESTO NO ES UNA PAGINA OFICIAL SOLO SE USA EN TERMINOS EDUCATIVOS GRACIAS"
);
alert(
  "Porfavor antes de ingresar se le hara unas preguntas en forma de creacion de cuenta"
);
function redtard() {
  let id;
  id =
    prompt(`¿Te gusto esta forma de crear cuenta? (escribe 'salir' sino quieres contestar)
// * Excelente
// * Me gusta
// * No me gusta
// * Horrible`);
  switch (id) {
    case `Excelente`:
      alert(`${nombre} elegiste ${id} Muchas gracias!!`);
      break;
    case `Me gusta`:
      alert(`${nombre} elegiste ${id} Perdon proximamente lo mejoraremos`);
      break;
    case `No me gusta`:
      alert(`${nombre} elegiste ${id} Perdon seremos mejores`);
      break;
    case `Horrible`:
      alert(`${nombre} elegiste ${id} Pues lo lamento mejoraremos`);
      break;
    default:
      alert(
        `${nombre} no inventes, que te pensas que estas en "HotmailFake" o "TwitterFake"`
      );
  }
  while (id != `salir`);
}
let nombre = prompt(`¿Cuál es tu nombre?`);
for (let i = 1; i <= 3; i++) {
  if (!isNaN(nombre)) {
    nombre = prompt(`Pregunté ¿cuál es tu nombre?
      (tienes 3 intentos y llevas ${i})`);
  }
}

let apellido = prompt(`¿Cuál es tu apellido?`);
for (let i = 1; i <= 3; i++) {
  if (!isNaN(apellido)) {
    apellido = prompt(`Pregunté ¿cuál es tu apellido?
      (tienes 3 intentos y llevas ${i})`);
  }
}
alert(`Hola ${nombre} ${apellido} porfavor ingrese su edad`);
let edad = prompt(`¿Cuál es tu edad?`);

if (edad == "") {
  alert(
    "TU EDAD NO HA SIDO REGISTRADA PORFAVOR REALIZE DE VUELTA EL FORMULARIO"
  );
} else if (edad < 18) {
  alert("Tu edad  es inadecuada");
} else {
  alert("Felicidades tu edad es la adecuada");
  alert("Ahora se te realizara una cuenta");
  alert(`Tu gmail es ${nombre}${apellido}@gmail.com`);

  let contrasena = prompt("Ingresa una contraseña");
  for (let i = 1; i <= 3; i++) {
    if (!isNaN(contrasena)) {
      contrasena = prompt(`Ingresa una contraseña
        (tienes 3 intentos y llevas ${i})`);
    }
  }
  if ((contrasena = "")) {
    alert(
      "No ingresaste contraseña por esta accion se le cancelera el progreso de cuenta"
    );
  } else {
    alert("Bienvenido a googleFAKE PD: Despues de la encuesta siguiente no se porque se cuelga la pagina");
    redtard();
    stop;
  }
}
alert("Adios - si no pudiste crear tu cuenta reinicia la pagina")