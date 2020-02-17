import React from 'react'
// npm install react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './Home'
import About from './About'
import UsersList from './components/UsersList'
import Contact from './Contact'
import Assignments from './Assignments'
import UsersListingCheckbox from './source/UsersListingCheckbox'
import UsersListingRadioButton from './source/UsersListingRadioButton'
import TasksCompletedorNot from './source/TasksCompletedorNot'
import ColorsDropDown from './source/ColorsDropDown'
import UsersListingDropDown from './source/UsersListingDropDown'
import Counter from './source/Counter'
import ToggleColor from './source/ToggleColor'
import ShowListTable from './source/ShowListTable'
import RemoveByEmail from './source/RemoveByEmail'
import RemoveByName from './source/RemoveByName'
import TextWithoutVowel from './source/TextWithoutVowel'
import LocalStorage from './source/LocalStorage'
import BillSelection from './source/BillSelection'
import AllCaptalize from './source/AllCapitalize'
import RandomDissapear from './source/RandomDisappear'
import ShuffleArray from './source/ShuffleArray'
import CatchEvens from './source/CatchEvens'
import DistanceCalculator from './source/DistanceCalculator'
import StockPrice from './source/StockPrice'
import UserShow from './components/UserShow'


function App(props) {
    // const fruits = ['apple', 'mango', 'kiwi']
    return ( 
        <BrowserRouter>
            <div> 
                
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users List</Link>
                <Link to="/assignments">Assigments</Link>
                <Link to="/contact">Contact</Link>
                
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/users" component={UsersList} exact={true} />
                <Route path="/assignments" component={Assignments} exact={true} />
                <Route path="/assignments/users-listing-checkbox" component={UsersListingCheckbox} />
                <Route path="/assignments/users-listing-radiobutton" component={UsersListingRadioButton} />
                <Route path="/assignments/users-listing-dropdown" component={UsersListingDropDown} />
                <Route path="/assignments/tasks-completed-or-not" component={TasksCompletedorNot} />
                <Route path="/assignments/colors-dropdown" component={ColorsDropDown} />
                <Route path="/assignments/counter" component={Counter} />
                <Route path="/assignments/toggle-color" component={ToggleColor} />
                <Route path="/assignments/show-list-table" component={ShowListTable} />
                <Route path="/assignments/remove-by-email" component={RemoveByEmail} />
                <Route path="/assignments/remove-by-name" component={RemoveByName} />
                <Route path="/assignments/text-without-vowel" component={TextWithoutVowel} />
                <Route path="/assignments/local-storage" component={LocalStorage} />
                <Route path="/assignments/bill-selection" component={BillSelection} />
                <Route path="/assignments/all-capitalize" component={AllCaptalize} />
                <Route path="/assignments/random-dissapear" component={RandomDissapear} />
                <Route path="/assignments/shuffle-array" component={ShuffleArray} />
                <Route path="/assignments/catch-evens" component={CatchEvens} />
                <Route path="/assignments/distance-calculator" component={DistanceCalculator} />
                <Route path="/assignments/stock-price" component={StockPrice} />
                <Route path="/users/:id" component={UserShow} />
                <Route path="/contact" component={Contact} />

            </div>
        </BrowserRouter>
    )
}

export default App 