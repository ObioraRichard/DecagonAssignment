function mergeArrays(arr1, arr2){
    let jointArray = [...arr1, ...arr2]
    jointArray.sort((a, b) => a - b)
    return jointArray

}
mergeArrays([1, 2, 4, 5, 10, 6, 3 ], [0, 8, 19, 90, 11, 16, 13 ])

