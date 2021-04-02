import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
            <div>
                <Link to="/manageBooks" className="side-menu">Manage Books</Link>
                <Link to="/addBooks" className="side-menu">Add Books</Link>
            </div>
    );
};

export default Sidebar;