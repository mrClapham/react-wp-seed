/**
 * Created by grahamclapham on 31/07/15.
 */
"use strict";

export default  (function(){
    var fin = fin || {}
    console.log(fin)
})();
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

function noOpenFin(){
    console.log("openfin not avaiable ... ")
}

function bootstrapOpenfin(){
    //OpenFin is ready
    fin.desktop.main(function() {
        //Update the status Indicator.
        //document.querySelector('#status-indicator').classList.toggle("online");
        alert("BOOTSTRAP... openfin ");
        //get the current version.
        fin.desktop.System.getVersion(function(version) {
            // document.querySelector('#of-version').innerText = version;
        });
    });
}