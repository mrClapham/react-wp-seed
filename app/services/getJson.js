/**
 * Created by grahamclapham on 27/07/15.
 */
// --getJson.js--
function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText)
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function getJsonPromise(url){
    "use strict";
    return new Promise(function pr(resolve, reject){

    })

}

export function loadJson(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}


