import React from "react";

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: props.projects[0].id,
            user: props.users[0].id,
            text: '',
            activity: true,
        }
    }

    handleChange(event) {
        if (event.target.type === 'checkbox') {
            this.setState(
                {
                    [event.target.name]: event.target.checked
                }
            );
        } else {
            this.setState(
                {
                    [event.target.name]: event.target.value
                }
            )
        }
    }

    handleSubmit(event) {
        this.props.createToDo(
            this.state.project,
            this.state.user,
            this.state.text,
            this.state.activity,
        )
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Проект </label>
                    <select name="project"
                            onChange={(event) => this.handleChange(event)}>
                        {this.props.projects.map((item) => <option
                            value={item.id}>{item.id} {item.name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Текст </label>
                    <input type="text" name="text"
                           value={this.state.text} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label>Пользователь </label>
                    <select name="user"
                            onChange={(event) => this.handleChange(event)}>
                        {this.props.users.map((item) => <option
                            value={item.id}>{item.id} {item.last_name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Активность </label>
                    <input type="checkbox" name="activity" defaultChecked
                           value={this.state.activity} onChange={(event) => this.handleChange(event)}/>
                </div>
                <input type="submit" value="Сохранить"/>
            </form>
        )
    }
}

export default ToDoForm