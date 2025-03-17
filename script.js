function show () {
    let element = document.getElementById("testJs");
    
    if (element.innerHTML === "Test JS") {
        element.innerHTML = "Hello World!"; 
    } else {
        element.innerHTML = "Test JS";
    }
}