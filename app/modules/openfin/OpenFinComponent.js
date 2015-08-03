/**
 * Created by grahamclapham on 31/07/15.
 */
/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Reflux from 'reflux';
import Store from '../../stores/OpenFinStore'

var OpenFinComponent =  React.createClass({
    mixins:[],
    getInitialState:function(){
        return {appTitle:Store.getAppTitle()};
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
        return (<div className='openfin-content'>
            <p>OpenFinComponent: {this.state.appTitle}</p>
            <p>OpenFin is available as you are running from within the runtime.</p>

            </div>);
    }
})

export default OpenFinComponent;