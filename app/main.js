/**
 * Created by grahamclapham on 24/07/15.
 */
import _ from "lodash";
import React from "react";
import Greeting from "./greeting";


if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}


function run(){
    "use strict";
    React.render(
        <Greeting name="World"/>,
        document.getElementById('contentholder')
    );
}

console.log("Hello World...");