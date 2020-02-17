import React from "react"
        
class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 10,
            value: null
        }
        this.state.value = setInterval(() => {
            console.log('happy')
            if(this.state.count !==0 ){
                this.setState((prevState)=>{
                    return {
                        count: prevState.count - 1
                    }
                })
            }else{
                clearInterval(this.state.value)
            }
        },1000)
    }

    render() {
        return (
            <div>
                <h1> { this.state.count } </h1>
                {
                    // this.minus()
                            /*
                            setInterval(() => {
                            if(this.state.count != 0 ){
                                // this.state.count--
                                // console.log(this.state.count)
                                this.minus()
                            }
                        }, 1000)
                        */
                }
            </div>
        )
    }
}

export default Counter