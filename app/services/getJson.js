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

export function getJsonPromise(url) {
    "use strict";
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                // Resolve the promise with the response text
                resolve(JSON.parse(xhr.response));
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(xhr.statusText));
                console.log("ERROOROROROR")
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    });
}

export function loadJson(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}