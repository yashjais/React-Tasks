import React from "react"

class RemoveByName extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                {id: 1, name: 'yash', email: 'yash@gmail.com'},
                {id: 2, name: 'yashu', email: 'yashu@gmail.com'},
                {id: 3, name: 'yashika', email: 'yashika@gmail.com'},
                {id: 4, name: 'yashasvi', email: 'yashasvi@gmail.com'},
            ]
        }
    }

    handleRemove = (e) => {
        const confirmation = window.prompt('Are you Sure. This is user name will be wiped out of existence?')
        const removedElement = e.target.value
        // console.log(confirmation)
        // console.log('happy')

        // console.log(event.persist)
        
        if(confirmation === e.target.value){
            this.setState((prevState) => {
                // can't use normal function, if normal function is to be used, then use bind
                return(
                    {
                        users: prevState.users.filter(user => {
                            return user.name !== removedElement // can't use (e.target.value)
                        })
                    }
                )
            })
        } else{
            alert('Ivalid Input')
        }
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
                            <th> action </th>
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
                                        <td> <button value={user.name} onClick={this.handleRemove}> Remove </button> </td>
                                    </tr>
                                )
                            })
                        }                            
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RemoveByName