import React from 'react';
import './Dashboard.css';

function dashboard(props) {
    return (
        <div className='dashboard'>
            <p>Welcome {props.name}</p>
            <input placeholder='Enter Age' onChange={(event) => { console.log(event.target.value) }} />
        </div>
    );
}

export default dashboard;