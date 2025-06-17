import {InputTodo} from "./InputTodo.tsx";
import {Todo} from "./Todo.tsx";
import {useState} from "react";

type TaskType = {
    id: number;
    text: string;
    checked?: boolean;
}

type TodoListType = {
    title?: string;
    tasks?: TaskType[] | [];
}

type FilterValuesType = 'all' | 'active' | 'completed'


export function TodoList({title, tasks}: TodoListType) {

    const [todos, setTodos] = useState(tasks)
    const [filter, setFilter] = useState<FilterValuesType>('all')

    function deleteTask(value: number) {
        setTodos(todos?.filter(t => t.id !== value))
    }

    let tasksForTodoList = tasks

    if (filter === 'completed') {
        tasksForTodoList = todos?.filter(t => t.checked === true)
    }

    if (filter === 'active') {
        tasksForTodoList = todos?.filter(t => t.checked === false)
    }


    return (
        <div>
            <h3>{title}</h3>

            <InputTodo/>

            {tasksForTodoList?.map(todo => <Todo key={todo.id} props={todo} onClick={() => deleteTask(todo.id)}/>)}

            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}

