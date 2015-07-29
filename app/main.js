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
    _dataObservable = RX.Observable.from(d);

    _dataObservable
        .filter(function(d,i){
            return d.Group === _dataGroup;
        })
        .subscribe(function(res){
            //console.log("SUB +> ", res);
            React.render(
                <MainView data={d} />,
                document.getElementById('contentholder')
            );
        })

    //console.log( _dataObservable.filter(function(d,i){ return d.Group == 1; } ));

    _dataSubscription = _dataObservable.subscribe(
                                                    function(d){
                                                        //React.render(
                                                        //    <MainView data={d} />,
                                                        //    document.getElementById('contentholder')
                                                        //);
                                                    },
                                                    function(err){
                                                        console.log(err)
                                                    },
                                                    function(){
                                                        //console.log('done ')
                                                    });
}

//////////////////
function getFilteredData(){
    return _dataObservable.filter(function(d,i){
        return d.Group === 1;
    });
}



function run(){
    loadJson("data/10000.json", data => {
        handleData(data);
    });

    //React.render(
    //    <MainView data={getFilteredData()} />,
    //    document.getElementById('contentholder')
    //);
}
