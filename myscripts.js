/*
 * MIT license.
 */
var storage = chrome.storage.local;

function getURLLists(item_urls) {
    var url_lists = [];

    // Split for every lines
    var list_line = item_urls.replace(/[\n\r][\n\r]?/g, "\n").split("\n");

    var line;
    while(line = list_line.shift()) {
        if (line.length == 0) {
            continue;
        } 
        url_lists.push(line);
    }
    return url_lists;
}
// override css highlight color
storage.get("color", function(items) {
    var sheet;
    sheet = document.styleSheets[document.styleSheets.length - 1];
    sheet.insertRule(".highlight" + "{" + "background-color: " + items.color + "}", sheet.cssRules.length);
});

storage.get("urls", function(items) {
    console.log(items);
    var url_lists = []
    if (items.urls) {
        url_lists = getURLLists(items.urls);
    }

    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        for (var j = 0; j < url_lists.length; j++) {
            if (links[i].toString().indexOf(url_lists[j]) !== -1) {
                // Do not highlight unless innerText and href are in agreement
                $("a").highlight(links[i].firstChild.nodeValue, links[i].toString());
            }
        }
    }
});
