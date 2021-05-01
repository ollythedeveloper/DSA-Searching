function binarySearch(array, value, start, end, tries) {
    var tries = tries === undefined ? 0 : tries;

    tries++;
    if (start > end) {
        return "Value not in dataset";
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    
    if (item == value) {
        return `it took ${tries} times`;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, tries);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, tries);
    }
};

module.exports = { binarySearch }