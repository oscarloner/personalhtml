function show () {
    let element = document.getElementById("testJs");
    
    if (element.innerHTML === "Test JS") {
        element.innerHTML = "JS Tested!"; 
    } else {
        element.innerHTML = "Test JS";
    }
}