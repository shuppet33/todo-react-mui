import {TodoList} from "./components/TodoList.tsx";

type TaskType = {
    id: number;
    text: string;
    checked: boolean;
}



function App() {



    const tasks1: TaskType[] = [
        {id: 1, checked: true, text: 'aaa aboba'},
        {id: 2, checked: true, text: 'aaa gggg'},
        {id: 3, checked: false, text: 'aaa ihk222fhkj'},
    ]

    const tasks2: TaskType[]= [
        {id: 1, checked: true, text: 'aaa aboba'},
        {id: 2, checked: true, text: 'aaa gggg'},
        {id: 3, checked: false, text: 'aaa ihkf111hkj'},
    ]


    return (
        <div className={'App'}>
            <TodoList title={'What to learn'} tasks={tasks1} />

            <TodoList title={'What to mmmm'} tasks={tasks2}/>

        </div>
    )
}


export default App
