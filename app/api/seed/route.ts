import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(){

  await prisma.todo.deleteMany();

  // await prisma.todo.create({
  //   data: {description: 'Piedra del alma', complete: true}
  // })

  await prisma.todo.createMany({
    data: [
      {description: '1. Piedra del alma', complete: true},
      {description: '2. Piedra del poder'},
      {description: '3. Piedra del tiempo'},
      {description: '4. Piedra del espacio'},
      {description: '5. Piedra del realidad'},

    ]
  })

  return NextResponse.json({
    message: 'seed executed'
  })
}