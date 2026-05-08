import {useState, ChangeEvent} from "react";

type EditableSpan = {
    title: string,
    changeTitleHandler:(inputValue:string)=>void,
}

export const EditableSpan = ({title,changeTitleHandler}: EditableSpan) => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [inputValue, setInputValue] = useState('')


    const isEditModeHandler = () => {
        setIsEditMode(true)
    }
    const turnOffEditMode = () => {
        setIsEditMode(false)
        changeTitleHandler(inputValue)
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <>
            {isEditMode ? <input value={inputValue} autoFocus onChange={onChangeInputHandler} onBlur={turnOffEditMode}/> :
                <span onDoubleClick={isEditModeHandler}>{title}</span>}
        </>
    )
}