function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    const slice = {
        1 : num_list.slice(0, b + 1),
        2 : num_list.slice(a, num_list.length),
        3 : num_list.slice(a, b + 1),
        4 : num_list.slice(a, b + 1).filter((_, idx) => !(idx % c)),
    };
    
    return slice[n];
}