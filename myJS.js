var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");
var counter = document.getElementById("counter");
var count = 0;

currentReading();

decrement.addEventListener("click" , ()=> {
    --count;
    currentReading();
});

increment.addEventListener("click" , ()=> {
    ++count ;
    currentReading();
});


function currentReading(){
    counter.innerText = count ;
}