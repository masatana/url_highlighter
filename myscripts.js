/*
 * MIT license.
 */
var url_lists = [];
var storage = chrome.storage.local;

storage.get("urls", function(items) {
    console.log(items);
    if (items.urls) {
        url_lists = (items.urls).split("¥n");
    }
    /*
    if (url_lists[url_lists.length-1] == "¥n") {
        url_lists.pop();
    }
    */
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        for (var j = 0; j < url_lists.length; j++) {
            if (links[i].toString().indexOf(url_lists[j]) !== -1) {
                $("a").highlight(links[i].firstChild.nodeValue, links[i].toString());
            }
        }
    }
});
