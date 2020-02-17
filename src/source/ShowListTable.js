import React from "react"

class ShowListTable extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                {id: 1, name: 'yash'},
                {id: 2, name: 'anjali'},
                {id: 3, name: 'yashanjali'},
            ],
            isTable: true,
            isList: false
        }
    }

    handleListChange = () => {
        this.setState((prevState)=>{
            return {
                isList: !prevState.isList,
                isTable: !prevState.isTable
            }
        })
    } 

    handleTableChange = () => {
        this.setState((prevState)=>{
            return {
                isList: !prevState.isList,
                isTable: !prevState.isTable
            }
        })
    }  

    render() {
        return (
            <div> 
                <h2> Choose a format </h2>
                
                <label>
                    List
                    <input name="radio" type="radio" value = "list" onChange = {this.handleListChange} checked = {this.state.isList} />  
                </label>
                <label>
                    Table
                    <input name="radio" type="radio" value = "table" onChange = {this.handleTableChange} checked = {this.state.isTable} />  
                </label>

                {
                    this.state.isList === false ? (
                        <table border = '10'>
                            <thead>
                                <tr>
                                    <th> id </th>
                                    <th> name </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(function(user){
                                        return (
                                            <tr key={user.id}>
                                                <td >{user.id}</td>
                                                <td>{user.name}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    ) : (
                        <ul>
                            {
                                this.state.users.map(function(user){
                                    return <li key={user.id}> { user.name } </li>
                                })
                            }
                        </ul>
                    )
                }
            </div> 
        )
    }
} 

export default ShowListTable
