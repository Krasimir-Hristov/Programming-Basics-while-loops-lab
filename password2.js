function password2(input){
let index = 0;
let username = input[index++];
let password = input[index++];
let data = input[index++]

while(data !== password){
    data = input[index++];
}
console.log(`Welcome ${username}!`);


}
password2(["Nakov",
"1234",
"Pass",
"1324",
"1234"])