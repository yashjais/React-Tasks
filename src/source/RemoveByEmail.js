import React from "react"

class RemoveByEmail extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                {id: 1, name: 'yash', email: 'yash@gmail.com'},
                {id: 2, name: 'yashu', email: 'yashu@gmail.com'},
                {id: 3, name: 'yashika', email: 'yashika@gmail.com'},
                {id: 4, name: 'yashasvi', email: 'yashasvi@gmail.com'},
            ],
            input: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const confirmation = window.confirm('Are you Sure. This is user name will be wiped out of existence?')
        // console.log(confirm)
        // console.log(this.state.input)
        if(confirmation){
            this.setState((prevState) => {
                // can't use normal function, if normal function is to be used, then use bind
                return(
                    {
                        users: prevState.users.filter(user => {
                            return user.email !== this.state.input
                        }),
                        input: ''
                    }
                )
            })
        }
    }

    handleInput = (e) => {
        const input = e.target.value
        this.setState({input})
    }

    render() {
        return (
            <div>
                <h2> Listing Users: { this.state.users.length } </h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> name </th>
                            <th> email </th>
                        </tr>
                    </thead>
                    <tbody>                          
                        {
                            this.state.users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td> { user.id } </td>
                                        <td> { user.name } </td>
                                        <td> { user.email } </td>
                                    </tr>
                                )
                            })
                        }                            
                    </tbody>
                </table>

                <br/>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type = "text" value = {this.state.input} onChange={this.handleInput}/>
                    </label>
                        <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default RemoveByEmail