const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight/markHeight ** 2;
//console.log(markBMI);

const johnBMI = johnWeight/johnHeight ** 2;
//console.log(johnBMI);

const markHigherBMI = markBMI>johnBMI;
//console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log ("John's BMI is higher than Mark's!")
};



