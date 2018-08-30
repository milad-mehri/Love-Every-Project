// ==UserScript==
// @name Love Scratch Projects
// @version 1.0
// @description  Love every scratch project you visit
// @match *://scratch.mit.edu/projects*
// @namespace https://greasyfork.org/users/208839
// ==/UserScript==
var txt = document.URL;
txt.split('#')[0]
var numb = txt.match(/\d/g);
numb = numb.join("");

$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/lovers/" + numb + "/add/"})
