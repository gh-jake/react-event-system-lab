// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    handleKeyUp() {
        console.log("Entering password...")
    }


    render() {
        return (
            <form>
                <input type="password" onKeyUp={this.handleKeyUp}/>
            </form>
        )
    }
}

export default Keypad;