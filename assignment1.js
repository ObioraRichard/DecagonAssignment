
function findProduct(arr){
//     arr = [...arr]
    
        let result = []
        
        let prod = 1


    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] !== arr[j]){
                prod *= arr[j]
            }
        }
        result.push(prod)
        prod = 1
    }
    return result

}
findProduct([5,6,7,8])
