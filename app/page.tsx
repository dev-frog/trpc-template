import Image from "next/image";
import NewsList from "./_components/NewsList";

import { serverClient } from "./_trpc/serverClient";
import Link from "next/link";

export default async function Home() {
  const news = await serverClient.getNews();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">News List</h2>
      </div>

      <NewsList initialNews={news} />
    </main>
  );
}
