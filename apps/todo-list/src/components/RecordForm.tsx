import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux";

import { addItem } from "../store/actions/items";

export const RecordForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue !== '') {
            dispatch(addItem(inputValue));
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add some record ..."
                className="input-field"
            />
            <button type="submit" className="form-button" disabled={!inputValue}>Add</button>
        </form>
    )
}