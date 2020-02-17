import React from "react"


class CatchEvens extends React.Component {
    constructor() {
        super()
        this.state = {
            number: '',
            evens: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            const number = Math.round(Math.random() * 100)
        
            if(number % 2 === 0){
                this.setState(prevState => {
                    return {
                        number,
                        evens: [].concat(number,...prevState.evens)
                    }
                })
            }else{
                this.setState({number})
            }
        },1000)
        
        
    }

    render() {
        return (
            <div>
                <h1> {this.state.number} </h1>
                <hr/>
                <h2>Catch Evens</h2>
                <ul>
                {
                    this.state.evens.map((even,index) => {
                        return <li key={index}> {even} </li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default CatchEvens