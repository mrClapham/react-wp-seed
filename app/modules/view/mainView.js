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
        return {data:[1,2,3]}
    },
    componentWillMount:function(){
        //--
        console.log('0. Main View componentWillMount')
    },
    componentDidMount:function(){
        //--
        console.log('1. Main View componentDidMount')
    },
    componentWillReceiveProps:function(newVal){
        //--
        //console.log('2. Main View componentWillReceiveProps')
        //this.render()
    },
    render: function(){
        //require ('./mainView.less');
        console.log(this.props.data[0]);
        return (
            <div className="main-view">
                <h1>Hello from the main view</h1>
               <Greeting name="World"/>
            </div>
        )
    }
});

