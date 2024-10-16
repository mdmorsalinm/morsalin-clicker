// Counter App
var count = 0;

let counter = document.getElementById("count-el")
counter.innerHTML = count;

function increment() {
    count++;
    console.log(count);
    counter.innerHTML = count;
}