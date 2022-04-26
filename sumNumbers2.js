function sumNumbers2(input){

    let index = 0;
    let n = Number(input[index++]);
    
    let sum = 0;

    while(sum < n){
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++
       
    }

    console.log(sum);
}
sumNumbers2(["100",
"10",
"20",
"30",
"40"])