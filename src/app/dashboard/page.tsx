"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-center mt-10 text-muted">Loading...</div>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div
        className="w-full max-w-md p-6 rounded-2xl shadow-lg border"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--foreground)",
        }}
      >
        {session ? (
          <div className="text-center space-y-4">
            <Image
              src={session.user?.image ?? ""}
              alt={session.user?.name ?? ""}
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
            <h2 className="text-2xl font-semibold">
              Selamat datang, {session.user?.name}
            </h2>
            <p className="text-sm opacity-80">{session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="w-full py-2 rounded-lg font-medium"
              style={{
                backgroundColor: "var(--primary)",
                color: "white",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Login ke Akun Kamu</h2>
            <button
              onClick={() => signIn("google")}
              className="w-full py-2 rounded-lg font-medium"
              style={{
                backgroundColor: "var(--primary)",
                color: "white",
              }}
            >
              Login dengan Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
