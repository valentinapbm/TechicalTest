//TEST 10

/* Pseudocódigo
Proceso mergeSortAlgorithm (unorderedArray) 

Si la longitud de unorderedArray es menor a 2  modulo 

	Devolver unorderedArray 

Crear variable middleIndex y encontrar el indice del medio 

Crear variable firstHalf y dividir la primera mitad 

Crear variable secondHalf y dividir la segunda mitad

 

Devolver ordernarArray((mergeSortAlgorithm(firstHalf),mergeSortAlgorithm(secondHalf)) 

 

Proceso ordenarArray(firstHalf, secondHalf) 

Crear un nuevo array para asignar los valores llamado orderedArray 

Crear variable leftIndex ubicado en 0  

Crear variable rightIndex ubicado en 0 

 

Mientras el leftIndex sea menor que la longitud de firstHalf y el rightIndex sea menor que la longitud de secondHalf 

	Si firstHalf[leftIndex] < secondHalf[rightIndex] 

		agregar a orderedArray firstHalf[leftIndex] 

Añadir 1 al leftIndex 

	Sino  

		agregar a orderedArray secondHalf[rightIndex] 

		Añadir 1 al rightIndex 

Termina el ciclo 

Si firstHalf[leftIndex] existe o es diferente de undefined 

Añadir el restante de firstHalf al orderedArray 

Sino  

Añadir el restande de secondHalf al orderedArray 

Devolvemos el orderedArray 



*/
function mergeSortAlgorithm (unorderedArray){
    if (unorderedArray.length <2){
        return unorderedArray;
    }
    const middleIndex = Math.ceil(unorderedArray.length / 2);

    const firstHalf = unorderedArray.splice(0, middleIndex);   
    const secondHalf = unorderedArray.splice(-middleIndex);
    return orderArray(mergeSortAlgorithm(firstHalf),mergeSortAlgorithm(secondHalf));

}


function orderArray (firstHalf, secondHalf){
    let leftIndex =0;
    let rigthIndex =0;
    let orderedArray = [];
    

    
    while(leftIndex < firstHalf.length && rigthIndex < secondHalf.length){
        if (firstHalf[leftIndex] < secondHalf[rigthIndex]){
            orderedArray.push(firstHalf[leftIndex])
            leftIndex ++;
        }else{
            orderedArray.push(secondHalf[rigthIndex])
            rigthIndex ++;
        }
    }
    
    
    if(firstHalf[leftIndex]){
        const rest= firstHalf.slice(leftIndex)
        orderedArray.push(...rest);
    }else{
        const rest= secondHalf.slice(rigthIndex)
        orderedArray.push(...rest);
    }
    return orderedArray
}
