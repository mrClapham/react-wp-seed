/**
 * Created by grahamclapham on 24/07/15.
 */
import _ from "lodash";
import React from "react";
import MainView from './modules/view/mainView';
import {loadJson} from './modules/services/getJson';
import { Actions } from 'thundercats';
require  ("./less/styles.less");

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

    loadJson("data/10000.json", data => {
        handleData(data);
    });

    React.render(
        <MainView />,
        document.getElementById('contentholder')
    );
}
