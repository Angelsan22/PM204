

console.log("Hola Mundo JS desde el servidor")

/* Promedio 2 variables*/
let edad1= 11
let edad2= 33
console.log("Edad promedio")
console.log((edad1+edad2)/2)

/* Medir tiempo de procesos */
console.time("miProceso")
    
    for(let i=0; i<50000; i++){}

console.timeEnd("miProceso")


/* objetos tipo tabla  */
let usuarios=[
    {nombre: "Angel", edad: "22"},
    {nombre: "Isay", edad: "38"},
]

console.table(usuarios)