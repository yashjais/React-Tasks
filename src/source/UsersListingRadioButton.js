import React from "react"

function UsersListingRadioButton(props){

    const users = [
        {id: 1, name: 'yash', email: 'yash@gmail.com'},
        {id: 2, name: 'yashika', email: 'yashika@gmail.com'},
        {id: 3, name: 'yashasvi', email: 'yashasvi@gmail.com'}
    ]

    function handleChange(e){
        alert(`${e.target.value}`)
    }

    return(
        <div>
        <h2> Users: { users.length } </h2>
            {
                users.map(function(user){
                    return (
                        <p key={user.id}> 
                            <label>
                            <input type="radio"
                                key={user.id}
                                name = {'radio'}
                                value={ user.name }
                                onChange = { handleChange }
                                selected = {true} /> {user.name} </label> 
                                <br/>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default UsersListingRadioButton