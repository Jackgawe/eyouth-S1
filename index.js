const studentName = "Ahmed";
const scoresArray = [12,123,214,412,54];

function showscores(name,...scores){
    console.log("student",name)
    console.log("maxscore",Math.max(...scores))
}

showscores(studentName,...scoresArray)