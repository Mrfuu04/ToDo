import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserList from './components/User';
import axios from 'axios';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProjectList from "./components/Project";
import TodoList from "./components/ToDo";
import NotFound404 from "./components/404NotFound";
import UsersProjects from "./components/UsersProjects";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todo': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            const users = response.data
            this.setState({ 'users': users })
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
            const projects = response.data
            this.setState({ 'projects': projects })
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/').then(response => {
            const todo = response.data
            this.setState({ 'todo': todo })
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div class="wrapper">
                <div class="content">
                    <BrowserRouter>
                        <Menu />
                        <Routes>
                            <Route exact path='/' element={<ProjectList projects={this.state.projects} />}/>
                            <Route path='/user_projects/:id' element={<UsersProjects projects={this.state.projects}/>}/>
                            <Route exact path='/users' element={<UserList users={this.state.users} />}/>
                            <Route exact path='/todo' element={<TodoList todo={this.state.todo} />}/>
                            <Route path='*' element={<NotFound404/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
