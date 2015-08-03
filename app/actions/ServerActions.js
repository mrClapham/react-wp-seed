/**
 * Created by grahamclapham on 03/08/15.
 */
import Reflux from 'reflux';
import getJson from '../services/getJson.js'

var ServerActions = Reflux.createActions({
    "loadJsonData": {children: ["completed","failed"]}
});

// when 'load' is triggered, call async operation and trigger related actions
ServerActions.loadJsonData.listen( function() {
    // By default, the listener is bound to the action
    // so we can access child actions using 'this'
    loadJsonData()
        .then( this.completed )
        .catch( this.failed );
});

export default ServerActions;