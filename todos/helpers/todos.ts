'use server';

import { Todo } from '@/app/generated/prisma';

export const updateTodo = async(id: string, complete: boolean): Promise <Todo> => {
  const body = { complete };

  const todo = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'applications/json'
    }
  }).then( res => res.json())
  return todo;
}

export const createTodo = async(description: string): Promise <Todo> => {
  const body = { description };    
    return await fetch(`http://localhost:3000/api/todos`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'applications/json'
      }
    }).then( res => res.json()).catch((error)=> console.error(error))
  
}