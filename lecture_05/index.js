// console.log("Hello Vishal");

//  const name = "Vishal";
//  console.log(name);

//  function deta(){
//      let a = 22;
//       a = 33;
//       console.log(a);
//  }

//  let ans = deta();
// console.log(ans);


// const user = {
//     name:"Vishal",
//     lastName:"Babar",
//     address:{
//         city:"jalna",
//         village:"Kanepuri",
//     }
// }

// const city = user.address.city;
// console.log(city);

// const firstName = "Vishal Babar";
// const lastName = "Babar Vishal";
 
//  let userall = ["User","deta","answer"];
//  const userAns = userall[1];
//  console.log(userAns);

 function canVote(age){
     if(age > 18){
        return true;
     }else{
        return false;
     }
 };

 let canVoteAns = canVote(33);
 console.log(canVoteAns);

 function sum(a , b){
    let sumTotal = a + b;
    return sumTotal;
 }

 console.log(sum("11", "11"));
 
 function user(age){
       let name = "Vishal Babar,";
       return name + " my age is = " + age; 
 }

 console.log(user(22));

function assignment2(){
let greet = {
    name:"Vishal",
    age:22,
    gender:"male"
};

let ans = greet.name + " your age is =" + greet.age;

return ans;
 };

 console.log(assignment2());

