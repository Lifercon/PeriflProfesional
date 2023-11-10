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
var array_tex =["lunes", "martes","miercoles","jueves","viernes","sabado","domingo"];
var array_mix =[1, "a",2,"c"];
var array_mul =[
    {name:"Wilder", last_name:"Contreras", age:"31"},
    {name:"Liceth", last_name:"Duarte", age:"32"},
    {name:"Karen", last_name:"Bayona", age:"31"},
    {name:"Ana", last_name:"perez", age:"31"}
];
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

// operadores logicos y estructuras condicionales(Inverse,Incremento y Decremento)
// AND && con if -Ampersan
var bool =false;
var numeric = 10;
if(!bool && numeric == "10"){
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}
// OR || con if
if(!bool || numeric ==7){
   console.log("ENTRA IF");
   numeric+=3;
}else{
    console.log("ENTRA ELSE");
    numeric--;
}
console.log(numeric);
// FOR
for(let j = 0; j<array_tex.length; j++){
     console.log(array_tex[j] + (j+1));
}

// WHILE
let f=0;
while(f<array_tex.length){
     console.log(array_tex[f]+(f+1));
     f++;
}
// DO WHILE
let m=0;
do{
    console.log(array_tex[m] + (m+1));
    m++;
}while(m<array_tex.length);


// FUNCIONES Y EVENTOS
function load_page(){
    // alert("LA PAGINA SE HA CARGADO CORRECTAMENTE")
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getMinutes());
    for(let j=0; j<array_mul.length;j++){
        console.log(array_mul[j].name);
    }
}
function validate(){
    let nombres = document.getElementById("nombres"); 
    let nombres_style = document.getElementById("nombres"); 
    // console.log(nombres);
    if(nombres.value.length > 2){
        nombres_style.style.border = "2px solid green";
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
        // alert(nombres.toUpperCase());
        // alert(nombres.toLowerCase());
        // alert(nombres.charAt());
        // alert(nombres.indexOf(l));
        // alert(nombres.lastIndexOf(e));
        // alert(nombres.split(" "));

    }
}


function change_color(){
    document.body.style.backgroundColor = "red"
    document.body.style.color = "#fff"
}

const btn_limpiar = document.querySelector("#clear_color");
clear_color.addEventListener("dblclick", ()=>{
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#000"
})
// Registro foformulario
const form_register = document.getElementById("form_register");
const nombres       =document.getElementById("nombres");
const apellidos     =document.getElementById("apellidos");
const information   =document.getElementById("information");

form_register.addEventListener("submit", name_event =>{
    name_event.preventDefault();
    let info="";
    // console.log(nombres.value);
    if(nombres.value.length <= 2 || apellidos.value.length <=2){
       info +="NOMBRES Y/0 APELLIDOS INVALIDOS"
       information.style.color ="red";
    }else{
        alert(nombres.value + " " + apellidos.value);
    }
    information.innerText =info;
})
