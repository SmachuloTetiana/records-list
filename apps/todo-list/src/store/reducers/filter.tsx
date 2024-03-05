import { FilterActionTypes, ItemsFilters } from "../../types";

export const filter = (state = ItemsFilters.SHOW_ALL, action: FilterActionTypes) => {
    switch(action.type) {
        case ItemsFilters.UPDATE_FILTER:
            return action.payload.filter;
        default: 
            return state;
    }
}