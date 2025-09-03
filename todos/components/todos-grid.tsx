'use client'
import { Todo } from '@/app/generated/prisma'
import { TodoItem } from './todo-item';
import { toggleTodo } from '../actions/todos-actions';

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({todos = []}: Props) => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {
        todos.map((todo: Todo)=><TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)
      }
    </div>
  )
}
