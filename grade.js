// A program that will auto grade students marks
// First we name a function studentMarks and give it a parameter called marks
function studentMarks(marks){
    // We use the if statement to specify that the output are numbers within a range of 0 to 100
    // if not the output should be invalid 
        if (marks < 0 || marks > 100){
            console.log("Invalid input.")
            return;
        }
        if (marks >= 80 && marks <= 100){
            console.log("A")
        } else if (marks >=60){
            console.log("B")
        } else if (marks >= 50){
            console.log("C")
        } else if (marks >= 40){
            console.log("D")
        } else if (marks <= 39){
            console.log("E")
        }
        
    }
    studentMarks(39)