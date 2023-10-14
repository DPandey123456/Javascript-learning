const accountId = 144556
let accountEmail = "dinpan316@gmail.com"
var accountpassword = "12345"
let accountcity = "Delhi"
let accountstate;
// accountId = 2

console.log(accountId);
console.table([accountId, accountEmail, accountpassword, accountcity, accountstate])

accountEmail = "dp.com"
accountpassword = "456"
accountcity = "Ballia"
accountstate;

/*
We should not use "Var" because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountcity, accountstate])

