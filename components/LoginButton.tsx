// components/LoginButton.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return (
      <div>
        <p>Hai, {session.user?.email}!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Tombol Khusus Setelah Login
        </button>
        <br />
        <button onClick={() => signOut()} className="mt-2 underline text-sm">
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Login
    </button>
  );
}
