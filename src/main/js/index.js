import React from 'react';
import {createRoot} from 'react-dom/client';

import './App.css';

import {  BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import {FaCalendarAlt, FaDoorOpen, FaUsers} from 'react-icons/fa';

// On importe les 3 composants représentants les pages
import BookablesPage from './components/Bookables/BookablesPage';
import BookingsPage from './components/Bookings/BookingsPage';
import UsersPage from './components/Users/UsersPage';
// et on importe le composant UserPicker
import UserPicker from './components/Users/UserPicker';
import CssGridPage from './components/Divers/CssGridPage';

/**
 * We use the Link component to display our page links in the header, and Route elements
 * to conditionally display page components depending on the matched URL.
 * For example, if the user visits /bookings, the BookingsPage component will be displayed:
 */
const App = () => {
    console.log('js/index.js ==> rendering App component');
    return <>
        <BrowserRouter>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/bookings" className="btn btn-header">
                                    <FaCalendarAlt/>
                                    <span>Bookings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bookables" className="btn btn-header">
                                    <FaDoorOpen/>
                                    <span>Bookables</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/users" className="btn btn-header">
                                    <FaUsers/>
                                    <span>Users</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <UserPicker/>
                </header>

                <Routes>
                    <Route path="/bookings" element={<BookingsPage/>}/>
                    <Route path="/bookables" element={<BookablesPage/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/css-grid" element={<CssGridPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </>;
};


export function init() {
    console.log('js/index.js ==> init()');
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App />);
}
