import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

function Count() {
    const [count, dispatch] = useReducer((state, action) => {
        //...
        if (action === 'add') {
            return state + 1;
        }
        return state;
    }, 0)
    return (
        <div>{count}<button onClick={() => dispatch('add')}>Increment</button></div>
    )
}


ReactDOM.render(<Count />, document.getElementById('root'));

