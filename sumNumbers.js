function sumNumbers(input) {
    let targetNum = Number(input[0]);
    let sum = 0;
    let index = 1;


    while(sum < targetNum){
        let currentNumber = Number(input[index]);
        sum += currentNumber;
        index++
        
    }
    console.log(sum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])