import React from "react";
import {Link} from "react-router-dom";

const UserItem = ({ user }) => {
    return (
        <tr>
            <td>
                <Link to={`/user_projects/${user.id}`}>{user.username}</Link>
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
        </tr>
    )
}


const UserList = ({ users }) => {
    return (
        <table>
            <th>
                Username
            </th>
            <th>
                Firstname
            </th>
            <th>
                Lastname
            </th>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList;