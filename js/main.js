

function suma() {
    let numero1 = 0;
    let numero2 = 0;
    let suma = 0;

    alert("Este algoritmo va a realizar la suma de dos valores que usted desea");

    numero1 = parseInt(prompt("Ingrese el primer valor"));
    numero2 = parseInt(prompt("Ingrese el segundo valor"));
    suma = numero1 + numero2;

    alert("El resultado de la suma de sus dos valores es: " + suma);
}


function operacionesBasicas(){
    // declaracion de variables
    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;

    let numero1 = 0;
    let numero2 = 0;

    alert("Operaciones basicas");
    numero1 = parseInt(prompt("Ingrese el primer valor"));
    numero2 = parseInt(prompt("Ingrese el segundo valor"));

    suma = numero1 + numero2;
    resta = numero1 - numero2;
    multiplicacion = numero1 * numero2;
    division = numero1 / numero2;

    alert("La suma es: " + suma + "\nLa resta es: " + resta + "\nLa multiplicacion es: " + multiplicacion + "\nLa divicion es: " + division);
}

const cuadradoNumero = () => {

    let cuadrado = 0;
    let numero = 0;

    alert("Ingresa un numero para hallarle su raiz cuadrada");
    numero = parseInt(prompt("Ingrese el numero que desea elevar a la 2"));

    cuadrado = numero **2;

    alert(`Raiz cuadrada de ${numero} es igual a: ${cuadrado}`);

}

function areaTriangulo(){
    // Declaracion de variables
    let altura = 0;
    let base = 0;
    let area = 0;

    if(!confirm("Desea calcular el area de un triangulo ")) return ;

    altura = parseInt(prompt("Ingrese la altura que tiene tu triangulo"));
    base = parseInt(prompt("Ingrese la base que tiene tu triangulo"));

    area = (base * altura) / 2;
    
    alert("El area de el triangulo es: " + area);

}

const numeroMayorDos = () => {
    // Declaracion de variables
    let numero1 = 0;
    let numero2 = 0;

    if(!confirm("Desea saber que numero mayor es que cual?")) return ;
    

    // Se solicitan datos al usuario
    numero1 = parseInt(prompt("Ingrese el primer valor"));
    numero2 = parseInt(prompt("Ingrese el segundo valor"));

    alert(`El numero mayor es ${Math.max(numero1, numero2)}`);
}

const convertirMedidas = () => {
 
    let metros = 0;
    let pulgadas = 0;
    let pies = 0;
    let kilometros = 0;

    // Se solicitan los datos
    if(!confirm("Deseas a convertir una medida en metros a pulgadas, pies y kilometros?")) return ;
    metros = parseInt(prompt("Ingrese la medida en metros que le gustaria convertir"));
    
    // Se realizan las operaciones
    pulgadas = metros * 39.37;
    pulgadas = pulgadas.toFixed(2);
    pies = metros * 3.28084;
    pies = pies.toFixed(2);
    kilometros = metros / 1000;

    alert("Tus " + metros + " metros son: " + pulgadas + " pulgadas" + "\nTus " + metros + " metros son: " + pies + " pies" + "\nTus " + metros + " metros son: " + kilometros + " kilometros");
}

const convertirTemperatura = () => {
    // Declaracion de variables
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    // Se solicitan los datos al usuario
    if(!confirm("Deseas convertir una temperatura de celsius a Fahrenheit y a Kelvin")) return ;
    celsius = parseInt(prompt("Ingrese la temperatura que desea convertir en celsius"));

    fahrenheit = ((celsius * 9) / 5) + 32;

    kelvin = celsius + 273.15;
    alert(`${celsius} grados celsius son : ${fahrenheit} grados farenheit y ${kelvin} grados kelvin`);
}

function promedioEstudiantes(){
    // Declaracion de variables
    let nombre = "";
    let materia = "";
    let nota = 0;
    let sumaNotas = 0;
    let promedio = 0;

    alert("Este evente te ayudara a calcular el promedio de tus notas")
    // Solicitamos los datos al usuario
    nombre = prompt("Hola ingresa tu nombre por favor");
    materia = prompt("Cual materia quieres calcular?");

    // For que me permite leer 10 notas y guardar la suma de estas en la variable sumaNotas
    for(i = 1; i < 10; i++){
        nota = parseInt(prompt("Ingresa la nota numero " + i));
        sumaNotas = sumaNotas + nota;
    }
    promedio = sumaNotas * 0.10;
    promedio = promedio.toFixed(2);

    // Mostramos resultado al usuario
    if(promedio >= 6){
        alert("Hola " + nombre + " Tu promedio de la materia " + materia + " es: " + promedio + "\nPor lo tanto APROBASTE " + materia)
    }else{
        alert("Hola " + nombre + " Tu promedio de la materia " + materia + " es: " + promedio + "\nPor lo tanto REPROBASTE " + materia)
    }

    
}

const descuentoCompra = () => {
    // Declaracion de variables
    let kilos = 0;
    let descuento = 0;
    let total =0;

    // Solicitud de datos al usuario
    alert("Este evento te ayudara a calcular el descuento que te corresponde en tu compra");
    kilos = parseInt(prompt("Ingrese la cuantos kilos que desea comprar"));

    // Se hace la validacion y el descuento correspondiente
    if(kilos <0){
        alert("Por favor ingrese una cantidad adecuada");
    }else if((kilos >= 0) && (kilos <= 2)){
        total = kilos * 4500;
        alert("Su total a pagar es de " + total + ", No aplica descuento");
    }else if ((kilos >= 3) && (kilos <= 5)){
        total = kilos * 4500;
        descuento = total * 0.10;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 10%");
    }else if((kilos >= 6) && (kilos <= 9)){
        total = kilos * 4500;
        descuento = total * 0.15;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 15%");
    }else{
        total = kilos * 4500;
        descuento = total * 0.20;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 20%");
    }

}

function parOImpar(){
    // Declaracion de variables
    let a = 0;

    // Se solicitan datos al usuario
    alert("Este evento te dira si el numero que ingresas es par o impar");
    a = parseInt(prompt("Ingrese un numero"));

    // Se hace el calculo
    if(a % 2 == 0){
        alert("El numero es PAR");
    }else{
        alert("El numero es IMPAR")
    }
}

function calcularSalario(){
    // Declaracion de variables
    let horasTrabajadas = 0;
    let horasExtras = 0;
    let sueldoExtras = 0;
    let sueldo = 0;

    // Se solicitan las horas trabajadas al usuario
    alert("Este evento te ayudara a calcular el salario semanal");
    horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas que trabajo en la semana"));

    // Se hace el calculo de todas las horas
    if(horasTrabajadas <= 40){
        sueldo = horasTrabajadas * 10000;
        alert("Usted trabajó " + horasTrabajadas + " horas por lo tanto su salario semanal es: " + sueldo); 
    }else{
        horasExtras = horasTrabajadas - 40;
        horasTrabajadas = horasTrabajadas - horasExtras;
        sueldoExtras = horasExtras * 20000;
        sueldo = ((horasTrabajadas * 10000) + sueldoExtras);
        alert("Usted trabajo " + horasExtras + " horas extras" +"\nUsted recibe " + sueldoExtras + " Por sus horas extras " + "\nPor lo tanto su salario total es: " + sueldo);
    }
}

function numeroMenor(){
    // Declaracion de variables
    let a = 0;
    let b = 0;
    let c = 0;

    // Se solicitan los datos al usuario
    alert("Este evento te mostra cual es el menor de tres numeros");

    a = parseInt(prompt("Ingresa el primer numero"));
    b = parseInt(prompt("Ingresa el segundo numero"));
    c = parseInt(prompt("Ingrese el tercer numero"));

    // Se realiza el calculo

    if((a == b) && (b == c)){
        alert("Los numero son iguales");
    }else if((a < b) && (a < c)){
        alert("El numero " + a + " Es el menor de los 3");
    }else if((b < a) && (b < c)){
        alert("El numero " + b + " Es el menor de los 3");
    }else{
        alert("El numero " + c + " Es el menor de los 3");
    }

}

