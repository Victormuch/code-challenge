// A program that calculates net salary 
// readline is used to import modules
let readline = require('readline');
//define tax rates functions
function calculateTax(income){
// we define the taxslabs provided 
    let taxSlabs= [
        {limit: 24000, rate: 0.1},
        {limit: 32333, rate:0.25},
        {limit:500000, rate: 0.3},
        {limit: 800000, rate: 0.35},
    ];
    let tax =0; 
    let remainIncome = income;
    for (const slab of taxSlabs){
        if(remainIncome <=0) break;// the break statement is used to terminate the loop immedeately
        //calculate taxable amount within the current slab
        //we use Math.min to return the smallest number 
        const taxableAmount =Math.min(remainIncome, slab.limit);
        //calculate the taxfor the taxable amount
        tax+= taxableAmount *slab.rate;
        remainIncome -= taxableAmount
    }
    return tax;
}
//define NHIF rates
function calculateNHIFDeductions(grossPay){
   let nhifRates = [
        {limit:5999, deduction: 150},
        {limit:11999, deduction: 400},
        {limit:29999, deduction: 850},
        {limit:100000, deduction: 1700},
    ];
    for (const rate of nhifRates){
        if (grossPay<= rate.limit){
            return rate.deduction;
        }
    }
   return nhifRates[nhifRates.length - 1].deduction;
}
//define nssf rates 
function calculateNSSFContributions(pensionalPay){
   let tierIRate = 0.06;
   let tierIILowestLimit = 7001; 

if(pensionalPay <= tierIILowestLimit){
    return pensionalPay * tierIRate;
} else {
    return tierIILowestLimit * tierIRate;
}
}
//calc our net salary
function calculateNetSalary(basicSalary, benefits){
    let grossSalary = basicSalary + benefits;
    let tax = calculateTax(grossSalary);
    let NHIFDeductions = calculateNHIFDeductions(grossSalary);
    //calc NSSF ded based on basic
    let NSSFDeductions = calculateNSSFContributions(basicSalary);
    let netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;
    return{
        grossSalary,
        tax,
        NHIFDeductions,
        NSSFDeductions,
        netSalary
    };
}
//function to get the user input
function getUserInput(question){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 return new Promise((resolve) => {
    rl.question(question, (answer) =>{
        rl.close();
        resolve(parseFloat(answer));
    });
 });
}
 //function to run the program
 async function run(){
    //get user input for basic salary
    const basicSalary = await getUserInput("Your basic salary = ");
    const benefits = await getUserInput("Your Benefits = ");
    const salaryDetails = calculateNetSalary(basicSalary, benefits);

    console.log("Gross = ", salaryDetails.grossSalary);
    console.log("Tax = ", salaryDetails.tax);
    console.log("NHIF Ded = ", salaryDetails.NHIFDeductions);
    console.log("NSSF Ded = ", salaryDetails.NSSFDeductions);
    console.log("Net = ", salaryDetails.netSalary);
 }

 run();