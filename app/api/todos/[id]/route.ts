import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'

interface Args {
  params: {
    id: string
  }
}

export async function GET(request: Request, args: Args) { 

  const {params} = args;
  const {id} = params;

  const todo = await prisma.todo.findUnique({
    where: { id: id }
  })

  if(todo === null){
    return NextResponse.json({message: `El id ${id} no existe.`}, {status: 400})
  }

  return NextResponse.json(todo);
}