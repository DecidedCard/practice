function solution(arr) {
    let xSize = arr[0].length;
    let ySize = arr.length;
    
    return xSize > ySize ? [...arr, ...Array(xSize - ySize).fill(Array(xSize).fill(0))] : 
    arr.map(item => {
        return [...item, ...Array(ySize - xSize).fill(0)];
    });
};