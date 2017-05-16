import React, { Component } from "react";
import ReactDom from  "react-dom";
import Proptypes from "prop-types";

import "./index.css";

import App from "./component/App"
ReactDom.render(
	<App name="Hero"/>,
	document.getElementById('root')
);