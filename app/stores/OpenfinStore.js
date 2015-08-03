"use strict"

import Reflux from 'reflux';

const OpenFinStore = Reflux.createStore({
    appTitle: "The Default app title...",
    _fin:null,
    setFin:function(value){
        this._fin = value;
    },
    getAppTitle:function(){
        return this.appTitle;
    }
});

export default OpenFinStore;
