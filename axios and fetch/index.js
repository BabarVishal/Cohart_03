// axios and fetch............
const axios = require("axios");

// async function main(){
//     const responce = await fetch("  ",{
//        method:"get",
//    });
//     const json = await responce.json(); converted into json
//     console.log(json); 
// }

// main()


async function main(){
  const responce = await axios.get(" ",
 {
    headers:{
        Authorization:"2123",
    }
  }
);
  const deta = responce.deta;
  console.log(deta);
  
}

main();

async function main(){
  const responce = await axios.post(" ",
 {
      userName:"Vishal",
      password:"12345"
  },
  {
    headers:{
        Authorization:"2123",
    }
  }
);
  const deta = responce.deta;
  console.log(deta);
  
}

main();