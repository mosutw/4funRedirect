// ==UserScript==
// @name           4funRedirect
// @namespace      4funRedirect
// @description    Direct Goto Current web address
// @version        0.01
// @include        http*://4fun.tw/*
// ==/UserScript==
var thisVersion = "0.01";

currentAddress = document.getElementById('target_url').value;
window.location = currentAddress;
// ENDOFSCRIPT
