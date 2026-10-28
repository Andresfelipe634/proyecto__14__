flatpickr("#fecha-nacimiento", {});



  // con esto le decimos a java que vamos a utilizar luxon
    const DateTime = luxon.DateTime;


//atrapamos el boton y la caja de texto en variables
const btnCalcular = document.querySelector("#btn-calcular");
const inputFecha = document.querySelector("#fecha-nacimiento");


//con esto el boton escucha el click 
btnCalcular.addEventListener("click", () => {


    // con esto extraemos el valor de la fecha que esta dentro de la caja de texto 
    const fechaSeleccionada = inputFecha.value; // con value guardamos lo que esta en la caja de texto



    // con esto nos aseguramos que el programa falle con el campo vacio 
   if(fechaSeleccionada === "") {
    alert("Por favor, selecciona tu fecha de nacimiento");
    return; // con esto detiene el codigo 
   }

   // con esto convertimos el texto plano en un objeto de fecha matematico de luxon 
   const fechaNaciminento = DateTime.fromISO(fechaSeleccionada);


   //le pedimos a luxon la fecha y hora de este preciso instante 
   const fechaActual= DateTime.now();


   //hacemos la resta le pedimos a luxon que nos de la diferencia en años , mese, dias 
   
   const edadExacta = fechaActual.diff(fechaNaciminento,['years', 'months', 'days']).toObject ();//diff significa resta 

   

   // extraemos los numeros y le quitamos los decimales

   const anos = edadExacta.years;
   const meses = edadExacta.months;
   const dias = Math.floor(edadExacta.days);


   // atrapamos el parrafo vacio que dejamos en el html 

   const parrafoResultado = document.querySelector("#resultado")

   // usamos comillas invertidas para mezclar texto y variables

   parrafoResultado.textContent= `Tienes ${anos} años, ${meses} meses y ${dias} dias`;
})