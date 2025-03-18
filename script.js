function show () {
    let element = document.getElementById("testJs");
    
    if (element.innerHTML === "Test JS") {
        element.innerHTML = "JS Tested!"; 
    } else {
        element.innerHTML = "Test JS";
    }
}

function imageSwap() {
    document.getElementById("applausImageSwap").src = "Applaus Big Banner.png";
}

let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;
document.getElementById("counter").innerHTML = counter;


function increase() {
    counter++;
    updateCounter();
}

function decrease() {
    counter--;
    updateCounter();
}

function updateCounter() {
    document.getElementById("counter").innerHTML = counter;
    localStorage.setItem("counter", counter);
}