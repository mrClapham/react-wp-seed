/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Greeting from '../../greeting';

export default React.createClass({
    render: () => {
        //require ('./mainView.less');

        return (
            <div className="main-view">
                <h1>Hello from the main view</h1>
               <Greeting name="World"/>
            </div>
        )
    }
});