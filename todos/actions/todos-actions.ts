'use server';

import { Todo } from '@/app/generated/prisma';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({where: {id}});
  if(!todo){
    throw `Todo con id ${id} no encontrado`;
  }
  const updateTodo = await prisma.todo.update({
    where: {id},
    data: {complete}
  })

  revalidatePath('/dashboard/server-todos')
  return updateTodo;
}