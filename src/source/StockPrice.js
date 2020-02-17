import React from "react"

class StockPrice extends React.Component {
    constructor() {
        super() 
        this.state = {
            USD: 0,
            INR: 0,
            exchangeRate : 0,
            value: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value
        const USD = value
        const INR = USD * this.state.exchangeRate
        this.setState({USD,INR,value})
    }

    
    componentDidMount() {
        const xhr = new XMLHttpRequest
        xhr.open('GET',"https://api.exchangerate-api.com/v4/latest/USD")
        xhr.send()

        xhr.onload = () => {
            const obj = JSON.parse(xhr.responseText)
            // console.log(obj.rates.USD,obj.rates.INR)
            // const USD = obj.rates.USD
            const exchangeRate = obj.rates.INR
            this.setState({exchangeRate})
        }
    }



    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Currency Convertor</h1>
                <hr/>
                <h3> INR: {this.state.INR} </h3>
                <h3> USD: {this.state.USD} </h3>
                <input type="range" value={this.state.value} onChange={this.handleChange}/>
                <p> note 1 USD = {this.state.exchangeRate} </p>

            </div>
        )
    }
}

export default StockPrice