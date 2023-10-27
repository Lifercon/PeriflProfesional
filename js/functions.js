// alert("FUNCTION ACTIVO");
// ######### tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul =2.54;
// var para variables globales
var days = 10;
var name = "Liceth Contreras";
// let para variables de bloqueo o locales
let count = 1;

// ############## formas de impresion
// alert
// alert(name);
// console.log
console.log(name);
// body -pantalla
document.write(name + " # Liceth Contreras");
document.getElementById("box_one").innerHTML = "<h1> Liceth Contreras</h1>" ;
document.getElementById("box_two").innerText = "<h1> Liceth Contreras</h1>" ;
// librerias
// Swal.fire({
//     icon: 'error',
//     showConfirmButton: false,
//     title: name,
//     text: name,
//     footer: "footer: " +name,
//     background: 'write',
//     position: 'top-start'
// });
// tipos de datos numericos
var number_one = 20;
var number_two = 5.5;
// Text
var class_type = "Electiva Tecnica 1";
// Booleanos
var boolean = true; // false 
// arrays -vectores
var array_num =[ 1,2,3,4,5,];
var array_tex =["lunes", "martes","miercoles"];
var array_mix =[1, "a",2,"c"];
var array_mul =[
    {name:"Wilder", last_name:"Contreras", age:"31"},
    {name:"Liceth", last_name:"Duarte", age:"32"},
    {name:"Karen", last_name:"Bayona", age:"31"},
    {name:"Ana", last_name:"perez", age:"31"},

]
// ######### operadores basicos
// suma
var suma = number_one +number_two;
console.log("Suma = "+suma);
// resta
var resta =number_one - number_two;
console.log("Resta = "+resta);
// multiplicacion
var multi =number_one*number_two;
console.log("Multiplicacion= "+multi);
// division
var divi =number_one / number_two;
console.log("Division = "+divi.toFixed(2));
// modulo
var modulo =number_one % number_two;
console.log("Modulo = "+modulo);

