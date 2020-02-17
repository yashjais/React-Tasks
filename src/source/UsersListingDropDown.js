import React from "react"

function UsersListingDropDown(props){
    const users = [
        {id: 1, name: 'yash', email: 'yash@gmail.com'},
        {id: 2, name: 'yashika', email: 'yashika@gmail.com'},
        {id: 3, name: 'yashasvi', email: 'yashasvi@gmail.com'}
    ]

    function handleChange(e){
        alert(`${e.target.value} was selected`)
    }

    return(
        <div>
        <h2> Users: { users.length } </h2>
        <select onChange={handleChange}>
            <option value=""> select </option>
                {
                    users.map(function(user){
                        return (  
                            <option key={user.id} value={user.name}> {user.name} </option>
                        )
                    })
                }
        </select>
        </div>
    )
}

export default UsersListingDropDown