import {Meteor} from "meteor/meteor";
import App from "../imports/ui/App";
import React from "react";
import ReactDOM from "react-dom";


Meteor.startup(() => {
    ReactDOM.render(<App/>, document.getElementById("app"))
});