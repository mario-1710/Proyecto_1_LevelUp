/**
 * Matriz 1
 */
 console.log("=====Matriz 1 del Ejercicio:======");
//Declaración de Variables
Mat1 = {"a":1 , "b":2, "c":3 };

//Seteando matrices
MatKeys = Object.keys(Mat1);
MatKeys = MatKeys.sort();
console.log("Keys Ordenadas: ",MatKeys);
MatValues = [];

Contador = 0;
//Recorrido por la Matriz principal para encontrar el valor correspondiente
for(Contador; Contador < MatKeys.length ; Contador++){
    Key = MatKeys[Contador];
    //console.log("Valor de Matkeys en la posicion(",Contador,") = ", Key);
    ValorKey = Mat1[Key];
    //console.log(ValorKey);
    MatValues[Contador]=ValorKey;
}
console.log("Valores: ",MatValues);


/**
 * Matriz 2
 */
 console.log("=====Matriz 2 del Ejercicio:======");
//Declaración de Variables
Mat2 = {"c":"Google", "a":"Apple" , "b":"Microsoft" };
console.log("Matriz 2: ", Mat2);
//Seteando matrices
MatKeys = Object.keys(Mat2);
MatKeys = MatKeys.sort();
console.log("Keys Ordenadas: ",MatKeys);
MatValues = [];

Contador = 0;
//Recorrido por la Matriz principal para encontrar el valor correspondiente
for(Contador; Contador < MatKeys.length ; Contador++){
    Key = MatKeys[Contador];
    //console.log("Valor de Matkeys en la posicion(",Contador,") = ", Key);
    ValorKey = Mat2[Key];
    //console.log(ValorKey);
    MatValues[Contador]=ValorKey;
}
console.log("Valores: ",MatValues);


/**
 * Matriz 3
 */
 console.log("=====Matriz 3 del Ejercicio:======");
//Declaración de Variables
Mat3 = {"ke1":true, "key2":false , "key3":undefined};
console.log("Matriz 3: ", Mat2);
//Seteando matrices
MatKeys = Object.keys(Mat3);
MatKeys = MatKeys.sort();
console.log("Keys Ordenadas: ",MatKeys);
MatValues = [];

Contador = 0;
//Recorrido por la Matriz principal para encontrar el valor correspondiente
for(Contador; Contador < MatKeys.length ; Contador++){
    Key = MatKeys[Contador];
    //console.log("Valor de Matkeys en la posicion(",Contador,") = ", Key);
    ValorKey = Mat3[Key];
    //console.log(ValorKey);
    MatValues[Contador]=ValorKey;
}
console.log("Valores: ",MatValues);







