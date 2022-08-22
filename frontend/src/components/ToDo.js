import React from "react";

const TodoItem = ({ item }) => {
    return (
        <tr>
            <td>
                {item.user}
            </td>
            <td>
                {item.project}
            </td>
            <td>
                {item.text}
            </td>
        </tr>
    )
}


const TodoList = ({ todo }) => {
    return (
        <table>
            <th>
                Пользователь
            </th>
            <th>
                Проект
            </th>
            <th>
                Текст
            </th>
            {todo.map((todo) => <TodoItem item={todo} />)}
        </table>
    )
}

export default TodoList;