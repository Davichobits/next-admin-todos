'use client';

import { Todo } from '@/app/generated/prisma'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItem = ({todo, toggleTodo}:Props) => {

  const todoDone = 'line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border text-blue-500 border-blue-500 flex sm:flex-row justify-between items-center gap-2 sm:gap-0';

  const todoPending = 'bg-red-50 rounded-lg shadow-sm p-5 border-dashed border text-red-500 border-red-500 flex sm:flex-row justify-between items-center gap-2 sm:gap-0'

  return (
    <div className={todo.complete ? todoDone : todoPending}>
      <div className=''>
        <div onClick={()=>toggleTodo(todo.id, !todo.complete)} className={`
          flex gap-6 rounded-md cursor-pointer
          hover:bg-opacity-60
          `}>
            {
              todo.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />
            }
            
            <p>{todo.description}</p>
        </div>
      </div>
      
    </div>
  )
}
