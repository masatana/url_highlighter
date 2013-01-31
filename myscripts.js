var url_lists = [];
var storage = chrome.storage.local;
storage.get("urls", function(items) {
    console.log(items);
    if (items.urls) {
        url_lists = (items.urls).split("\n");
        alert(url_lists);
    }
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        for (var j = 0; j < url_lists.length; j++) {
            if (links[i].toString().indexOf(url_lists[j]) !== -1) {
                links[i].style.color = "#0F0";
            }
        }
    }
});
/*
alert("test");
$(document).ready(function() {
    alert("test");
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        for (var j = 0; j < url_lists.length; j++) {
            if (links[i].toString().indexOf(url_lists[j]) !== -1) {
                links[i].style.color = "#0F0";
                alert();
            }
        }
    }
});
*/
