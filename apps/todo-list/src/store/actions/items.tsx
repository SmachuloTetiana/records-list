import { ItemsTypes } from "../../types";

export const addItem = (title: string) => {
    return {
        type: ItemsTypes.ADD_ITEM,
        payload: {
            title
        }
    }
}

export const toggleItem = (id: number) => {
    return {
        type: ItemsTypes.TOGGLE_ITEM,
        payload: {
            id
        }
    }
}