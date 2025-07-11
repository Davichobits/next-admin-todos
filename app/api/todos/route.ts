import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import * as yup from 'yup';
// import { Prisma } from '@/app/generated/prisma'

export async function GET(request: Request){

  const {searchParams} = new URL(request.url);

  const take = searchParams.get('take') ?? '10';
  const skip = searchParams.get('skip') ?? '0';

  if(isNaN(+take)){
    return NextResponse.json({message: 'Take tiene que ser un número'}, {status: 400})
  }

  if(isNaN(+skip)){
    return NextResponse.json({mesage: 'Skip tiene que ser un número'}, {status:400})
  }

  const todos = await prisma.todo.findMany({
    take: Number(take),
    skip: +skip
  });

  return NextResponse.json(todos);
}

const objectSquema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().required()
})

export async function POST(request: Request){

  try {
    
    const body = await request.json();
    const validatedBody = await objectSquema.validate(body)
  
    const todo = await prisma.todo.create({data: validatedBody});
  
    return NextResponse.json(todo);
  } catch (error) {
    if(error instanceof yup.ValidationError){
      return NextResponse.json({message: error.errors}, {status: 400})
    }
    // if(error instanceof Prisma.PrismaClientValidationError ){
    //   return NextResponse.json({message: error.message})
    // }
    // console.log(error);
    return NextResponse.json({message: error})
  }

}