/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Greeting from '../../greeting';

export default React.createClass({
    getInitialState:function(){
        return {};
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
            this.props.data.subscribe(function(d,i){
                },
                function(err){console.log("onError")},
                function(){console.log("on Compete")}
            );

    },
    componentWillReceiveProps:function(newVal){
        //--
        //console.log('2. Main View componentWillReceiveProps')
        //this.render()
    },
    render: function(){
        //require ('./mainView.less');
        return (
            <div className="main-view">
                <h1>Hello from the main view</h1>
               <Greeting name="World"/>
                {
                    this.props.data.map(function(d,i){
                            return (<p>{d.Symbol}</p>)
                        })
                }
            </div>
        )
    }
});

