/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Reflux from 'reflux';
import Greeting from '../../greeting';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

export default React.createClass({
    mixins:[Reflux.connect(AppStore)],
    getInitialState:function(){
        return {data:[], filteredData:"empty data", rand:AppStore.getRandNum()};
    },
    getDefaultProps: function(){
        return {data:[]}
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
        var __data = this.state.data;
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
        return {"Group":1,
            "Symbol":"ABB",
            "CompanyName":"ABB Shs Sponsored American Deposit Receipt Repr 1 Sh",
            "Open":21.9,
            "Close":0,
            "PreviousClose":21.77,
            "PreviousCloseDate":"2015-05-20",
            "High":21.99,
            "Low":21.86,
            "Last":21.97,
            "Change":0.2,
            "PercentChange":0.919,
            "Volume":95977,
            "Bid":21.97,
            "Ask":21.98,
            "Spread":0.01,
            "BidQuantity":5170,
            "AskQuantity":1900,
            "DT":"2015-05-21T11:14:58.005"}
    },
    render: function(){
        return <div className='data-cell'>
            {this.props.title} <br />
            Name: {this.props.data.CompanyName} <br />
            Open: {this.props.data.Open} <br />
            Close: {this.props.data.Close} <br />
            PreviousClose: {this.props.data.PreviousClose} <br />
            PreviousCloseDate {this.props.data.PreviousCloseDate} <br />
            High: {this.props.data.High} <br />
            Low: {this.props.data.Low} <br />
            Last: {this.props.data.Last} <br />
            Change: {this.props.data.Change} <br />
            Volume: {this.props.data.Volume} <br />
            PercentChange: {this.props.data.PercentChange} <br />
            Bid: {this.props.data.Bid} <br />
            Ask: {this.props.data.Ask} <br />
            Spread: {this.props.data.Spread} <br />
            BidQuantity: {this.props.data.BidQuantity} <br />
            AskQuantity: {this.props.data.AskQuantity} <br />
            DT: {this.props.data.DT} <br />
        </div>
    }
});

