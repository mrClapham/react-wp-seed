/**
 * Created by grahamclapham on 30/07/15.
 */
"use strict";

import Reflux from 'reflux';
import Actions from '../actions/AppActions';
import ServerAction from "../actions/ServerActions"
import {getJsonPromise} from '../services/getJson';

const AppStore = Reflux.createStore({
    listenables:[Actions, ServerAction],
    _data:{
        randNum:10,
        companyData:[]
    },
    init:function(){
        this._loadData();
        //var _dataPromise = getJsonPromise('data/10.json', this._onDataReceived, this._onDataError);
        //console.log("Init called ", _dataPromise)
    },
    getRandNum:function(){
        return this._data.randNum
    },
    _loadData:function(){
        getJsonPromise('data/10.json').then(this._onDataReceived);
    },

    _onDataReceived:function(d){
        console.log("Success ",d);
        this._data.companyData = d;
        this.trigger({data:this._data.companyData});
    },
    _onDataError:function(e){
        console.log('Error ',e);
    },
    onTestAction1:function(payload){
        this._data.randNum = Math.random()* 200 + "  -- "+payload;
        this.trigger({rand:this._data.randNum});
    }
});

export default AppStore;