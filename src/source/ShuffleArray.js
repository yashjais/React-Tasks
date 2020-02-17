import React from "react"

class ShuffleArray extends React.Component  {
    constructor() {
        super()
        this.state = {
            arr: [0,1,2,3,4,5,6,7,8,9]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        // console.log('working')
        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        }
        const arr = shuffle(this.state.arr)
        // console.log(arr)
        this.setState({arr})
    }

    render() {
        return(
            <div>
                <h1> Shuffler </h1>
                <ul>
                    {
                        this.state.arr.map((ele,i) => {
                            return <li key={i}> {ele} </li>
                        })
                    }
                </ul>
                <button onClick={this.handleClick}> Shuffle </button>
            </div>
        )
    }
}

export default ShuffleArray