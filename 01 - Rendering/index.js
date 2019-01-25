import React from 'react';
import ReactDOM from 'react-dom';

// 01 INTRO TO RENDERING 
// ReactDOM.render calls element component and renders it in the DOM at ID(root)
// Wrapped in tick function to update every 1000 milliseconds

function tick() {
    const element = (
        <div>
            <h1>Hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));

}
setInterval(tick, 1000);