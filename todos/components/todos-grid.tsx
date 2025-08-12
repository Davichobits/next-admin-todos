'use client'
import { Todo } from '@/app/generated/prisma'
import { TodoItem } from './todo-item';
import { useRouter } from 'next/navigation';
import * as todosApi from '@/todos/helpers/todos'

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({todos = []}: Props) => {

  const router = useRouter();

  const toggleTodo = async(id:string, complete:boolean) =>{
    await todosApi.updateTodo(id, complete);
    router.refresh()
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 border-2'>
      {
        todos.map((todo: Todo)=><TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)
      }
    </div>
  )
}
