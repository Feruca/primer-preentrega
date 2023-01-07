const calcularVacaPorigual = (vacaTotal, cantidadPersonas) => { 
    return vacaTotal / cantidadPersonas
}

let cantidadPersonas = 0
let cuenta = 0
let pregunta = prompt("Desea calcular cuanto tiene que poner cada uno?(Si o No)").toLowerCase()
while(pregunta !== "si" && pregunta !== "sí" && pregunta !== "no"){
    pregunta = prompt("Desea calcular cuanto tiene que poner cada uno? SOLO SI O NO").toLowerCase()
}

if (pregunta === "si" || pregunta === "sí") {
    cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas"))
    cuenta = parseInt(prompt("Ingrese el monto de la cuenta"))
    alert("Cada uno tiene que poner: " + calcularVacaPorigual(cuenta, cantidadPersonas))
}else if(pregunta === "no"){
    alert("Esta bien, hasta luego:(")
}