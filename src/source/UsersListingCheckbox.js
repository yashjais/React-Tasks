import React from "react"

function UsersListingCheckbox(props){
    const users = [
        {id: 1, name: 'yash', email: 'yash@gmail.com'},
        {id: 2, name: 'yashika', email: 'yashika@gmail.com'},
        {id: 3, name: 'yashasvi', email: 'yashasvi@gmail.com'}
    ]

    function handleChange(e){
        return (e.target.checked === true ? alert(`You selected ${e.target.value}`) : alert(`You deselected ${e.target.value}`))
    }
    
    return(
        <div>
        <h2> Users: { users.length } </h2>
            {
                users.map(function(user){
                    return (
                        <p key={user.id}> 
                        <input  
                            onChange={handleChange}
                            type="checkbox" 
                            value={user.name}>
                            
                        </input> {user.name} 
                        </p>
                    )
                })
            }
        </div>
    )
}

export default UsersListingCheckbox
