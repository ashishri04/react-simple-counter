import React from "react";


class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increaseCounter() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decreaseCounter() {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => { this.increaseCounter() }}>+ increament</button>
                <button onClick={() => { this.decreaseCounter() }}>- decreament</button>
            </div>
        )
    }
};

export default Counter;


