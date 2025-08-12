// 'use client';
// import { useEffect } from 'react';
import { NewTodo } from '@/todos/components/new-todo';

import prisma from '@/lib/prisma';
import { TodosGrid } from '@/todos/components';

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

  // useEffect(()=>{
  //   fetch('/api/todos')
  //     .then(resp => resp.json())
  //     .then(data => console.log(data))
  // },[])

  return (
    <div className='flex flex-col items-start gap-6'>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}