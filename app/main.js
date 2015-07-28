/**
 * Created by grahamclapham on 24/07/15.
 */
"use strict";

import _ from "lodash";
import React from "react";
import MainView from './modules/view/mainView';
import {loadJson} from './services/getJson';
import { Actions } from 'thundercats';

require  ("./less/styles.less");
var RX =  require("rx");
var _dataObservable, _dataSubscription;

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}

function handleData(d){
    _dataObservable = RX.Observable.fromArray(d);
    _dataSubscription = _dataObservable.subscribe(function(x){console.log(x)}, function(err){console.log(err)},function(){console.log('done ')})
}

function getFilteredData(){
    return _dataObservable
}

function run(){
    loadJson("data/10000.json", data => {
        handleData(data);
    });

    React.render(
        <MainView data={getFilteredData()} />,
        document.getElementById('contentholder')
    );
}
