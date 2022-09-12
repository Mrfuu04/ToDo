import React from "react";
import {Link} from "react-router-dom";

const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.repo_link}
            </td>
            <td>
                {project.users}
            </td>
            <td>
                <button onClick={() => deleteProject(project.id)}>Удалить</button>
            </td>
        </tr>
    )
}


const ProjectList = ({projects, deleteProject}) => {
    return (
        <div>
            <table>
                <th>
                    Название
                </th>
                <th>
                    Ссылка
                </th>
                <th>
                    Пользователи
                </th>
                <th></th>
                {projects.map((project) =>
                    <ProjectItem
                        project={project}
                        deleteProject={deleteProject}
                    />)}
            </table>
            <Link to='/project/create'>Создать</Link>
        </div>
    )
}

export default ProjectList;
