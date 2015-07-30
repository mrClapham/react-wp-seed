/**
 * Created by grahamclapham on 24/07/15.
 */
"use strict";

import _ from "lodash";
import React from "react";
import MainView from './modules/view/mainView';
import {loadJson} from './services/getJson';
import Actions from './actions/AppActions.js';


require  ("./less/styles.less");

var _dataObservable,
    _dataSubscription,
    _dataGroup = 1,
    _dataStart = 0,
    _dataEnd = 100,
    _restrict=100;

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}


function handleData(d){
    React.render(
        <MainView data={d} />,
        document.getElementById('contentholder')
    );
}


function run(){
    loadJson("data/10000.json", data => {
        handleData(data);
    });

}
