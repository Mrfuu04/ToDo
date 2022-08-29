import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserList from './components/User';
import axios from 'axios';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import ProjectList from "./components/Project";
import TodoList from "./components/ToDo";
import NotFound404 from "./components/404NotFound";
import UsersProjects from "./components/UsersProjects";
import LoginForm from "./components/Auth";
import Cookies from "universal-cookie";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todo': [],
            'token': '',
        }
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
            const users = response.data
            this.setState({'users': users})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(response => {
            const projects = response.data
            this.setState({'projects': projects})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
            const todo = response.data
            this.setState({'todo': todo})
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
        this.load_data()
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        const data = {username: username, password: password}
        axios.post('http://127.0.0.1:8000/api-token-auth/', data).then(response => {
            this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
    }

    is_authenticated() {
        return !!this.state.token
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    render() {
        return (
            <div class="wrapper">
                <div class="content">
                    <BrowserRouter>
                        {this.is_authenticated() ? <button onClick={() => this.logout()}>Выйти</button>
                            : <Link as={Link} to='/login'>Войти</Link>}
                        <Menu/>
                        <Routes>
                            <Route exact path='/' element={<ProjectList projects={this.state.projects}/>}/>
                            <Route path='/user_projects/:id' element={<UsersProjects projects={this.state.projects}/>}/>
                            <Route exact path='/users' element={<UserList users={this.state.users}/>}/>
                            <Route exact path='/todo' element={<TodoList todo={this.state.todo}/>}/>
                            <Route exact path='/login' element={<LoginForm get_token={(username, password) =>
                                this.get_token(username, password)}/>}/>
                            <Route path='*' element={<NotFound404/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App
