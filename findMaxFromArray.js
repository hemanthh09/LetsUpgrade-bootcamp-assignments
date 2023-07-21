const numbers = [27, 64, 69, 12, 22];
function maxFromArray(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }

    }return(max);

}
console.log(maxFromArray(numbers));