import React from 'react';
import ReactDOM from 'react-dom';

// 02 INTRO TO PROPS 

// Function + prop (ES5 method)
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// ES6 Class + prop
// Notice use of 'this'
class Welcome extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

const element = <Welcome name="Joe" />;

ReactDOM.render(element, document.getElementById('root'))