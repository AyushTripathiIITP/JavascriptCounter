var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");
var counter = document.getElementById("counter");
var reset = document.getElementById("reset");
var count = 0;

currentReading();

reset.addEventListerner("click" , () =>
{
  count = 0;
  currentReading();
});

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
