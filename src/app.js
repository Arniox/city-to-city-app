'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelloMapsIntent');
    },

    HelloMapsIntent() {
        this.ask('Hello from Maps! What 2 citites do you want to create a route for?', 'Please say two cities now!');
    },

    NewRouteIntent() {
        this.tell('Here is your route from ' + this.$inputs.cityOne.value + ' to ' + this.$inputs.cityTwo.value + ' have a safe travel');
    },
});

module.exports.app = app;
