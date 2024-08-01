const prompt = require('prompt-sync')(); 

const chars = ['s','P','K']
// FUNCTIONs sTART 

function getRandom() {
    return chars[Math.floor(Math.random() * chars.length)];
  }
function space() {
    console.log('\n')
}  

function Instructions() {
    console.log("some Instructions to play : ")
console.log(" S for stone  P for Paper  K for scisors ")
}
function permission() {
    if(perm=='yes' || perm=='Yes' || perm=='YEs' || perm=='yEs' || perm =='yes' || perm=='YES') {
        console.log("Lets start")
    } else if (perm=='no' || perm=='No' || perm=='NO' || perm=='nO') {
        Instructions()
        perm = prompt("Are you ready ? yes or no : ");
        permission()
    } else{
        console.log("ERROR")
    } 
}

// FUNCTIONs END
console.log("WELCOME TO STONE🪨,PAPER📝 SICSSOR✂️")
space();
Instructions()
space();
let perm = prompt("Are you ready ?  yes or no : ")
space();
permission();
space();

let ch = prompt("How Many turns do you want to play ? ")
ch = parseInt(ch)
space();
let i,mp=0,yp=0;
mp =parseInt(mp)
yp =parseInt(yp)


for(i=0; i<ch; i++) {
    let x = getRandom()
console.log(" *******PLEASE TURN ON CAPS LOCK******")
let u = prompt("your turn : ")

console.log("mine is " + x)
space();

    if(x==='S' && u==='S') {
        console.log("tie")
    } else if (x==='P'&&u==='P') {
        console.log("tie")
    } else if (x==='K'&&u==='K') {
        console.log("tie")
    }
     else if (x==='S' && u==='P') {
        console.log("Your Point")
        yp++
    } else if (x==='S' && u==='K') {
        console.log("My point")
        mp++
    } else if (x==='P' && u==='S') {
        console.log("My point")
        mp++
    } else if(x==='P' && u==='K') {
          console.log("Your Point")
          yp++
    } else if (x==='K' && u==='S') {
        console.log("Your Point")
        yp++
    } else if (x==='K' && u==='P') {
        console.log("My Point")
        mp++
    }

 } 

console.log(`The final Points are - \nmine: ${mp} \nYours : ${yp}`);

if(yp>mp) {
    console.log("You are the WINNER , I'LL see YOU NEXT TIME 🌚")
} else if(yp<mp) {
    console.log("Huuh !! loooserrrrrrrrr !!!!!")
} else{
    console.log("You should try again, you can't defeat me 🥱")
}


 
