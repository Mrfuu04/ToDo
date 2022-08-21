import React from "react";
import {useParams} from "react-router-dom";

const ProjectItem = ({ project }) => {
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
        </tr>
    )
}

const UsersProjects = ({ projects }) => {
    let {id} = useParams()
    let project_filter = projects.filter((project => project.users.includes(parseInt(id))))
    return (
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
            {project_filter.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default UsersProjects;
