// A program that checks a drivers speed 
function checkSpeed (speed){
    // lets define some varables
    let requiredSpeed = 70;
    let demerit = 5;
    let pointGiven = 1;
    let warning = speed - requiredSpeed
    let pointsGiven =Math.floor(warning/demerit) * pointGiven 
    let excess = 60;
    let danger = (requiredSpeed + excess)
    // lets use the variables above with if and else if statements to execute our function
      if (speed <= requiredSpeed){
        console.log("Ok")
    } else if (speed >= danger){
     console.log("License suspended.")
    } else if (speed > requiredSpeed){
        console.log("Point:", + pointsGiven)
    }  
}
// call/invoke the function name while putting one parameter inside it
checkSpeed()