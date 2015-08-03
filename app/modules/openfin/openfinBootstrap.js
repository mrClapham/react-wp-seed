/**
 * Created by grahamclapham on 31/07/15.
 */
"use strict";
import React from 'react';
import OpenFinComponent from "./openFinComponent.js";
import OpenFinStore from '../../stores/OpenFinStore';

export default  (function(){
    document.addEventListener('DOMContentLoaded', function() {
        try{
            // Do this stuff if you are in the OpenFin runtime...
            bootstrapOpenfin();
        }catch(err){
            // ...however, if you aren't, don't bootstrap the openFin stuff
            console.log("Error --- ",err)
            noOpenFin();
        }
    });
})();
    /*  noOpenFin() called if OpenFin is not available -
        probably because you are not running from within the runtime
        place any code to run if OpenFin runtime is not available
    */

function noOpenFin(){
    console.log("openfin not avaiable ... ")
}

function bootstrapOpenfin(){
    OpenFinStore.setFin(fin);
    React.render(<OpenFinComponent />, document.getElementById('openfin-holder'));
    //OpenFin is ready
    fin.desktop.main(function() {
        //Update the status Indicator.
        //document.querySelector('#status-indicator').classList.toggle("online");

        //get the current version.
        fin.desktop.System.getVersion(function(version) {
            // document.querySelector('#of-version').innerText = version;
        });
    });
}