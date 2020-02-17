import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
    render() {
        console.log('Header');
        return (
            <div>
                <h1 className='f1'> RobotFriends</h1>;
                <CounterButton color={'red'} />
            </div>
        );
    }
}

export default Header;
