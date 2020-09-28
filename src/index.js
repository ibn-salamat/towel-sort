module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix == undefined || matrix.length == 0) {
        return result;
    } else if (matrix.length == 1) {
        return matrix;
    } else {
        matrix.forEach((item, index) => {
            index % 2 == 0 ? result.push(item) : result.push(item.reverse());
        });
        return result.flat();
    }
};
