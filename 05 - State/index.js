import React from 'react';
import ReactDOM from 'react-dom';

// 05 STATE
// USING CODE FROM 01

// ES5 METHOD MEANS YOU CAN'T USE STATE!

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);



// USE ES6 CLASSES TO MANIPULATE COMPONENT STATE
// NOTICE: this.state.date INSTEAD OF props.date
// NOTICE: class constructor (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor)

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// CLOCK IS NOW A CLASS WITH STATE INSTEAD OF FUNCTION