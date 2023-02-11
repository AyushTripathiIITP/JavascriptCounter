var a1 =  Math.floor(Math.random() * 7)
var a2 =  Math.floor(Math.random() * 7)

var ss = 'images/dice' + a1 + '.png' 
var st = 'images/dice' + a2 + '.png' 
document.querySelector(".img1").setAttribute("src", ss)
document.querySelector(".img2").setAttribute("src", st)

if(a1 > a2){
    document.querySelector("h1").textContent = "Player1 is a winner"
}
else if(a1 < a2){
    document.querySelector("h1").textContent = "Player2 is a winner"
}
else{
    document.querySelector("h1").textContent = "Its a draw"
}