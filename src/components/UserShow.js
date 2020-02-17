import React from "react"  
import axios from "axios"

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const user = response.data
                this.setState({user})
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h1>UserShow</h1>
                <h2>{ this.state.user.name } - {this.state.user.email } </h2>    
            </div>
        )
    }
}

export default UserShow