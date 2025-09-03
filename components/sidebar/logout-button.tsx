"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

export const LogOutButton = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <button
        onClick={() => signOut()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
      >
        <CiLogout />
        <span className="group-hover:text-gray-900">Logout</span>
      </button>
    );
  } else if (status === "loading") {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer">
        <IoShieldOutline />
        <span className="group-hover:text-gray-900">Loading...</span>
      </button>
    );
  } else if (status === "unauthenticated") {
    return (
      <button
        onClick={() => signIn()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
      >
        <CiLogout />
        <span className="group-hover:text-gray-900">Login</span>
      </button>
    );
  }
};
