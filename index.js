// Counter App
var count = 0;
var entries = "";

let counter = document.getElementById("count-el")
counter.innerHTML = count;

function increment() {
    var num = Math.floor(Math.random() * 21);
    count += num;
    console.log(count);
    counter.innerHTML = count;
}

function save() {
    entries += count + " - ";
    document.getElementById("entries").innerHTML = entries;
}

function leave() {
    count--;
    counter.innerHTML = count;
}