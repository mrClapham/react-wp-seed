/**
 * Created by grahamclapham on 31/07/15.
 */
/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Reflux from 'reflux';

var OpenFinComponent =  React.createClass({
    mixins:[],
    getInitialState:function(){
        return {};
    },
    getDefaultProps: function(){
        return {}
    },
    componentWillMount:function(){
        //--
    },
    componentWillUnmount: function() {
        //--
    },
    componentDidMount:function(){
        //--
    },
    componentWillReceiveProps:function(newVal){
        //--
    },
    componentWillUpdate:function( nextProps,  nextState){
        //--
    },
    componentDidUpdate:function( prevProps,  prevState){
        //--
    },
    /*
    shouldComponentUpdate: function(nextProps, nextState) {
        return nextProps.id !== this.props.id;
    },
    */
    statics: {
        /*
        customMethod: function(foo) {
            return foo === 'bar';
        }
        */
    },
    render:function(){
        return (<p>OpenFinComponent</p>);
    }
})

export default OpenFinComponent;