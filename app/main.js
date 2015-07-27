/**
 * Created by grahamclapham on 24/07/15.
 */
import _ from "lodash";
import React from "react";
import MainView from './modules/view/mainView'
import getJson from './modules/services/getJson.js'

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}

function handleData(d){
    "use strict";
    console.log(d)
}

function run(){
    "use strict";


// --main.js--
    getJson("http://www.example.com", data => {
        handleData(data);
});


    React.render(
        <MainView />,
        document.getElementById('contentholder')
    );
}
