import { ItemsFilters } from "../../types";

export const updateFilter = (filter: string) => {
    return {
        type: ItemsFilters.UPDATE_FILTER,
        payload: {
            filter
        }
    }
}