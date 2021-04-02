import React from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <Router>
            <Switch>
                <Container>
                    <Sidebar></Sidebar>
                </Container>
            </Switch>
            <Switch>
                <Container>
                    <Route path="/manageBooks">
                        <ManageBooks></ManageBooks>
                    </Route>
                    <Route path="/addBooks">
                        <AddBook></AddBook>
                    </Route>
                </Container>
            </Switch>
        </Router>
    );
};

export default Admin;