function findMax() {
    const array = [2, 5, 1, 8, 2, 9, 1];
    let start = 0;
    let end = 0;
    const windowSize = 3;

    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    while (end < array.length) {
        sum += array[end];
        if (end - start + 1 === windowSize) {
            if (sum > max) {
                max = sum;
            }
            sum -= array[start];
            start++;
        }
        end++;
    }

    return max;
}

findMax();
