import type {FilterValues, Task} from './App'
import {Button} from './Button'
import {ChangeEvent, useState} from "react";

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: FilterValues) => void
    createTask: (newTitle:string) => void
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter,createTask}: Props) => {
   // const inputRef = useRef<HTMLInputElement>(null)
    const [taskTitle,setTaskTitle] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement> ) => {
        setTaskTitle(e.currentTarget.value)

  }
    const onclickHandler = () => {
        createTask(taskTitle)
        setTaskTitle('')
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value = {taskTitle}
                       onChange={onChangeHandler}
                       onKeyDown={event => event.key === 'Enter' ? onclickHandler() : undefined}
                />
                <Button title={'+'} onClick={onclickHandler}/>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        const deleteTaskHandler = () => deleteTask(task.id)
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} />
                                <span>{task.title}</span>
                                <Button title={'x'} onClick={deleteTaskHandler}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'} onClick={() => changeFilter('all')}/>
                <Button title={'Active'} onClick={() => changeFilter('active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
            </div>
        </div>
    )
}
