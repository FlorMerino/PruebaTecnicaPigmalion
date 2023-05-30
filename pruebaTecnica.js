//Algoritmo I, complejidad N^2

function sumElements1(array, x) {
    let sum;
    for (let i = 0; i < array.length - 1; i++) {
        let element = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (element + array[j] === x) {
                sum = true;
                return sum;
            }
        }
    }
    return sum=false;
}



//Algoritmo II, complejidad N 


function sumElements2(array, x) {
    let sum;
    let i = 1;
    let j = 0;
    for (i; i < array.length; i++) {

        let element = array[j];

        if (element + array[i] === x) {
            sum = true;
            return sum;
        }

        if(i===array.length-1){
            i=j+1;
            j=j+1;
        }          
    }
    return sum= false;
}
//console.log(sumElements2([1, 4, 2, 6], 8))