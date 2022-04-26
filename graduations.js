function graduations(input){
    let name = input[0];
    let index = 1;
    let avrGrade = 0;
    let isSuccess = true;

    while(index <= 12){
        let currentGrade = Number(input[index]);
        if(currentGrade < 4 && isSuccess === true){
            console.log(`${name} has been excluded at ${index} grade`);
            isSuccess = false;
            break;
        }
        avrGrade += currentGrade;
        index++;
    }
    if(isSuccess){
        console.log(`${name} graduated. Average grade: ${(avrGrade / (input.length - 1)).toFixed(2)}`);
    }
}
graduations(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])