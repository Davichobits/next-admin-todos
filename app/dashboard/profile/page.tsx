"use client"

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {

  const {data:session} = useSession();

  useEffect(()=>{
    console.log("Client side");
  })

  return (
    <div>
      <h1>Profile Page</h1>
      <hr />
      <p>{session?.user?.name || "No user name"}</p>
      <p>{session?.user?.email || "No user email"}</p>
      <p>{session?.user?.image || "No user image"}</p>
    </div>
  );
}