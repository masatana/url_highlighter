var storage = chrome.storage.local;

var resetButton = document.querySelector("button.reset");
var submitButton = document.querySelector("button.submit");
var textarea = document.querySelector("textarea");
var select = document.getElementById("color");

loadChanges();

submitButton.addEventListener("click", saveChanges);
resetButton.addEventListener("click", reset);

function saveChanges() {
    var highlightURLs = textarea.value;
    var color = select.children[select.selectedIndex].value;
    if (!highlightURLs || !color) {
        message("Error");
        return;
    }
    storage.set({"urls": highlightURLs, "color": color} , function() {
        message("Setting saved");
    });
}

function loadChanges() {
    storage.get("urls", function(items) {
        if (items.urls) {
            textarea.value = items.urls;
            message("Loaded saved URLs");
        }
    });
}

function reset() {
    storage.remove("urls", function(items) {
        message("Reset stored URLs");
    });

    textarea.value = "";
}

function message(msg) {
    var message = document.querySelector(".message");
    message.innerText = msg;
    setTimeout(function() {
        message.innerText = "";
    }, 3000);
}
