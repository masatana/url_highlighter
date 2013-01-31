// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// matome sites urls
//
//
var array_matome_sites = []
var storage = chrome.storage.local;
storage.get("urls", function(items) {
    console.log(items);
    if (items.urls) {
        alert(items.urls);
    }
});
        
/*
var array_matome_sites = [
    "http://matomeja.jp/",
    "http://hemine.co/",
    "http://newmofu.doorblog.jp/",
    "http://uhouho2ch.com/",
    "http://www.matomech.com/",
    "http://blog.livedoor.jp/houkagoguide/",
    "http://waranew.net/",
    "http://katuru.com/",
    "http://news-choice.net/",
    "http://blog-news.doorblog.jp/",
    "http://xvideo-jp.com/",
    ]
*/

/*
$(function() {
    alert();
    var i;
    $(this).getElementsByTagName("a").each(function() {
        alert();
    });
    alert(i);
});
*/
$(document).ready(function() {
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        for (var j = 0; j < array_matome_sites.length; j++) {
            if (links[i].toString().indexOf(array_matome_sites[j]) !== -1) {
                links[i].style.color = "#0F0";
                alert();
            }
        }
    }
});
