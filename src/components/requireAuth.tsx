"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (status === "unauthenticated") {
    return null; // jangan render apapun sampai redirect selesai
  }

  return <>{children}</>;
}
