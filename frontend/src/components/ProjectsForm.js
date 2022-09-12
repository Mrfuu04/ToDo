import React from "react";

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            repo_link: '',
            authors: [],
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        this.props.createProject(
            this.state.name,
            this.state.repo_link,
            this.state.authors,
        )
        event.preventDefault()
    }

    handleAuthorChange(event) {

        if (!event.target.selectedOptions) {
            this.setState({
                'authors': []
            })
            return;
        }
        let authors = []
        for(let i = 0; i < event.target.selectedOptions.length;i++){
            authors.push(event.target.selectedOptions.item(i).value)
        }

        this.setState(
            {'authors':authors}
        )
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>name </label>
                    <input type="text" name="name"
                           value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label>repo link </label>
                    <input type="text" name="repo_link"
                           value={this.state.repo_link} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label>authors </label>
                    <select name="authors" multiple
                        onChange={(event) => this.handleAuthorChange(event)}>
                        {this.props.authors.map((item) => <option
                            value={item.id}>{item.id} {item.first_name}</option>)}
                    </select>
                </div>
                <input type="submit" value="Сохранить"/>
            </form>
        )
    }
}

export default ProjectForm