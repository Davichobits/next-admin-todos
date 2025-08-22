export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from '@/lib/prisma';
import { TodosGrid, NewTodo } from '@/todos/components';

export const metadata = {
  title: 'Listado de todos',
  description: 'Todos los To do'
}

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({
    orderBy: {
      description: 'asc'
    }
  })

  return (
    <div className='flex flex-col items-start gap-6'>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}