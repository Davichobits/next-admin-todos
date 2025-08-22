/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { startTransition, useOptimistic } from 'react';
import { Todo } from '@/app/generated/prisma'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItem = ({todo, toggleTodo}:Props) => {

  const [todoOptimistic, setTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({...state, complete: newCompleteValue})
  );

  const onToggleTodo = async() => {
    try {
      startTransition(()=> setTodoOptimistic(!todoOptimistic.complete))
      
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
    } catch (error) {
      startTransition(()=> setTodoOptimistic(!todoOptimistic.complete))
    }
  }


  const todoDone = 'line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border text-blue-500 border-blue-500 flex sm:flex-row justify-between items-center gap-2 sm:gap-0';

  const todoPending = 'bg-red-50 rounded-lg shadow-sm p-5 border-dashed border text-red-500 border-red-500 flex sm:flex-row justify-between items-center gap-2 sm:gap-0'

  return (
    <div className={todoOptimistic.complete ? todoDone : todoPending}>
      <div className=''>
        <div onClick={onToggleTodo} className={`
          flex gap-6 rounded-md cursor-pointer
          hover:bg-opacity-60
          `}>
            {
              todoOptimistic.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />
            }
            
            <p>{todoOptimistic.description}</p>
        </div>
      </div>
      
    </div>
  )
}
