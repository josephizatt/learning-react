import React from 'react';
import ReactDOM from 'react-dom';

// 03 MULTIPLE COMPONENTS USING PROPS

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Joe" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
