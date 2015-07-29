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
    },
    componentWillReceiveProps:function(newVal){
        //--
        console.log('2. Main View componentWillReceiveProps')
        this.render()
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
        var __data = this.props.data;
        console.log(__data)
        return (
            <div className="main-view">
                <greeting />

                <h1>Hello from the main view...</h1>
                { __data.map(function(d,i){
                    return (<DataCell key={i} data={d} />)
                    })
                }
            </div>
        )
    }
});
//
var DataCell = React.createClass({
    getInitialState:function(){
        return {default:"default"};
    },
    getDefaultProps: function(){
        return {title:"default title ..."}
    },
    render: function(){
        return <h2>{this.props.title} {this.props.data.CompanyName}</h2>
    }
})

