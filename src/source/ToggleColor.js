import React from "react"

class ToggleColor extends React.Component {
    constructor() {
        super()
        // document.body.style = `background: white`
        this.state = {
            isColorWhite : true 
        }
    }

    handleClick = () => {
        
        this.setState(function(prevState){
            return {
                isColorWhite : !prevState.isColorWhite
            }
        })
        this.state.isColorWhite === true ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
        // <div style={{backgroundColor: 'black'}} ></div> // not working
        // <body style={{backgroundColor: 'black'}} > </body> // not working
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> {this.state.isColorWhite === true ? 'black' : 'white'} </button>
                
            </div>
            
        )
    }
}

export default ToggleColor