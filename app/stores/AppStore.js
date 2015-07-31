/**
 * Created by grahamclapham on 30/07/15.
 */
"use strict";

import Reflux from 'reflux';
import Actions from '../actions/AppActions'

const AppStore = Reflux.createStore({
    listenables:[Actions],
    _data:{
        randNum:10,
        companyData:[]
    },
    getRandNum:function(){return this._data.randNum},
    init:function(){
        //this.listenTo(Actions.testAction1, this.callback1);
    },
    onTestAction1:function(payload){
        console.log("Callback onTestAction1 ---", payload);
        this._data.randNum = Math.random()* 200 + "  -- "+payload;
        this.trigger({rand:this._data.randNum});
    },
});

export default AppStore;