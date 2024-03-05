import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../store/actions/filter";

type TabProps = {
    filter: string;
    currentFilter: string;
    children: React.ReactNode;
}

export const Tab = ({
    filter,
    currentFilter,
    children
}: TabProps) => {
    const dispatch = useDispatch();

    return (
        <button 
            className={`tabs-button ${filter === currentFilter && 'active'}`}
            onClick={() => dispatch(updateFilter(filter))}
        >
            {children}
        </button>
    )
}