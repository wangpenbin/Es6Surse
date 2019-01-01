"use strict";

$(function () {
    var a = 0;
    var b = $("div .a li");
    var c = $("div.b  li");

    // let aDiv = document.getElementsByTagName("div").getElementsByClassName(".a").getElementsByTagName("li");

    var _loop = function _loop(i) {
        aDiv[i].onclick = function () {
            for (var _i = 0; _i < aDiv.length; _i++) {
                aDiv[_i].style.background = "red";
            }
            aDiv[i].style.background = "yellow";
        };
    };

    for (var i = 0; i < b.length; i++) {
        _loop(i);
    };
});