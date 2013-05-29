// This is Auto-Redirect 4Fun.tw to Currect Web Address Add-on

var pageMod = require("page-mod");
exports.main = function(options, callbacks) {
  var init = pageMod.PageMod({
    include: ["http://4fun.tw/*", "https://4fun.tw/*"],
    contentScript:
        'var currentAddress = document.getElementById("target_url").value;' +
        'window.location.href = currentAddress;'
 });
};
