import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

type ToDosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<ToDosType[]>([])
    // const [newTitle, setNewTitle] = useState('')
    const newTitle = useRef<HTMLInputElement>(null)
    // console.log(todos)

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, [])

    const onClickHandler = () => {
        fetchFoo()
    }

    const onClickDeleteHandler = () => {
        setTodos([])
    }
    //
    // const addToDo = () => {
    //  const newToDO = {userId: 999, id: todos.length + 1, title: newTitle,completed: false}
    //  setTodos([newToDO, ...todos])
    //     setNewTitle('')
    // }

    const addToDo = () => {

        if (newTitle.current)
        {
            const newToDO = {userId: 999, id: todos.length + 1, title: newTitle.current.value,completed: false}
            setTodos([newToDO, ...todos])
            newTitle.current.value = ''
        }

    }



    return (
        <div className="App">
            <Button name={'Show ToDos'} callBack={onClickHandler}/>
            <Button name={'Delete ToDos'} callBack={onClickDeleteHandler}/>

            <div>
                {/*<Input newTitle = {newTitle} setNewTitle = {setNewTitle}/>*/}
                <Input newTitle={newTitle}/>
                <Button name={'Add ToDo'} callBack={addToDo}/>
            </div>
            <ul>
                {todos.map(el => {
                    return (
                        <ol key={el.id}>
                            <span>{el.id} - </span>
                            <span>{el.title}</span>
                            <input type='checkbox' checked={el.completed}/>
                            {/*<span>{el.completed}</span>*/}
                        </ol>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
