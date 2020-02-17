import React from "react"

class BillSelection extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: 'Vodafone',
            input: ''
        }
    }

    handleOperatorChange = (e) => {
        // no need of returning a function and then in that function to change the values based on prevstate
        // console.log(e.target.name)
        // console.log(e.target.value)
        const operator = e.target.value 
        this.setState({
            selected: operator,
            input: ''
        })
    }

    handleInputChange = (e) => {
        const input = e.target.value
        this.setState({input})
    }

    render() {
        return(
            <div>
                <h2> Pay bill for { this.state.selected } </h2>
                <hr />
                <label>
                    <input name="Vodafone"
                    type="radio" 
                    value = "Vodafone" 
                    onChange = {this.handleOperatorChange} 
                    checked = {this.state.selected === 'Vodafone' ? true : false} />
                    Vodafone  
                </label>
                <label>
                    <input name="Airtel"
                    type="radio" 
                    value = "Airtel" 
                    onChange = {this.handleOperatorChange} 
                    checked = {this.state.selected === 'Airtel' ? true : false} />
                    Airtel  
                </label>
                <label>
                    <input name="Jio"
                    type="radio" 
                    value = "Jio" 
                    onChange = {this.handleOperatorChange} 
                    checked = {this.state.selected === 'Jio' ? true : false} />
                    Jio  
                </label>
                <br/>
                <br/>
                <label>
                    <input type="text" 
                    value={this.state.input} 
                    placeholder={`Enter Your ${this.state.selected}`} 
                    onChange={this.handleInputChange}/>
                </label>
            </div>
        )
    }
} 

export default BillSelection