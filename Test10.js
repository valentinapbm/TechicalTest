//TEST 10
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
