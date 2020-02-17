import React from "react"

class DistanceCalculator extends React.Component {
    constructor() {
        super()
        this.state = {
            miles: 0,
            kms: 0,
            value: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const value = e.target.value
        const kms = e.target.value
        const mile = 1.6 * kms
        const miles = mile.toFixed(2)
        this.setState({value,kms,miles})
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h2>Distance Calculator</h2>
                <hr/>
                <h3>Miles = {this.state.miles}</h3>
                <h3>kms = {this.state.kms}</h3>
                <input type="range" value={this.state.value} onChange={this.handleChange} />
            </div>
        )
    }
}

export default DistanceCalculator