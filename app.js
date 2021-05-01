import React from 'react';
import dataset from './dataset';
import { binarySearch } from './binarySearch'
import { linearSearch } from './linearSearch'


class App extends React.Component {

    state = {
        linear: '',
        binary: '',
    }

    handleLinear = (e) => {
        e.preventDefault()
        const input1 = e.target['linear-input'].value
        const array = dataset

        this.setState(
            {
                linear: linearSearch(array, input1)
            }
        )
    };

    handleBinary = (e) => {
        e.preventDefault()
        const input2 = e.target['binary-input'].value
        const array = dataset.sort()
        const start = 0;
        const end = array.length;
        const tries = 0;

        this.setState(
            {
                binary: binarySearch(array, input2, start, end, tries)
            }
        )
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Searching</h1>
                </header>
                <form onSubmit={this.handleLinear}>
                    <label>Linear search input:</label>
                    <input id="linear-input"></input>
                    <button type='submit'>Submit</button>
                </form>
                <form onSubmit={this.handleBinary}>
                    <label>Binary search input:</label>
                    <input id="binary-input"></input>
                    <button type='submit'>Submit</button>
                </form>
                <h2>Linear: {this.state.linear}</h2>
                <h2>Binary: {this.state.binary}</h2>
            </div>
        )
    };
}

export default App;