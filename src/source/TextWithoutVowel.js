import React from "react"

class TextWithoutVowel extends React.Component {
    constructor() {
        super()
        this.state = {
            inputPage: '',
            inputField: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault() // no need of it
        const inputField = e.target.value
        // const inputField = e.target.value // why is not working if we are managing even two states
        // console.log(e.target.value)
        // this will also not work because we are accessing last character here if we go back one word it will be troublesome
        const length = inputField.length
        const char = inputField[length - 1]
        const vowels = ['a','e','i','o','u']
        let inputPage
        if(vowels.includes(char)){
            inputPage = this.state.inputPage
        }else{
            inputPage = this.state.inputPage + char
        }
        this.setState({inputPage,inputField})
        // console.log(char)
        // there is a bug here if we go back a input place and write a vowel the word will be repeated again and again
        // dont do setState in condition, it will create bugs
        
    }

    render() {
        return (
            <div>
                <h1> Text Without Vowels </h1>
                <h2> {this.state.inputPage} </h2>
                <form>
                    <label>
                        <input type="text" value={this.state.inputField} onChange={this.handleChange}/>
                    </label>
                </form>
            </div>
        )
    }
} 

export default TextWithoutVowel