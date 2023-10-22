// Code your solutions in this file

function writeCards(names, eventName){
    const surprise = [];
    for(let i=0; i < names.length; i++){
        const message =`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        surprise.push(message);
    }
    return surprise;
}
const messages = writeCards(["Guadalupe","Ollie","Aki"], "surprise")
console.log(messages)

//countdown
function countDown(starter){
    while (starter >= 0){
        console.log(starter)
        starter--
    }
}
  countDown(10)
  