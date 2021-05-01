function linearSearch(array, input) {
    let linearTimes = 0;
    for (let i = 0; i < array.length; i++) {
        linearTimes++
        if (array[i] == input) {
            return `It took ${linearTimes} times`
        }
    }
    return 'item not in dataset' ;
}

module.exports = { linearSearch }