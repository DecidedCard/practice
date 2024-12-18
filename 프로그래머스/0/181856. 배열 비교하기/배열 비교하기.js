function solution(arr1, arr2) {
    if (arr1.length > arr2.length) return 1;
    if (arr1.length < arr2.length) return -1;
    
    const sumArr1 = arr1.reduce((acc, el) => acc + el);
    const sumArr2 = arr2.reduce((acc, el) => acc + el);

    if (sumArr1 > sumArr2) return 1;
    if (sumArr1 < sumArr2) return -1;
    
    return 0;
}