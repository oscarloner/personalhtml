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

// function imageRestore() {
//     document.getElementById("applausImageSwap").src = "Applaus BG Banner.png";
// }