function accountBalance2(input){
    let index = 0;
    let money = Number(input[index]);
    let sum = 0;


    while(money !== "NoMoreMoney"){
        let currentMoney = Number(money)
        if(money < 0){
            console.log("Invalid operation!");
            break;
        }
        sum += currentMoney;
         console.log(`Increase: ${currentMoney.toFixed(2)}`);
         index++
         money = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance2(["5.51", 
"69.42",
"100",
"NoMoreMoney"])