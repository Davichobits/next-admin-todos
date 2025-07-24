// 'use client';
// import { useEffect } from 'react';

import prisma from '@/lib/prisma';

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
    <div>
      <h1>Rest Todos Page</h1>
      {
        todos.map(todo => <p key={todo.id}>{todo.description}</p>)
      }
    </div>
  );
}