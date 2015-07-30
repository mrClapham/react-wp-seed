/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Reflux from 'reflux';
import Greeting from '../../greeting';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

console.log(" AppStore ", AppStore);

export default React.createClass({
    mixins:[Reflux.connect(AppStore)],
    getInitialState:function(){
        return {filteredData:"empty data", rand:AppStore.getRandNum()};
    },
    getDefaultProps: function(){
        return {}
    },
    componentWillMount:function(){
        //--
        console.log('0. Main View componentWillMount')
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    componentDidMount:function(){
        //--
        console.log('1. Main View componentDidMount --- ')
        this.unsubscribe = AppStore.listen(function(status) {
            console.log('status: ', status);
        });
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
    onTestClick:function(){
        AppActions.testAction1(Math.random()*200);
    },
    render: function(){
        var __data = this.props.data;
        console.log(__data)
        return (
            <div className="main-view">
                <Greeting />
                <button onClick={this.onTestClick}>Click me.</button>
                <h1>Hello from the main view...{this.state.rand}</h1>
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

