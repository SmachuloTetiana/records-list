import { RecordActionTypes, Item, ItemsTypes } from "../../types";

const initialState: Item[] = [];

export const records = (state = initialState, action: RecordActionTypes) => {
    switch(action.type) {
        case ItemsTypes.ADD_ITEM: 
            const newItem = {
                id: Date.now(),
                title: action.payload.title,
                complete: false
            }
            return [...state, newItem];
        case ItemsTypes.TOGGLE_ITEM:
            return state.map(item => item.id === action.payload.id ? { ...item, complete: !item.complete } : item);
        default: return state;
    }
}