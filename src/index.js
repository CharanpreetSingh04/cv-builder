// require("file-loader?name=[name].[ext]!./index.html")
import React from "react";
import  ReactDOM  from "react-dom";
import App from "./components/App";
import './style.css';
const appElement = document.getElementById('app');
//what happens ReactDom.render in jdDom env
ReactDOM.render(<App/>, appElement);