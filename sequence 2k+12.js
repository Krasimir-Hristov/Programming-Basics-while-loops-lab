function sequence2k2(input){

let n = Number(input[0]);

let index = 1;

while(index <= n){
    console.log(index);
   index = (index * 2) + 1;
}

}
sequence2k2(["3"])