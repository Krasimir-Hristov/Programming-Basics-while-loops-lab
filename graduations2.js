function graduations2(input){

    let name = input[0];
    let index = 1;
    let avrGrade = 0;
    let isSuccess = true;
    

    while(index <= 12){
        let grade = Number(input[index])
        if (grade < 4 ){
          console.log(`${name} has been excluded at ${index} grade`);
          isSuccess = false;
          break;
        }
        avrGrade += grade;
        index++
    }
    if(isSuccess){
        console.log(`${name} graduated. Average grade: ${(avrGrade / (index - 1)).toFixed(2)}`);
    }
    
}
graduations2(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])