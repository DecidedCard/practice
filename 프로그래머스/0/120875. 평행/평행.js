function solution(dots) {
    const getSlope = ([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1);

    const pairs = [
        [0, 1, 2, 3],
        [0, 2, 1, 3],
        [0, 3, 1, 2]
    ];

    for (const [i1, i2, i3, i4] of pairs) {
        const slope1 = getSlope(dots[i1], dots[i2]);
        const slope2 = getSlope(dots[i3], dots[i4]);
        
        if (slope1 === slope2) {
            return 1;
        }
    }

    return 0;
}