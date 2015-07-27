/**
 * Created by grahamclapham on 27/07/15.
 */
'use strict'
import React from "react";
import Greeting from '../../greeting';
import './mainView.less';

export default React.createClass({
    render: () => {
        return (
            <div className="main-view">
                <h1>Hello from the main view</h1>
               <Greeting name="World"/>
            </div>
        )
    }
})