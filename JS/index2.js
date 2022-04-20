/* const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;
const score1 = scoreDolphins > scoreKoalas;
const score2 = scoreDolphins < scoreKoalas;
const score3 = scoreDolphins === scoreKoalas


if (score1) {
    console.log('Dolphins win the Trophy!');
} else if (score2) { 
    console.log('Koalas win the Trophy!');
} else if(score3) {
    console.log('Both win the Trophy!');
};
*/ 

// BONUS1
const scoreDolphins = (97 + 112 + 101)/3;
const scoreKoalas = (109 + 95 + 123)/3;
const score1 = scoreDolphins > scoreKoalas && scoreDolphins >= 100;
const score2 = scoreDolphins < scoreKoalas && scoreKoalas >= 100;
const score3 = scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100;


if (score1) {
    console.log('Dolphins win the Trophy!');
} else if (score2) { 
    console.log('Koalas win the Trophy!');
} else if(score3) {
    console.log('Both win the Trophy!');
} else {
    console.log('No one wins the Trophy!');
};