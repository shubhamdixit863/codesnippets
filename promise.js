function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function data()
{
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     if(randomIntFromInterval(2,200)%2===0)
     {
       resolve("Its even")
     }

     else{
       reject("its an odd number");
     }

   },1000)
 })
}

data().then(response=>{
  console.log(response);

})
