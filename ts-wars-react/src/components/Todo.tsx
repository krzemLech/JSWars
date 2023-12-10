import { FC, useState } from "react";
import { Todo as TodoType } from "../types";

type PropTypes = {
    todo: TodoType
}


const Todo: FC<PropTypes> = ({ todo }) => {
    const [isCompleted, setIsCompleted] = useState(todo.completed)

    const handleCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCompleted(!e.currentTarget.checked)
    }
    return ( <div className={` px-8 py-4 rounded-xl flex justify-between ${isCompleted ? 'bg-neutral-800 line-through': 'bg-neutral-700' }`}>
        <p>{todo.title}</p>
        <input type="checkbox" checked={isCompleted} onChange={handleCompleted} />
    </div> );
}

export default Todo;