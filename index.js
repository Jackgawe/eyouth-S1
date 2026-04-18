// rest destructetc
const studentName = "Ahmed";
const scoresArray = [12,123,214,412,54];
function showscores(name,...scores){
    console.log("student",name)
    console.log("maxscore",Math.max(...scores))
}
showscores(studentName,...scoresArray)
//////////////////////////////////////////
console.log("Start");
setTimeout(() => {
  console.log("Later");
}, 2000);
console.log("End");
////////////////////////////////////////
// promises
let myPromise = new Promise((resolve, reject) => { //resolve used when task succsess, else not
  let success = true;

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });