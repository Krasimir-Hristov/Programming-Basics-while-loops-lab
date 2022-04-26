function accountBalance(input) {

    let totalSum = 0;
    let index = 0;
    let currenInput = input[index];
    


    while (currenInput !== "NoMoreMoney") {
        let inputAsNumber = Number(currenInput);
        if (inputAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalSum += inputAsNumber;
        console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
        index++;
        currenInput = input[index];
    }

     console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])