import React from "react"

class LocalStorage extends React.Component {
    constructor(){
        super()
        const value = JSON.parse(window.sessionStorage.getItem('input'))
        // console.log(value)
        if(value){ 
            this.state = {
            inputTitle: value.inputTitle ,
            inputBody: value.inputBody 
            }
        }else{
            this.state = {
            inputTitle: '' ,
            inputBody: '' 
            }
        }
        // console.log(JSON.parse(window.sessionStorage.getItem('input')))
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }

    handleInputChange = (e) => {
        const inputTitle = e.target.value
        this.setState({inputTitle})
        
        // console.log(JSON.parse(window.sessionStorage.getItem('title')))
    }

    handleBodyChange = (e) => {
        const inputBody = e.target.value
        // sessionStorage.inputBody = inputBody
        this.setState({inputBody})
        // window.sessionStorage.setItem('input', JSON.stringify(this.state))
        // console.log(JSON.parse(window.sessionStorage.getItem('title')))
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log('remove')
    }

    render() {
        return(
            <div>
                { window.sessionStorage.setItem('input', JSON.stringify(this.state)) }
                {/* console.log(JSON.parse(window.sessionStorage.getItem('title'))) */}
                {/* console.log(JSON.parse(window.sessionStorage.getItem('body'))) */}
                <h1> Story Book </h1> 
                <form onSubmit={this.handleSubmit}>
                    <label> 
                        Title
                        <input type="text" value={this.state.inputTitle} onChange={this.handleInputChange} />
                    </label>
                    <br/>
                    <label> 
                        Body
                        <input type="text" value={this.state.inputBody} onChange={this.handleBodyChange} />
                    </label>
                    <br/>
                    <input type = "submit" />
                    <button onClick={this.handleClick}> Remove </button>
                </form>
                
            </div>
        )
    }    
}

export default LocalStorage