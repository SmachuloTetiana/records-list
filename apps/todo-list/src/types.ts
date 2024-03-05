export enum ItemsTypes {
    ADD_ITEM = 'ADD_ITEM',
    TOGGLE_ITEM = 'TOGGLE_ITEM'
}

export enum ItemsFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  UPDATE_FILTER = 'UPDATE_FILTER',
}

export interface Item {
    id: number,
    title: string,
    complete: boolean,
}

export interface RecordActionTypes {
    type: string,
    payload: Item,
}

export interface FilterActionTypes {
    type: string,
    payload: {
        filter: string
    },
}

export interface AppState {
    records: Item[],
    filter: string,
}