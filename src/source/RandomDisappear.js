import React from "react"

class RandomDissapear extends React.Component {
    constructor() {
        super()
        this.state = {
            num: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let num = Math.round(Math.random()*100)
        // console.log(num)
        this.setState({num}) 
        
        // console.log('displaying number' + num)
        setTimeout(()=>{
            // console.log('inside setINt')
            num = ''
            this.setState({num})                    
        },3000)
    }
    render() {
        return(
            <div>   
                {this.state.num ? <h1>{this.state.num}</h1> : <button onClick={this.handleClick}> generate </button> }
            </div>
        )
    }
}

export default RandomDissapear