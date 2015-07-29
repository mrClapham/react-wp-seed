/**
 * Created by grahamclapham on 24/07/15.
 */
'use strict'
import React from "react";

export default React.createClass({
    componentDidMount:function(){
        console.log("Greeting - componentDidMount")
    },
    render: function(){
        return (
            <div className="component-style">This is the Greeting test 123sdds...</div>
        );
    }
})

function run() {
    React.render(<App />, document.body);
}

