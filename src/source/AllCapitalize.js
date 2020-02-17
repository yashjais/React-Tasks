import React from "react"

class AllCapitalize extends React.Component {
    constructor() {
        super() 
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){
        // const input = e.target.value.toUpperCase() // this will work
        const inp = e.target.value
        const array = inp.split("")
        const new_arr = array.map(ele=>ele.toUpperCase())
        const input = new_arr.join('')
        this.setState({input}) // working same as the above logic // if we go back and than write something the cursor will come to the end again
    }
    render() {
        return(
            <div>
                <h2>Words Capitalization</h2>
                <form>
                    <label>
                        <input type="text" onChange={this.handleInput} value={this.state.input}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default AllCapitalize