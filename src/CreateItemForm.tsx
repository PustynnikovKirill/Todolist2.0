import {Button} from "./Button.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";

export type CreateItemFormType = {
    createItem: (title:string) => void;
}
export const CreateItemForm = ({createItem}:CreateItemFormType) => {

    const [itemTitle, setItemTitle] = useState('')
    const [error, setError] = useState<string | null>(null)


    const createTaskHandler = () => {
        const trimmedTitle = itemTitle.trim()
        if (trimmedTitle !== '') {
            createItem(trimmedTitle)
            setItemTitle('')
        } else {
            setError('Title is required')
        }
    }

    const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setItemTitle(event.currentTarget.value)
        setError(null)
    }

    const createItemOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTaskHandler()
        }
    }

    return (
        <div>
            <input className={error ? 'error' : ''}
                   value={itemTitle}
                   onChange={changeItemTitleHandler}
                   onKeyDown={createItemOnEnterHandler}/>
            <Button title={'+'} onClick={createTaskHandler}/>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    )
}