let numbers = [3, 12, 4, 5, 8, 9];
numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});