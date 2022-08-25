import React from 'react';
import Pomodoro from './Pomodoro'
import Quote from './Quote';
const Home = () => {
    return (
        <div style={{textAlign:'center'}} >
            <Quote></Quote>
            <Pomodoro></Pomodoro>
        </div>
    );
}

export default Home;
