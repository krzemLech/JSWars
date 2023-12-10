import { FC } from 'react';
import { useQuery } from 'react-query'
import { getTodos } from '../api/client';
import Todo from './Todo';
import { Todo as TodoType } from '../types';

const Todos: FC = () => {
    const { data, isError, isLoading } = useQuery<TodoType[], Error>('todos', () => getTodos())
    
    return ( 
        <main>
            <h1 className='text-2xl font-bold mb-8 text-center'>Todos</h1>
            <div className='flex flex-col gap-3'>
            {isLoading && <div>Loading...</div> }
            {isError && <div>Loading...</div> }
            {data && data.map((todo) => <Todo key={todo.id} todo={todo} />)}
            </div>
        </main>
     );
}

export default Todos;