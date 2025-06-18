"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.replace("/login");
    } else {
      setReady(true);
    }
  }, [status, router]);

  if (!ready || !session) {
    return (
      <div className="text-center mt-20 text-lg text-gray-500">Loading...</div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row px-6 py-8 gap-6"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* KIRI - Post List */}
      <div
        className="md:w-1/2 w-full border rounded-xl p-4 overflow-y-auto max-h-screen shadow"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--background)",
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">Postingan Kamu</h2>

        {/* Dummy Card Post */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border rounded-lg p-4 mb-4 flex gap-4 items-start"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--background)",
            }}
          >
            <Image
              src="/zeta.png"
              alt="Thumbnail"
              width={60}
              height={60}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">Judul Postingan {item}</h3>
              <p className="text-sm opacity-80 mt-1">
                Ini adalah konten dummy untuk postingan ke-{item}.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* KANAN - Form Create Post */}
      <div
        className="md:w-1/2 w-full p-6 rounded-xl border shadow"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--background)",
        }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={session.user?.image ?? "/zeta.png"}
            alt={session.user?.name ?? "User"}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{session.user?.name}</h2>
            <p className="text-sm opacity-70">{session.user?.email}</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 rounded border"
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full px-4 py-2 rounded border"
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full px-4 py-2 rounded border"
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          />
          <textarea
            placeholder="Content"
            className="w-full px-4 py-2 rounded border min-h-[120px]"
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 rounded font-semibold"
            style={{
              backgroundColor: "var(--primary)",
              color: "white",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
