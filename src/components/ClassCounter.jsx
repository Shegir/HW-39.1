// src/components/ClassCounter.jsx
import { Component } from 'react';

export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });

    render() {
        return (
            <div>
                <h2>Class Counter: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}
