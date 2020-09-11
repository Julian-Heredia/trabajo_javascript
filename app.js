// ********** DECLARACION DE VARIABLES *********
// console.log("Hello world");
// document.write("Hello world");
//alert("Hello world");
//var nombre = 'Juan';
//var nombre = "Pedro";
//let apellido = "Zabala";

// console.log(nombre);
const pi = 3.1415;
// pi = 4;
let age = 25;
if(age > 20)
{
    let isAdult = true;
    isAdult = false;
    if (!isAdult) 
    {
        console.log(isAdult);
        console.log(age);
    }
    console.log(age);
}
console.log(age);
// console.log(isAdult);

// function comer()
// {
//   var comida  = "Pasta";
//   return comida;
// }
// console.log(comida)

// ********* TEMPLATE STRINGS **********
country = "Colombia";
city = "Medellin";
console.log("El pais es: " + country + " y la ciudad es: " + city);
// USING TEMPLATE STRINGS
console.log(`El pais es: ${country} y la ciudad es: ${city}`);
document.write(`<h1>${country}</h1>`);

// ************** FUNCIONES ************
// basic function
function saludar()
{
    console.log("Hello Everybody");
}

//return parameters
function value()
{
    return 3.1415;
}
let data = value();
saludar();
console.log(data);

//function with parameters
function person(name, lastname, age, telephone = 0)
{
    console.log(`La persona se llama: ${name} ${lastname}, tiene una edad de 
    ${age} y su telefono es: ${telephone}`);
    const message = `La persona se llama: ${name} ${lastname}, tiene una edad de 
    ${age} y su telefono es: ${telephone}`
    return message;
}
let infoPerson = person("Rosalba", "Perez", 45, 1232323);
// person("Rosalba", "Perez", 45, 1232323);

// ********* ARROW FUNCTIONS *********
const language = ()=>console.log("javascript");
const languages = ()=>{
    console.log("test1");
    console.log("test2");
}
languages();

const people = (name, lastname, age, telephone = 0)=>{
    const message = `La persona se llama: ${name} ${lastname}, tiene una edad de 
    ${age} y su telefono es: ${telephone}`
    return message;
}
let dataPeople = people("Juan", "Zabala", 26, 123456789);

//repasar arreglos, function map, filter
// CSS (Flexbox)