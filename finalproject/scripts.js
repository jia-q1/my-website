//Date Object and conditionals
let day = new Date().getDay();

console.log("Day number: ", day);

let reply;

if (day == 1 || day == 4) {
  reply = '"Take me to the sky"';
}
else if (day == 2 || day == 5){
 reply = '"Life is not about speed. It is about direction." ';
}

else if (day == 3 || day == 6)
reply= '"You worked hard today too." '

else{ 
 reply = '"Let us sing together"';
}

console.log(reply);

let trythis = document.getElementById("quote");
trythis.textContent = reply;


//DOM event page content 
function changetext(id){
  id.innerHTML="Love Yourself: Her (By BTS)"
}

let myTracy= document.querySelector(".alone");
myTracy.style.color="Black";

let myCarol=document.querySelector(".altwo")
myCarol.style.color="Black";