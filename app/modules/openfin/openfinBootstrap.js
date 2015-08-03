/**
 * Created by grahamclapham on 31/07/15.
 */
"use strict";
import OpenFinComponent from "./OpenFinComponent.js"
export default  (function(){
    document.addEventListener('DOMContentLoaded', function() {
        try{
            // Do this stuff if you are in the OpenFin runtime...
            if( fin !== undefined ){
                bootstrapOpenfin();
            }
        }catch(e){
            // ...however, if you aren't, don't bootstrap the openFin stuff
            noOpenFin();
        }
    });
})();

    /*  noOpenFin() called if OpenFin is not available -
        probably because you are not running from within the runtime
    */

function noOpenFin(){
    console.log("openfin not avaiable ... ")
}

function bootstrapOpenfin(){
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