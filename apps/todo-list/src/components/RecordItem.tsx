import { useDispatch } from "react-redux";
import { toggleItem } from "../store/actions/items";

type RecordItemProps = {
    id: number;
    title: string;
    complete: boolean;
}

export const RecordItem = ({title, id, complete}: RecordItemProps) => {
    const dispatch = useDispatch();

    return (
        <li onClick={() => dispatch(toggleItem(id))} style={{ textDecoration: complete ? 'line-through' : '' }}>
            {title}
        </li>
    )
}