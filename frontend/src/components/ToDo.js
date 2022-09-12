import React from "react";
import {Link} from "react-router-dom";

const TodoItem = ({item, deleteToDo}) => {
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
            <td>
                <button onClick={() => deleteToDo(item.id)}>Удалить</button>
            </td>
        </tr>
    )
}


const TodoList = ({todo, deleteToDo}) => {
    return (
        <div>
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
                <th>
                </th>
                {todo.map((todo) => <TodoItem
                    item={todo}
                    deleteToDo={deleteToDo}
                />)}
            </table>
            <Link to='/todo/create'>Создать</Link>
        </div>
    )
}

export default TodoList;