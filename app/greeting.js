/**
 * Created by grahamclapham on 24/07/15.
 */
'use strict'
import React from "react";

export default React.createClass({
    render: function(){
        require('./less/styles.less');

        return (
            <div className="lessStyle">Hello from react</div>
        );
    }
})

function run() {
    React.render(<App />, document.body);
}

