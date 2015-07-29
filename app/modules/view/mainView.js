/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Greeting from '../../greeting';

export default React.createClass({
    getInitialState:function(){
        return {filteredData:"empty data"};
    },
    getDefaultProps: function(){
        return {}
    },
    componentWillMount:function(){
        //--
        console.log('0. Main View componentWillMount')
    },
    componentDidMount:function(){
        //--
        console.log('1. Main View componentDidMount')
        var _result =  this.props.data
            .map(function(d,i){
                return d.Symbol+", ";
            })
            .reduce(function(acc, nw){
                return acc + nw;
            })
            .subscribe( this._myOnNext,  this._myError,  this._myComplete );
    },
    componentWillReceiveProps:function(newVal){
        //--
        console.log('2. Main View componentWillReceiveProps')
        //this.render()
    },
    _myOnNext:function(v){
        this.setState({'filteredData': v});
        console.log("_myOnNext", v)
    },
    _myError:function(err){ console.log("_myError", err) },
    _myComplete:function(){
        console.log("_myComplete",e)
    },
    getDataCells:function(){
         console.log( this.props.data);
         var sub = this.props.data
            .subscribe(function(x){
                var _symbol = x.Symbol
                console.log("_symbol ",_symbol)
                return (<h1>{_symbol}</h1>)
            });

        console.log(sub);

        return <h1>Hello I am a data cell </h1>
    },
    render: function(){

        return (
            <div className="main-view">
                <h1>Hello from the main view</h1>
                <h2>{this.state.filteredData}</h2>
            </div>
        )
    }
});
//
var dataCell = React.createClass({
    render: function(){
        return <h2>Hello</h2>
    }
})

