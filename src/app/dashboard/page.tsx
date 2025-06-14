"use client";
import useSWR from "swr";

export default function Dashboard() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data)

  return (
    <div>
      <h1 className="text-5xl font-bold">Dashboard</h1>
    </div>
  );
}
