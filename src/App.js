import React from 'react';
import './mystyles.css';
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/tab';                   //check the path in 'node-modules'

// 1. install jQuery (see package.json)
// 2. install 'js-compile js-minify js-copy' (see package.json)

function App() {

    return (
        <div className="container general">
            <h1 className="NavBar">Record-Keeping System - Ver.1</h1>
            <NavBar />

        </div>
    )
}

export default App;


