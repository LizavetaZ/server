import React, {ChangeEvent, RefObject, useState} from 'react';

type PropsType = {
    newTitle:RefObject<HTMLInputElement>
    // setNewTitle:(newTitle:string) => void
}

export const Input = (props: PropsType) => {

    // const [newTitle, setNewTitle] = useState('')
    // console.log(newTitle)



    return (
        <input ref={props.newTitle} />)
}


// type PropsType = {
//     newTitle:string
//     setNewTitle:(newTitle:string) => void
// }
//
// export const Input = (props: PropsType) => {
//
//     // const [newTitle, setNewTitle] = useState('')
//     // console.log(newTitle)
//
//
//
//     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
//         props.setNewTitle(e.currentTarget.value)
//     }
//
//     return (
//         <input value={props.newTitle} onChange={onChangeHandler}/>
//     )
// }