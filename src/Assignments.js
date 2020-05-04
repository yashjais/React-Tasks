import React from "react"
import { Link } from "react-router-dom"

function Assignments(props) {
    return (
        <div>
            <h2>Listing Assignments</h2>
            <ol>
                <li><Link to="/assignments/users-listing-checkbox">Users Listing - Checkbox</Link></li>
                <li><Link to="/assignments/users-listing-radiobutton">Users Listing - RadioButton</Link></li>
                <li><Link to="/assignments/users-listing-dropdown">Users Listing - DropDown</Link></li>
                <li><Link to="/assignments/tasks-completed-or-not">Tasks - Completed or Not</Link></li>
                <li><Link to="/assignments/colors-dropdown">Colors - DropDown</Link></li>
                <li><Link to="/assignments/counter">Counter</Link></li>
                <li><Link to="/assignments/toggle-color">Toggle - Color</Link></li>
                <li><Link to="/assignments/show-list-table">Show List / Table</Link></li>
                <li><Link to="/assignments/remove-by-email">Remove By Email</Link></li>
                <li><Link to="/assignments/remove-by-name">Remove By Name</Link></li>
                <li><Link to="/assignments/text-without-vowel">Text Without Vowel</Link></li>
                <li><Link to="/assignments/local-storage">Local Storage</Link></li>
                <li><Link to="/assignments/bill-selection">Bill Selection</Link></li>
                <li><Link to="/assignments/all-capitalize">All Capitalize</Link></li>
                <li><Link to="/assignments/random-dissapear">Random Dissapear</Link></li>
                <li><Link to="/assignments/shuffle-array">Shuffle Array</Link></li>
                <li><Link to="/assignments/catch-evens">Catch Evens</Link></li>
                <li><Link to="/assignments/distance-calculator">Distance Calculator</Link></li>
                <li><Link to="/assignments/stock-price">Stock Price</Link></li>
                <li><Link to="/assignments/hooks">Hooks</Link></li>
                <li><Link to="/assignments/example">Hooks Example</Link></li>
                <li><Link to="/assignments/jsonplaceholder">JsonPlaceholder</Link></li>
            </ol>
        </div>
    )
}

export default Assignments 