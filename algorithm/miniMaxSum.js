function miniMaxSum() {
    const input = document.getElementById("inputNumber").value;
    const arrayString = input.split(' ');
    const number = arrayString.map(index => Number(index))
    const arraySorted = number.sort();
    const maxSum = arraySorted.slice(1);
    const minSum = arraySorted.slice(0, 4);
    const totalSumMax = maxSum.reduce((accumulator, object) => {
        return accumulator + object;
    }, 0)
    const totalSumMin = minSum.reduce((accumulator, object) => {
        return accumulator + object;
    }, 0)
    document.getElementById("result").innerHTML = [totalSumMin, totalSumMax];
    return [totalSumMin, totalSumMax]
}
